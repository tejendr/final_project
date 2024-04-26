from django.shortcuts import render
from .serializers import JobSerializer
from django.shortcuts import redirect
from django.http import JsonResponse
from .models import Job
def position(request):

    if request.user.is_authenticated:

        return render(request, 'positions.html')
    else:
    	return redirect('/auth/login')

def create_job(request):
    import pdb;pdb.set_trace()
    data =  {
        'position': request.POST.get('position'),
        'job_type':request.POST.get('job_type'),
        'min_salary': request.POST.get('min-salary'),
        'max_salary': request.POST.get('max-salary'),
        'address': request.POST.get('address'),
        'hiring_manager_email': request.POST.get('hiring-manager'),
        'recruiter_email': request.POST.get('recruiter-email'),
        'department':request.POST.get('department'),
        'status':request.POST.get('status'),
        
    }
    if request.method == 'POST':
        serializer = JobSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


def update_job(request, job_id):
    
    try:
        job = Job.objects.get(pk=job_id)
    except Job.DoesNotExist:
        return JsonResponse({'error': 'Job not found'}, status=404)

    if request.method == 'PUT':
        serializer = JobSerializer(job, data=request.PUT)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

def fetch_jobs(request):
    if request.method == 'GET':
        jobs = Job.objects.all()
        serializer = JobSerializer(jobs, many=True)
        return JsonResponse(serializer.data, safe=False)



