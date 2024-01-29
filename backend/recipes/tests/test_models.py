from recipes.models import Recipe
from django.test import TestCase


class TestRecipeModel(TestCase):
    """Test the recipes model"""

    def test_should_contain_all_the_model_fields_fully_populated(self):
        data = {
            "name": "Simple Meal",
            "description": "A very simple Nigerian meal cooked with few ingredients",
            "ingredients": [
                "pepper", "tomato", "onions", "red oil"
            ],
            "instructions": [
                "Pound the pepper", "Pound the tomato", "Slice the onions",
                "Pour all into the bowl and stir vigorously"
            ]
        }
        recipe = Recipe.objects.create(**data)
        self.assertEqual(recipe.name, data.get("name"))
        self.assertEqual(recipe.description, data.get("description"))
        self.assertEqual(recipe.ingredients, data.get("ingredients"))
        self.assertEqual(recipe.instructions, data.get("instructions"))
