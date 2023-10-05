from django.db import models
from escala.models import Escala
from funcionario.models import Funcionario
# Create your models here.


class Horario(models.Model):
    inicio = models.DateTimeField()
    final = models.DateTimeField()
    valido = models.BooleanField(default=True) 
    funcionario = models.ForeignKey(Funcionario, on_delete=models.RESTRICT, null=True)
    escala = models.ForeignKey (Escala, on_delete=models.CASCADE, null=True)