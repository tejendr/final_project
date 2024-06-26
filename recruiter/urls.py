"""
URL configuration for recruiter project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path 
from django.conf import settings
# from authentication import url 
from django.urls import path, include
from django.conf.urls.static import static
urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/',include('recruit.urls')),
    path('auth/',include('auth.urls')),
    path('candidate/',include('candidate.urls')),
    path('dashboard/',include('dasboard.urls')),
    path('outreach/',include('outreach.urls')),
    path('positions/',include('position.urls')),
    path('screening/',include('screening.urls')),


    
 
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

print(settings.STATIC_ROOT)
print(settings.STATIC_URL)