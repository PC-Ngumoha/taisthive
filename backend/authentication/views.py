from authentication.serializers import UserSerializer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response


class CreateUserView(APIView):
    authentication_classes = []
    serializer_class = UserSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
