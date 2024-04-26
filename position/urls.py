app_name = 'position'
from django.urls import path
from .views import (
   position
)
from . import views
urlpatterns = [
    path('', position, name='position'),
    path('api/job/create/', views.create_job, name='create_job'),
    path('api/job/update/<int:job_id>/', views.update_job, name='update_job'),
    path('api/job/fetch/', views.fetch_jobs, name='fetch_jobs'),

    ]