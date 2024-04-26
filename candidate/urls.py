app_name = 'candidate'
from django.urls import path
from .views import (
   candidate,upload_resume
)
urlpatterns = [
    path('', candidate, name='candidate'),
    path('upload/', upload_resume, name='upload_resume'),

    ]