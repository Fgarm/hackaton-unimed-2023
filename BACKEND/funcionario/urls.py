from django.template.defaulttags import url
from django.urls import path

from .views import FuncionarioView

urlpatterns = [
    path('funcionario/<str:codigo', FuncionarioView.as_view({
        'put': 'update',
    }), name='escala'),

]