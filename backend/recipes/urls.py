from django.urls import path
from recipes.views import (
    CreateListRecipeView, RetrieveUpdateDeleteRecipeView)

urlpatterns = (
    path("", CreateListRecipeView.as_view(), name="recipes"),
    path("<int:id>/", RetrieveUpdateDeleteRecipeView.as_view(), name="recipe"),
)
