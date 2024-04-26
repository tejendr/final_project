app_name = 'dasboard'
from django.urls import path
from dasboard.views import dasboard
urlpatterns = [
    path('', dasboard, name='dasboard'),

    ]