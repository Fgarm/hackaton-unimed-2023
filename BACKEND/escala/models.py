from django.db import models
from uuid import uuid4
import uuid
from django.db import models

# Create your models here.

class Escala(models.Model):
    codigo = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nome = models.CharField(max_length=255)
    data_comeco = models.DateField()
    data_final = models.DateField()


class Meta:
        verbose_name = "Escala"
        verbose_name_plural = "Escalas"

        def __str__(self: Escala):
            return self.nome
