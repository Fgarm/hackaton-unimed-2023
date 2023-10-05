from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status, viewsets
from datetime import datetime, timedelta
from django.utils.timezone import localtime
from datetime import datetime
from .models import Escala
from .models import FUNCIONARIOS_ESCALA
from .serializers import EscalaSerializer
from funcionario.models import Funcionario


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
        
    # devolve o médico da vez, com status diferente pra entre round e acabou a escolha
    
    # requisição passa o turno
    
    # requisição supervisor acaba a escolha / prox turno
    
    
    



# # Create your views here.
# class EscalaView(ModelViewSet):
#     serializer_class = EscalaSerializer
#     queryset = Escala.objects.all()

#     # def list(self, request, *args, **kwargs):
#     #     # queryset = Escala.objects.filter(nome="teste")
#     #     serializer = self.get_serializer(queryset, many=True)
#     #     return Response(serializer.data)

#     def create(self, request, *args, **kwargs):
#         data = request.data
#         data['data_comeco'] = datetime.now().date()
#         data['data_final'] = datetime.now().date() + timedelta(days=90) # colocar para 3 meses depois
#         serializer = EscalaSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
