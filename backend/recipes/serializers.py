from recipes.models import Recipe
from rest_framework import serializers


class RecipeSerializers(serializers.ModelSerializer):
    """Serializes instances of the Recipe model for consumption"""
    class Meta:
        model = Recipe
        fields = ('id', 'name', 'description', 'ingredients',
                  'instructions', 'created_at', 'updated_at')
