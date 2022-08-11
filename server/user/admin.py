    
from django.contrib import admin
from .models import User 

class UserAdmin(admin.ModelAdmin): 
  list_display = ('name', 'occupation') 
        
admin.site.register(User, UserAdmin)