# serializers.py
from rest_framework import serializers
from candidate.models import Candidate

class CandidateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields = ['id', 'name','phone','email','job_type', 'department', 'status', 'score', 'profile_picture']