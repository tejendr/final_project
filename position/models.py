from django.db import models



class Location(models.Model):
    
    name = models.CharField(max_length=100, primary_key=True)

    def __str__(self):
        return self.name


class Department(models.Model):
    # id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Job(models.Model):
    POSITION_CHOICES = [
        ('Full-Time', 'Full-Time'),
        ('Part-Time', 'Part-Time'),
        ('Contract', 'Contract'),
    ]

    STATUS_CHOICES = [
        ('Open', 'Open'),
        ('In Progress', 'In Progress'),
        ('Closed', 'Closed'),
        ('On Hold', 'On Hold'),
    ]
    id = models.AutoField(primary_key=True)
    location = models.CharField(max_length=100)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    position = models.CharField(max_length=100)
    status = models.CharField(max_length=100, choices=STATUS_CHOICES)
    job_type = models.CharField(max_length=50, choices=POSITION_CHOICES)
    min_salary = models.DecimalField(max_digits=10, decimal_places=2)
    max_salary = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    address = models.CharField(max_length=255, null=True, blank=True)
    hiring_manager_email = models.EmailField()
    recruiter_email = models.EmailField(null=True, blank=True)

    def __str__(self):
        return f"{self.position} - {self.department}"
