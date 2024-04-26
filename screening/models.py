from django.db import models


class Department(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Job(models.Model):
    position = models.CharField(max_length=100)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    location = models.CharField(max_length=100)

    def __str__(self):
        return self.title

class Question(models.Model):
    question_text = models.TextField()
    job = models.ForeignKey(Job, on_delete=models.CASCADE)

    def __str__(self):
        return self.question_text