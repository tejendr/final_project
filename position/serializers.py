from rest_framework import serializers
from .models import Job,Department,Location

class JobSerializer(serializers.ModelSerializer):
    department_name = serializers.SerializerMethodField()
    job_type = serializers.ChoiceField(choices=[('Full-Time', 'Full-Time'), ('Part-Time', 'Part-Time'), ('Contract', 'Contract')], required=False)
    min_salary = serializers.DecimalField(decimal_places=2, max_digits=10, required=False)
    hiring_manager_email = serializers.EmailField(max_length=254, required=False)

    class Meta:
        model = Job
        fields = ['id', 'status', 'position', 'department', 'department_name', 'job_type', 'min_salary', 'max_salary', 'address', 'hiring_manager_email', 'recruiter_email','location']

    def get_department_name(self, obj):
        return obj.department.name if obj.department else None

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ['id', 'name']

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ['id', 'name']