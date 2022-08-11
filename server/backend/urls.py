
# backend/urls.py

from django.contrib import admin
from django.urls import path, include                
from rest_framework import routers                    
from user import views                          
        
router = routers.DefaultRouter()                     
router.register(r'user', views.UserView, 'user')    
        
urlpatterns = [
    path('admin/', admin.site.urls),           
    path('api/', include(router.urls))         
]