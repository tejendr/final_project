from rest_framework.response import Response
from django.shortcuts import render
from position.models import Job
from position.serializers import JobSerializer
from django.http import JsonResponse
from .serializer import QuestionSerializer
from screening.models import Question
def screening(request):

    if request.user.is_authenticated:
        return render(request, 'screening.html')
    else:
    	return redirect('/auth/login')


def fetch_all(request):
    if request.method == 'GET':
        questions = Question.objects.all()
        serializer = QuestionSerializer(questions, many=True)
        return JsonResponse(serializer.data, safe=False)


def create(request):
    data =  {
        'position': request.POST.get('position'),
        'location':request.POST.get('location'),
        'department': request.POST.get('department'),
        'question_text': request.POST.get('question')
    }
    if request.method == 'POST':
        serializer = QuestionSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            questions = Question.objects.all()
            serializer = QuestionSerializer(questions, many=True)
            return JsonResponse(serializer.data, safe=False)
        return JsonResponse(serializer.errors, status=400)
    
def delete_question(request, question_id):
    try:
        # Retrieve the object from the database
        question_to_delete = Question.objects.get(pk=question_id)
        
        # Delete the object
        question_to_delete.delete()
        
        return JsonResponse({'message': 'Question deleted successfully'}, status=200)
    
    except ObjectDoesNotExist:
        return JsonResponse({'error': 'Question does not exist'}, status=404)


