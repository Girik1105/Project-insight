from django.db import models

from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.
class question(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    question = models.CharField(max_length=500)
    timestamp = models.DateTimeField(auto_now_add=True)

class answers(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    question = models.ForeignKey(question, on_delete=models.CASCADE)
    likes = models.ManyToManyField(User, blank = True, related_name='likes')

    timestamp = models.DateTimeField(auto_now_add=True)



