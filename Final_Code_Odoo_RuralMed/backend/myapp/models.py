from django.db import models

# Create your models here.

class patient(models.Model):
    DoctorId = models.IntegerField(primary_key=True, unique=True)
    FirstName = models.CharField(max_length=20)
    LastName = models.CharField(max_length=20)
    Email = models.CharField(max_length=20)
    Phone = models.CharField(max_length=20)
    Password = models.CharField(max_length=20)

    def __str__(self):
        return self.FirstName