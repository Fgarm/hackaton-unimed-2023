from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status, viewsets
from django.core import serializers

# Create your views here.

from .models import Funcionario
from .serializers import FuncionarioSerializer

class FuncionarioView(ModelViewSet):
    serializer_class = FuncionarioSerializer
    queryset = Funcionario.objects.all()

    def update(self, request, *args, **kwargs):
        funcionario = self.get_object()
        data = request.data
        serializer = FuncionarioSerializer(funcionario, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)