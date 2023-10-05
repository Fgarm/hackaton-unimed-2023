from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status, viewsets
from django.utils.timezone import localtime
from datetime import datetime
from .models import Escala
from .serializers import EscalaSerializer


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
