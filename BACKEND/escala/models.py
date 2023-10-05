from django.db import models
from uuid import uuid4
from django.db import models
from datetime import datetime
# Create your models here.

class Escala(models.Model):
    codigo = models.CharField(primary_key=True, max_length=36, default=uuid4, editable=False)
    nome = models.CharField(max_length=255)
    data_comeco = models.DateField()
    data_final = models.DateField()


class Meta:
        verbose_name = "Escala"
        verbose_name_plural = "Escalas"

        def __str__(self: Escala):
            return self.nome
