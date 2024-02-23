from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Profile(models.Model):
    display_name = models.CharField(max_length=125, blank=False, null=False)
    first_name = models.CharField(max_length=125, blank=True, null=True)
    middle_name = models.CharField(max_length=125, blank=True, null=True)
    last_name = models.CharField(max_length=125, blank=True, null=True)

    user = models.OneToOneField(User,
                                on_delete=models.CASCADE,
                                primary_key=True)
