from authentication.serializers import UserSerializer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response


class CreateUserView(APIView):
    authentication_classes = []
    serializer_class = UserSerializer

    def post(self, request):
        data = request.data
        serializer = self.serializer_class(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,
                            status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RetrieveCurrentUser(APIView):
    serializer_class = UserSerializer

    def get(self, request):
        user = self.serializer_class(request.user)
        return Response(user.data, status=status.HTTP_200_OK)

    def head(self, request):
        return Response(status=status.HTTP_204_NO_CONTENT)
