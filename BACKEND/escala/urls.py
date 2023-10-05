from django.template.defaulttags import url
from django.urls import path, re_path
from .views import EscalaView
from .views import EscalaApiView

from .views import EscalaView

urlpatterns = [
    
    path('criar-escala/', EscalaApiView.cadastrar_escala, name='criar-funcionario'),
    
    path('escala', EscalaView.as_view({
        'post': 'create',
        'get': 'list',
        # 'get': 'retrieve',
    }), name='escala'),

]