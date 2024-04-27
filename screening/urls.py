app_name = 'screening'
from django.urls import path
from .views import (
   screening,create,fetch_all,delete_question
)
urlpatterns = [
    path('', screening, name='position'),
    path('api/create/', create, name='create'),
    path('api/fetch/', fetch_all, name='fetch_all'),    
    path('api/delete_question/<int:question_id>/', delete_question, name='delete_question'),    
    

    ]