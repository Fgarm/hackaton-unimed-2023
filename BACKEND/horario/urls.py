from django.urls import path

from .views import HorarioApiView

urlpatterns = [
    path('obter-horarios-escala/', HorarioApiView.get_horarios_escala, name='obter-horario-escala'),
    path('obter-horarios-funcionario/', HorarioApiView.get_horarios_funcionario, name='obter-horario-funcionario'),
    path('criar-horario/', HorarioApiView.cadastrar_horario, name='criar-horario'),
    path('destruir-horario/', HorarioApiView.destruir_horario, name='destruir-horario'),

]
