from recipes.models import Recipe
from recipes.serializers import RecipeSerializers
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class CreateListRecipeView(APIView):
    """Create and list recipes by user request"""
    serializer_class = RecipeSerializers

    def get(self, request):
        """GET - lists all the recipes available"""
        recipes = Recipe.objects.all()
        serializer = self.serializer_class(recipes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        """POST - creates & stores a new recipe"""
        data = request.data
        serializer = self.serializer_class(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.validated_data,
                            status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RetrieveUpdateDeleteRecipeView(APIView):
    """Retrieve, update and delete a particular recipe by user request."""

    def get(self, request, id):
        """GET - retrieves a particular recipe instance"""
        pass

    def put(self, request, id):
        """PUT - updates the details of a recipe"""
        pass

    def delete(self, request, id):
        """DELETE - deletes a particular recipe"""
        pass
