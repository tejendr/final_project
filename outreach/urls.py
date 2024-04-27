app_name = 'outreach'
from django.urls import path
from .views import (
   outreach,create_user_info
)
urlpatterns = [
    path('', outreach, name='outreach'),
    path('api/job/create/',create_user_info,name='outreach')
    ]