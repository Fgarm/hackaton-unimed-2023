from django.db import models

# Create your models here.

# Create your models here.
from escala.models import Escala

class Funcionario(models.Model):
    nome = models.CharField(max_length=255)
    pontuacao = models.IntegerField()
    Funcao = models.CharField(max_length=255)
    escala = models.ForeignKey(Escala, on_delete=models.CASCADE, related_name='escalas')

class Meta:
        verbose_name = "Funcionario"
        verbose_name_plural = "Funcionarios"

        def __str__(self: Funcionario):
            return self.nome
