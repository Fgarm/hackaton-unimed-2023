from rest_framework import serializers

from .models import Escala
from .models import FUNCIONARIOS_ESCALA

class EscalaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Escala
        fields = '__all__'
        
class FUNCIONARIOS_ESCALASerializer(serializers.ModelSerializer):
    class Meta:
        model = FUNCIONARIOS_ESCALA
        fields = '__all__'