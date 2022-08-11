     
from django.db import models


class User(models.Model):
  name = models.CharField(max_length=120)
  occupation = models.TextField()
  

      
  def __str__(self):
    return self.name
  
  
  
user = models.ForeignKey(User, on_delete=models.DO_NOTHING, db_constraint=False)