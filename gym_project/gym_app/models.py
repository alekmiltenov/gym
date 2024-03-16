from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class MuscleMeasurement(models.Model):
    user =  models.ForeignKey(User, on_delete =models.CASCADE)
    date_time = models.DateTimeField(default=timezone.now)
    measurement = models.IntegerField()
    muscle = models.CharField(max_length=50)

