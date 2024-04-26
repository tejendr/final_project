from django.db import models

from django.db import models

class ParsedResume(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()