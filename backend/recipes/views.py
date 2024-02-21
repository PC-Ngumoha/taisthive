from django.shortcuts import get_object_or_404, get_list_or_404
from recipes.models import Recipe
from recipes.serializers import RecipeSerializers
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView


class CreateListRecipeView(APIView):
    """Create and list recipes by user request"""
    serializer_class = RecipeSerializers
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        recipes = get_list_or_404(Recipe, author=request.user)
        serializer = self.serializer_class(recipes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save(author=request.user)
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RetrieveUpdateDeleteRecipeView(APIView):
    """Retrieve, update and delete a particular recipe by user request."""
    serializer_class = RecipeSerializers
    permission_classes = (IsAuthenticated,)

    def get(self, request, id):
        recipe = get_object_or_404(Recipe, id=id, author=request.user)
        serializer = self.serializer_class(recipe)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, id):
        recipe = get_object_or_404(Recipe, id=id, author=request.user)
        serializer = self.serializer_class(recipe, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        recipe = get_object_or_404(Recipe, id=id, author=request.user)
        recipe.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
