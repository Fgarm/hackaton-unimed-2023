
from .models import Horario
from .serializer import HorarioSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from django.http import JsonResponse
# from datetime import datetime
# from django.utils.timezone import datetime


class HorarioApiView(APIView):

    @api_view(['POST'])
    def cadastrar_horario(request):
        Horario.objects.create(inicio = request.data["inicio"],
                                    final= request.data["final"],
                                    valido= request.data["valido"],
                                    funcionario= request.data["funcionario"],
                                    escala= request.data["escala"]
                                    )
        return Response("HORARIO CADASTRADO", status=status.HTTP_201_CREATED)
    
    
    @api_view(['POST'])
    def get_horarios_funcionario(request):
        return Response(HorarioSerializer(Horario.objects.filter(funcionario=request.data["funcionario"]), context={'request': request}, many=True).data, status=status.HTTP_202_ACCEPTED)
    
    @api_view(['POST'])
    def get_horarios_escala(request):
        return Response(HorarioSerializer(Horario.objects.filter(funcionario=request.data["escala"]), context={'request': request}, many=True).data, status=status.HTTP_202_ACCEPTED)
    
    
    
        
            