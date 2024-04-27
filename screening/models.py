from django.db import models
from position.models import Job


class Question(models.Model):
    position = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    question_text = models.TextField()
    
    def __str__(self):
        return self.question_text
