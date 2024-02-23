from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase


class TestCreateRetrieveAndUpdateProfile(APITestCase):
    user_data = {
        'email': 'tester@example.com',
        'password': 'testing1234#',
    }

    def authenticate(self):
        self.client.post(reverse('create_user'),
                         data=self.user_data, format='json')
        response = self.client.post(
            reverse('token_obtain_pair'), data=self.user_data, format='json')
        access_token = response.data.get('access')
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {access_token}')

    def test_should_be_able_to_create_new_profile(self):
        self.authenticate()
        response = self.client.post(reverse('user_profile'))
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_should_be_unable_to_create_profile_without_first_authenticating(self):
        response = self.client.post(reverse('user_profile'))
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_should_be_able_to_view_existing_profile(self):
        self.authenticate()
        self.client.post(reverse('user_profile'))
        response = self.client.get(reverse('user_profile'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('display_name'),
                         self.user_data.get('email'))

    def test_should_be_able_update_existing_profile(self):
        update = {
            'display_name': 'test king'
        }
        self.authenticate()
        self.client.post(reverse('user_profile'))
        response = self.client.get(reverse('user_profile'))
        self.assertEqual(response.data.get('display_name'),
                         self.user_data.get('email'))
        self.client.put(reverse('user_profile'), data=update, format='json')
        response = self.client.get(reverse('user_profile'))
        self.assertNotEqual(response.data.get('display_name'),
                            self.user_data.get('email'))
        self.assertEqual(response.data.get('display_name'),
                         update.get('display_name'))

    def test_should_fail_with_400_if_update_not_provided(self):
        update = {}
        self.authenticate()
        self.client.post(reverse('user_profile'))
        response = self.client.put(
            reverse('user_profile'), data=update, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
