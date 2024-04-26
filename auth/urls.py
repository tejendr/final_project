app_name = 'auth'
from django.urls import path
from .views import (
   create_user,log_in,log_out
)
urlpatterns = [
    path('login', log_in, name='auth_login'),
    path('logout', log_out, name='auth_logout'),

    ]