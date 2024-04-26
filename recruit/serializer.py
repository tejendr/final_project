
class Job(models.Model):
    title = models.CharField(max_length=100)
    job_type = models.CharField(max_length=50)
    min_salary = models.DecimalField(max_digits=10, decimal_places=2)
    max_salary = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    address = models.CharField(max_length=255, null=True, blank=True)
    hiring_manager_email = models.EmailField()
    recruiter_email = models.EmailField(null=True, blank=True)
