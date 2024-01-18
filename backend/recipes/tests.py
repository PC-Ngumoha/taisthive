from django.urls import reverse
from recipes.models import Recipe
from rest_framework import status
from rest_framework.test import APITestCase


class TestHelperTestCase(APITestCase):
    """Contains basic helper properties for carrying out the tests"""

    recipe_payload = {
        "name": "Simple Meal",
        "description": "A delicious meal cooked and garnished simply",
        "ingredients": ["tomato", "pepper", "red oil"],
        "instructions": ["Pour all ingredients into a pot", "stir", "eat"]
    }

    def send_create_recipe_request(self):
        response = self.client.post(
            reverse("recipes"), data=self.recipe_payload, format="json")
        return response

    def send_list_or_retrieve_recipe_request(self, id=None):
        if not id:
            response = self.client.get(reverse("recipes"))
        else:
            response = self.client.get(reverse("recipe", kwargs={'id': id}))
        return response

    @property
    def retrieve_new_recipe_id(self):
        return Recipe.objects.all()[0].id


class TestCreateListRecipeView(TestHelperTestCase):
    """Contains test cases for the recipe list and create view."""

    def test_should_create_new_recipe_when_data_is_passed_correctly(self):
        recipe_count = Recipe.objects.all().count()
        response = self.send_create_recipe_request()
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Recipe.objects.all().count(), recipe_count + 1)

    def test_should_return_400_response_when_no_data_is_passed(self):
        response = self.client.post(reverse("recipes"), data={})
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_should_be_able_to_list_all_recipes_available(self):
        recipe_count = Recipe.objects.all().count()

        response = self.send_list_or_retrieve_recipe_request()

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIsInstance(response.data, list)
        self.assertEqual(len(response.data), recipe_count)


class TestRetrieveUpdateDeleteRecipeView(TestHelperTestCase):
    """Contains test cases for the recipe retrieve, update and delete view."""

    def test_should_be_able_to_retrieve_a_particular_recipe(self):
        post_response = self.send_create_recipe_request()
        self.assertEqual(post_response.status_code, status.HTTP_201_CREATED)

        recipe_id = self.retrieve_new_recipe_id
        get_response = self.send_list_or_retrieve_recipe_request(recipe_id)

        self.assertEqual(get_response.status_code, status.HTTP_200_OK)
        self.assertEqual(self.recipe_payload.get("name"),
                         get_response.data.get("name"))

    def test_should_be_able_to_update_a_particular_recipe(self):
        modified_payload = {
            "name": "Not So Simple Meal",
            "description": "A delicious meal cooked and garnished simply",
            "ingredients": ["tomato", "pepper", "red oil"],
            "instructions": ["Pour all ingredients into a pot", "stir", "eat"]
        }

        post_response = self.send_create_recipe_request()
        self.assertEqual(post_response.status_code, status.HTTP_201_CREATED)

        recipe_id = self.retrieve_new_recipe_id
        get_response = self.send_list_or_retrieve_recipe_request(recipe_id)
        self.assertEqual(get_response.status_code, status.HTTP_200_OK)
        self.assertNotEqual(get_response.data.get(
            "name"), modified_payload.get("name"))

        put_response = self.client.put(
            reverse("recipe", kwargs={'id': recipe_id}),
            data=modified_payload,
            format="json")
        self.assertEqual(put_response.status_code, status.HTTP_200_OK)

        get_response = self.send_list_or_retrieve_recipe_request(recipe_id)
        self.assertEqual(get_response.status_code, status.HTTP_200_OK)
        self.assertEqual(get_response.data.get(
            "name"), modified_payload.get("name"))

    def test_should_return_400_response_when_no_data_is_passed(self):
        post_response = self.send_create_recipe_request()
        self.assertEqual(post_response.status_code, status.HTTP_201_CREATED)

        recipe_id = self.retrieve_new_recipe_id
        get_response = self.send_list_or_retrieve_recipe_request(recipe_id)

        put_response = self.client.put(
            reverse("recipe", kwargs={'id': recipe_id}),
            data={},
            format="json")
        self.assertEqual(put_response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_should_be_able_to_delete_a_particular_recipe(self):
        post_response = self.send_create_recipe_request()
        self.assertEqual(post_response.status_code, status.HTTP_201_CREATED)

        recipe_count = Recipe.objects.all().count()
        recipe_id = self.retrieve_new_recipe_id

        delete_response = self.client.delete(
            reverse("recipe", kwargs={'id': recipe_id}))

        self.assertEqual(delete_response.status_code,
                         status.HTTP_204_NO_CONTENT)
        self.assertEqual(Recipe.objects.all().count(), recipe_count - 1)
