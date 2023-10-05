from django.db import models


# Create your models here.
class Funcionario(models.Model):
    nome = models.CharField(max_length=255)
    pontuacao = models.IntegerField()
    funcao = models.CharField(max_length=255)
    qtde_dias_turnos = models.IntegerField()

class Meta:
        verbose_name = "Funcionario"
        verbose_name_plural = "Funcionarios"

        def __str__(self: Funcionario):
            return self.nome
