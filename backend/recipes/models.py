from django.db import models


class Recipe(models.Model):
    """Recipe DB model definition"""
    id = models.AutoField()
    name = models.CharField(max_length=250)
    description = models.TextField()
    ingredients = models.JSONField(default=list)
    instructions = models.JSONField(default=list)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_add=True)
