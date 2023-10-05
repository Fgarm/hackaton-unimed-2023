from django.db import models
from uuid import uuid4
import uuid
from django.db import models
from datetime import datetime
from funcionario.models import Funcionario
# Create your models here.

class Escala(models.Model):
    codigo = models.CharField(primary_key=True, max_length=36, default=uuid4, editable=False)
    nome = models.CharField(max_length=255)
    data_comeco = models.DateField()
    data_final = models.DateField()
    class Meta:
            verbose_name = "Escala"
            verbose_name_plural = "Escalas"

            def __str__(self):
                return self.nome
    
class FUNCIONARIOS_ESCALA(models.Model):
    funcionarios = models.ForeignKey(Funcionario, on_delete=models.RESTRICT, null=True)
    escala = models.ForeignKey (Escala, on_delete=models.CASCADE, null=True)
    class Meta:
            verbose_name = "FUNCIONARIOS_ESCALA"
            verbose_name_plural = "FUNCIONARIOS_ESCALAs"

            def __str__(self):
                return self.funcionarios

