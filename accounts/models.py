from django.db import models

from django.contrib.auth import get_user_model
User = get_user_model()

from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.
class user_profile(models.Model):
    user = models.OneToOneField(User, primary_key=True, related_name='profile', on_delete=models.CASCADE)
    name = models.CharField(max_length = 150, blank = True, null = True)

    profile_picture = models.ImageField(upload_to='uploads/profile_pictures', default='uploads/profile_pictures/default.png')

    GENDER_CHOICES = (
        ('', 'Choose Your Gender'),
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Rather Not Say', 'Rather Not Say')
    )

    gender = models.CharField(max_length=14, choices=GENDER_CHOICES)
    birth_date = models.DateField(blank = True, null = True)
    location = models.CharField(max_length = 150, blank = True, null = True)

    score = models.IntegerField(default=0)

    def __str__(self):
        return self.user.username


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        user_profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()


class team(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    name = models.CharField(max_length=100)
    description = models.TextField()
    designation = models.CharField(max_length=300)

    instagram = models.URLField(max_length=200, blank=True, null=True)
    twitter = models.URLField(max_length=200, blank=True, null=True)
    github = models.URLField(max_length=200, blank=True, null=True)
    portfolio = models.URLField(max_length=200, blank=True, null=True)

