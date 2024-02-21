from authentication.models import User
from django.db import models


class Recipe(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=250)
    description = models.TextField()
    ingredients = models.JSONField(default=list)
    instructions = models.JSONField(default=list)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

    author = models.ForeignKey(User, on_delete=models.CASCADE)
