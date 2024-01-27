from authentication.models import User
from rest_framework.test import APITestCase


class TestCreateUserView(APITestCase):
    """test the user create view"""

    def test_should_create_new_user_if_all_data_provided(self):
        pass

    def test_should_not_create_new_user_if_email_not_provided(self):
        pass

    def test_should_not_create_new_user_if_password_not_provided(self):
        pass
