from screening.models import Question

from rest_framework import serializers
class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['id', 'position', 'department', 'location', 'question_text']