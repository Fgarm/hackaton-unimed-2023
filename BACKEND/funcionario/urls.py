from django.urls import path

from .views import FuncionarioApiView
#from .views import FuncionarioView

urlpatterns = [
<<<<<<< HEAD
    path('funcionario/<str:codigo', FuncionarioView.as_view({
        'put': 'update',
    }), name='funcionario'),
=======
    
    path('criar-funcionario/', FuncionarioApiView.cadastrar_funcionario, name='criar-funcionario'),
    path('pegar-funcionario/', FuncionarioApiView.pegar_funcionario, name='pegar-funcionario'),

    #path('funcionario/<str:codigo', FuncionarioView.as_view({
    #    'put': 'update',
    #}), name='escala'),
>>>>>>> e42a37fde7120131945d656b212baca2626456c8

]