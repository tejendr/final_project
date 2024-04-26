app_name = 'recruit'
from django.urls import path

from auth.views import create_user
urlpatterns = [
    path('index/', create_user, name='create_user'),

    ]