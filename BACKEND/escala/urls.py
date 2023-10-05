from django.template.defaulttags import url
from django.urls import path, re_path

urlpatterns = [
    path('escala', EscalaView.as_view({
        'post': 'create',
        'get': 'list',
        'get': 'retrieve',
    }), name='escala'),

]