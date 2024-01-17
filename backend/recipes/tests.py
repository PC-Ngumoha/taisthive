from django.urls import reverse
from recipes.models import Recipe
from recipes.views import (CreateListRecipeView,)
from rest_framework import status
from rest_framework.test import APITestCase


class TestCreateListRecipeView(APITestCase):
    """Contains test cases for the recipe list and create view."""

    def test_should_create_new_recipe_when_data_is_passed_correctly(self):
        recipe_count = Recipe.objects.all().count()
        data = {
            "name": "Simple Meal",
            "description": "A delicious meal cooked and garnished simply",
            "ingredients": ["tomato", "pepper", "red oil"],
            "instructions": ["Pour all ingredients into a pot", "stir", "eat"]
        }

        response = self.client.post(
            reverse("recipes"), data=data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Recipe.objects.all().count(), recipe_count + 1)

    def test_should_be_able_to_list_all_recipes_available(self):
        recipe_count = Recipe.objects.all().count()

        response = self.client.get(reverse("recipes"))

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIsInstance(response.data, list)
        self.assertEqual(len(response.data), recipe_count)


class TestRetrieveUpdateDeleteRecipeView(APITestCase):
    """Contains test cases for the recipe retrieve, update and delete view."""
    pass
