from django.contrib.auth import get_user_model
from django.test import TestCase


class TestCustomUserManager(TestCase):
    User = get_user_model()

    def test_create_user(self):
        user = self.User.objects.create_user(
            email="test@example.com", password="tester123#")
        self.assertEqual(user.email, "test@example.com")
        self.assertTrue(user.is_active)
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)

        with self.assertRaises(TypeError):
            self.User.objects.create_user()

        with self.assertRaises(TypeError):
            self.User.objects.create_user(email='')

        with self.assertRaises(ValueError):
            self.User.objects.create_user(email='', password='tester123#')

    def test_create_superuser(self):
        user = self.User.objects.create_superuser(
            email="super@example.com", password="supertest123#")
        self.assertEqual(user.email, 'super@example.com')
        self.assertTrue(user.is_active)
        self.assertTrue(user.is_staff)
        self.assertTrue(user.is_superuser)

    def test_is_staff_set_to_False(self):
        with self.assertRaises(ValueError):
            user = self.User.objects.create_superuser(
                email="super@example.com", password="tester123#",
                is_staff=False)

    def test_is_superuser_set_to_False(self):
        with self.assertRaises(ValueError):
            user = self.User.objects.create_superuser(
                email="super@example.com", password="tester123#",
                is_superuser=False)

    def test_str_representation(self):
        user = self.User.objects.create_user(
            email="test@example.com", password="tester123#")
        self.assertEqual(str(user), 'test@example.com')
