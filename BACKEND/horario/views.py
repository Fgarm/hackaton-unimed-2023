
from .models import Horario
from .serializer import HorarioSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from django.http import JsonResponse
import json
from funcionario.models import Funcionario
from escala.models import Escala
# from datetime import datetime
# from django.utils.timezone import datetime


class HorarioApiView(APIView):

    @api_view(['POST'])
    def cadastrar_horario(request):
        dados = request.data
        funct = Funcionario.objects.get(id=dados["funcionario"])
        escal = Escala.objects.get(codigo=dados["escala"])
        Horario.objects.create(data = dados["data"],
                                inicio = dados["inicio"],
                                final= dados["final"],
                                funcionario=funct,
                                escala= escal
                                )
        return Response("HORARIO CADASTRADO", status=status.HTTP_201_CREATED)
    
    
    @api_view(['POST'])
    def get_horarios_funcionario(request):
        return Response(HorarioSerializer(Horario.objects.filter(funcionario=request.data["funcionario"]), context={'request': request}, many=True).data, status=status.HTTP_202_ACCEPTED)
    
    @api_view(['POST'])
    def get_horarios_escala(request):
        return Response(HorarioSerializer(Horario.objects.filter(escala=request.data["escala"]), context={'request': request}, many=True).data, status=status.HTTP_202_ACCEPTED)
    
        