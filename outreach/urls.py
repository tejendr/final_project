app_name = 'outreach'
from django.urls import path
from .views import (
   outreach
)
urlpatterns = [
    path('', outreach, name='outreach'),

    ]