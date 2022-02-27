from django.db import models

from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.
class user_score(models.Model):
    user = models.OneToOneField(User, primary_key=True, related_name='score', on_delete=models.CASCADE)
    score = models.IntegerField()