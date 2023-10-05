from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status, viewsets
from django.utils.timezone import localtime
from datetime import datetime
from .models import Escala
from .models import FUNCIONARIOS_ESCALA
from .serializers import EscalaSerializer
from funcionario.models import Funcionario
from django.db.models import Sum, F

from .models import Escala
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view


class EscalaApiView(APIView):
    @api_view(['POST'])
    def cadastrar_escala(request):
        dados = request.data
        Escala.objects.create(nome = dados["nome"],
                                data_comeco = dados["data_comeco"],
                                data_final= dados["data_final"]
                                )
        return Response("HORARIO CADASTRADO", status=status.HTTP_201_CREATED)
    
    @api_view(['UPDATE', 'PUT'])
    def cadastrar_medicos(request):
        dados = request.data
        escala = Escala.objects.get(codigo=dados["codigo"])
        funct = Funcionario.objects.get(id=dados["funcionario"])
        FUNCIONARIOS_ESCALA.objects.create(funcionario=funct, escala=escala)
        return (Response("SUCESSO", status=status.HTTP_200_OK))
    
    @api_view(['POST'])
    def get_medicos_escala(request):
        escala = Escala.objects.get(codigo=request.data["codigo"])
        functs = FUNCIONARIOS_ESCALA.objects.filter(escala=escala)

    
    # Distribui os turnos/dias que cada médico de uma escala pode ter
    @api_view(['POST'])
    def distribuir_turnos(request):
        
        escala_id = Escala.objects.get(codigo=request.data["codigo"])

        # Obtém a soma dos pontos de todos os médicos da escala
        soma_pontos = Funcionario.objects.filter(escala=escala_id).aggregate(soma_pontos=Sum('pontuacao'))['soma_pontos']

        # Obtém a lista de funcionários na escala com o peso respectivo de cada um
        funcionarios_na_escala = Funcionario.objects.filter(escala=escala_id).annotate(
            proporcao=F('peso') / soma_pontos
        )

        # Calcula a quantidade de dias/turnos que o médico pode ter com base na proporção
        quantidade_dias_total = 30  # Supondo que um mês tem 30 dias
        for funcionario in funcionarios_na_escala:
            
            quantidade_dias = int(quantidade_dias_total * funcionario.proporcao)
            
            # atribuir a quantidade de dias que ele pode ter
            funcionario.qtde_dias_turnos = quantidade_dias
            funcionario.save()
            
            # print(f"Funcionário {funcionario.nome} tem {quantidade_dias} dias no mês")
        
        return Response(status=status.HTTP_200_OK)
    
    # pega a quantidade de dias turnos que um medico pode ter
    @api_view(['GET'])
    def get_qtde_dias_turnos(request):
        funcionario = Funcionario.objects.get(id=request.data["funcionario"])
        return Response(funcionario.qtde_dias_turnos, status=status.HTTP_200_OK)
    
    
    @api_view(['GET'])
    def get_lista_medicos_ordenados_por_pontuacao(request):
        funcionario = Funcionario.objects.filter(escala=Escala.objects.get(codigo=request.data["escala"]))
        return Response(funcionario, status=status.HTTP_200_OK)
        
        

        
    # devolve o médico da vez, com status diferente pra entre round e acabou a escolha
    
    # requisição passa o turno
    
    # requisição supervisor acaba a escolha / prox turno
    
    
    



# Create your views here.
class EscalaView(ModelViewSet):
    serializer_class = EscalaSerializer
    queryset = Escala.objects.all()

    def list(self, request, *args, **kwargs):
        queryset = Escala.objects.filter(nome="teste")
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        data = request.data
        serializer = EscalaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
