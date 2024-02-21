# from authentication.models import User
from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase


class SetupAndUtilities(APITestCase):

    data_payload = {
        "email": "tester6@example.com",
        "password": "testing1234#"
    }

    data_payload_password_only = {
        "password": "testing1234#"
    }

    data_payload_email_only = {
        "email": "tester6@example.com"
    }

    def attempt_create_user(self):
        response = self.client.post(reverse("create_user"),
                                    data=self.data_payload, format="json")
        return response

    def attempt_login_user(self):
        response = self.client.post(reverse("token_obtain_pair"),
                                    data=self.data_payload, format="json")
        return response


class TestCreateUserView(SetupAndUtilities):

    def test_should_create_new_user_if_all_data_provided(self):
        User = get_user_model()
        user_count = User.objects.all().count()
        response = self.client.post(reverse("create_user"),
                                    data=self.data_payload, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.all().count(), user_count + 1)

    def test_should_not_create_new_user_if_email_not_provided(self):
        response = self.client.post(
            reverse("create_user"), data=self.data_payload_password_only,
            format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_should_not_create_new_user_if_password_not_provided(self):
        response = self.client.post(
            reverse("create_user"), data=self.data_payload_email_only,
            format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)


class TestLoginUserView(SetupAndUtilities):

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
        response = self.client.post(
            reverse("token_obtain_pair"), data=self.data_payload_password_only,
            format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_should_fail_with_400_when_user_exists_but_data_missing_password(self):
        self.attempt_create_user()
        response = self.client.post(
            reverse("token_obtain_pair"), data=self.data_payload_email_only,
            format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)


class TestRefreshUserTokensView(SetupAndUtilities):

    def test_should_return_refresh_and_access_tokens_on_access_token_refresh(self):
        self.attempt_create_user()
        response = self.attempt_login_user()
        data = {
            "refresh": response.data.get("refresh")
        }
        response = self.client.post(reverse("token_refresh"),
                                    data=data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIsNotNone(response.data.get("refresh"))
        self.assertIsNotNone(response.data.get("access"))

    def test_should_return_entirely_new_refresh_token_on_access_token_refresh(self):
        self.attempt_create_user()
        response = self.attempt_login_user()
        data = {
            "refresh": response.data.get("refresh")
        }
        response1 = self.client.post(reverse("token_refresh"),
                                     data=data, format="json")
        self.assertNotEqual(response.data.get("refresh"),
                            response1.data.get("refresh"))

    def test_should_fail_with_401_when_making_API_calls_with_old_refresh_token(self):
        self.attempt_create_user()
        response = self.attempt_login_user()
        data = {
            "refresh": response.data.get("refresh")
        }
        self.client.post(reverse("token_refresh"),
                         data=data, format="json")
        response1 = self.client.post(
            reverse("token_refresh"), data=data, format="json")
        self.assertEqual(response1.status_code, status.HTTP_401_UNAUTHORIZED)
