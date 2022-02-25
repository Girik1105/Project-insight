from django.contrib import admin

from . import models 

# Register your models here.
admin.site.register(models.user_profile)
admin.site.register(models.team)