
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
            pass
            