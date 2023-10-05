from django.db import models
from uuid import uuid4
from django.db import models

# Create your models here.

class Escala(models.Model):
    codigo = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nome = models.CharField(max_length=255)
    data_comeco = models.DateField()
    data_final = models.DateField()
    substituido = models.BooleanField(default=False) 

class Meta:
        verbose_name = "Escala"
        verbose_name_plural = "Escalas"

        def __str__(self: Escala):
            return self.nome
