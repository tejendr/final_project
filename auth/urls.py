app_name = 'auth'
from django.urls import path
from .views import (
   create_user,login
)
urlpatterns = [
    path('login', login, name='auth_login'),

    ]