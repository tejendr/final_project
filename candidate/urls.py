app_name = 'candidate'
from django.urls import path
from .views import (
   candidate_,upload_resume,get_candidates
)
urlpatterns = [
    path('', candidate_, name='candidate'),
    path('upload/', upload_resume, name='upload_resume'),
   path('get-candidates/', get_candidates, name='get_candidates'),
    ]