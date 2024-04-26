from django.shortcuts import render
from django.shortcuts import render, redirect
from .forms import ResumeForm
from pyresparser import ResumeParser
 # Import resume-parser library

def candidate(request):
    form = ResumeForm()
    # user = User.objects.create_user("john3", "lennon@thebeatles.com", "johnpassword")

    if request.user.is_authenticated:
        return render(request, 'candidate.html',{'form': form})
    else:
    	return redirect('/auth/login')

def upload_resume(request):
    if request.method == 'POST' and 'resume' in request.FILES:
        resume_file = request.FILES['resume']
        data = ResumeParser(resume_file).get_extracted_data()
        return JsonResponse(data)
