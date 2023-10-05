from .models import Funcionario
from .serializers import FuncionarioSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view

class FuncionarioApiView(APIView):

    @api_view(['POST'])
    def cadastrar_funcionario(request):
        print(request.data)
        dados = request.data
        Funcionario.objects.create(nome = dados["nome"],
                                pontuacao = dados["pontuacao"],
                                funcao= dados["funcao"],
                                )
        return Response("FUNCIONARIO CADASTRADO", status=status.HTTP_201_CREATED)
    
    @api_view(['GET'])
    def pegar_funcionario(request):
        dados = request.data
        funct = Funcionario.objects.get(id = dados["id"],
                                )
        
        return Response(FuncionarioSerializer(funct, context={'request': request}, many=True).data, status=status.HTTP_202_ACCEPTED)
    


#class FuncionarioView(ModelViewSet):
#    serializer_class = FuncionarioSerializer
#    queryset = Funcionario.objects.all()
#
#    def update(self, request, *args, **kwargs):
#        funcionario = self.get_object()
#        data = request.data
#        serializer = FuncionarioSerializer(funcionario, data=request.data, partial=True)
#        if serializer.is_valid():
#            serializer.save()
#            return Response(serializer.data, status=status.HTTP_200_OK)
#        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)