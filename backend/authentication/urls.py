from authentication.views import CreateUserView
from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView, TokenRefreshView,)

urlpatterns = [
    # path('me', RetrieveCurrentUser.as_view(), name="current_user"),
    path('register', CreateUserView.as_view(), name="create_user"),
    path('login', TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path('login/refresh', TokenRefreshView.as_view(), name="token_refresh"),
]
