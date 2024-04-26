app_name = 'screening'
from django.urls import path
from .views import (
   screening
)
urlpatterns = [
    path('', screening, name='position'),

    ]