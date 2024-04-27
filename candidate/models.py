from django.db import models

class Candidate(models.Model):
    name = models.CharField(max_length=100)
    job_type = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    phone = models.IntegerField()
    email = models.EmailField(max_length=100)
    position = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    score = models.IntegerField(default=-1)
    profile_picture = models.ImageField(upload_to='static/images', null=True, blank=True)

    def __str__(self):
        return self.name