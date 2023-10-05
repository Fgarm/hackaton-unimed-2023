from django.template.defaulttags import url
from django.urls import path, re_path
# from .views import EscalaView
from .views import EscalaApiView

# from .views import EscalaView

urlpatterns = [
    
    path('criar-escala/', EscalaApiView.cadastrar_escala, name='criar-escala'),
    path('cadastrar-medicos/', EscalaApiView.cadastrar_medicos, name='cadastrar funcionarios'),
    path('pegar-medicos-escala/', EscalaApiView.get_medicos_escala, name='pegar-medicos-escala'),
    # path('escala', EscalaView.as_view({
    #     'post': 'create',
    #     'get': 'list',
    #     # 'get': 'retrieve',
    # }), name='escala'),

]