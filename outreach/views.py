from django.shortcuts import render

from django.shortcuts import render
from django.shortcuts import render, redirect
# from .forms import ResumeForm
from pyresparser import ResumeParser
from candidate.models import Candidate
from django.http import JsonResponse
from candidate.serializers import CandidateSerializer
 # Import resume-parser library


def outreach(request):

    if request.user.is_authenticated:
        return render(request, 'outreach.html')
    else:
    	return redirect('/auth/login')



def create_user_info(request):
        
    data =  {
        'position': request.POST.get('position'),
        'email':request.POST.get('email'),
        'phone': request.POST.get('phone'),
        'department':request.POST.get('department'),
        'name':request.POST.get('name'),
        'status':'Full Time',
        'job_type':'Full-Time',
        
    }
    if request.method == 'POST':
        serializer = CandidateSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            candidate = Candidate.objects.all()
            serializer = CandidateSerializer(candidate, many=True)
            return JsonResponse(serializer.data, safe=False)
        return JsonResponse(serializer.errors, status=400)




def get_candidates(request):
    candidates = Candidate.objects.all()
    serializer = CandidateSerializer(candidates, many=True)
    return JsonResponse(serializer.data, safe=False)