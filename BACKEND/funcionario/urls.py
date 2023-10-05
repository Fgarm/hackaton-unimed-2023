from django.urls import path

from .views import FuncionarioApiView
#from .views import FuncionarioView

urlpatterns = [
    
    path('criar-funcionario/', FuncionarioApiView.cadastrar_funcionario, name='criar-funcionario'),

    #path('funcionario/<str:codigo', FuncionarioView.as_view({
    #    'put': 'update',
    #}), name='escala'),

]