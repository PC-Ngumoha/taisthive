from authentication.models import User
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase


class TestCreateUserView(APITestCase):
    """test the user create view"""

    def test_should_create_new_user_if_all_data_provided(self):
        data_payload = {
            "email": "tester6@example.com",
            "password": "testing1234#"
        }
        user_count = User.objects.all().count()
        response = self.client.post(reverse("create_user"),
                                    data=data_payload, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.all().count(), user_count + 1)

    def test_should_not_create_new_user_if_email_not_provided(self):
        data_payload = {
            "password": "testing1234#"
        }
        response = self.client.post(
            reverse("create_user"), data=data_payload, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_should_not_create_new_user_if_password_not_provided(self):
        data_payload = {
            "email": "tester6@example.com"
        }
        response = self.client.post(
            reverse("create_user"), data=data_payload, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)


class TestLoginUserView(APITestCase):
    """test the user login view"""

    data_payload = {
        "email": "tester6@example.com",
        "password": "testing1234#"
    }

    def attempt_create_user(self):
        response = self.client.post(reverse("create_user"),
                                    data=self.data_payload, format="json")
        return response

    def test_should_login_when_user_exists_and_data_provided(self):
        self.attempt_create_user()
        response = self.client.post(
            reverse("token_obtain_pair"), data=self.data_payload, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIsNotNone(response.data.get("access"))
        self.assertIsNotNone(response.data.get("refresh"))

    def test_should_fail_with_401_when_user_not_exist_and_data_provided(self):
        response = self.client.post(
            reverse("token_obtain_pair"), data=self.data_payload, format="json")
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_should_fail_with_400_when_user_exists_but_data_missing_email(self):
        self.attempt_create_user()
        incomplete_payload = {
            "password": self.data_payload.get("password")
        }
        response = self.client.post(
            reverse("token_obtain_pair"), data=incomplete_payload, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_should_fail_with_400_when_user_exists_but_data_missing_password(self):
        self.attempt_create_user()
        incomplete_payload = {
            "email": self.data_payload.get("email")
        }
        response = self.client.post(
            reverse("token_obtain_pair"), data=incomplete_payload, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
