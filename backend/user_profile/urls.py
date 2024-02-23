from django.urls import path
from .views import CreateRetrieveAndUpdateProfile


urlpatterns = (
    path('', CreateRetrieveAndUpdateProfile.as_view(), name='user_profile'),
)
