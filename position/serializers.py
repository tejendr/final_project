from rest_framework import serializers
from .models import Job

class JobSerializer(serializers.ModelSerializer):
    create_job_id = serializers.IntegerField(required=False)

    class Meta:
        model = Job
        fields = ['create_job_id','status', 'position','department','job_type', 'min_salary', 'max_salary', 'address', 'hiring_manager_email', 'recruiter_email']