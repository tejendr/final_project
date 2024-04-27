from django.shortcuts import render
from .serializers import JobSerializer,DepartmentSerializer,LocationSerializer
from django.shortcuts import redirect
from django.http import JsonResponse
from django.http import QueryDict
from .models import Job
from .models import Department,Location
from rest_framework.response import Response
from rest_framework import status

def position(request):

    if request.user.is_authenticated:

        return render(request, 'positions.html')
    else:
    	return redirect('/auth/login')

def create_job(request):
    
    data =  {
        'position': request.POST.get('position'),
        'job_type':request.POST.get('job_type'),
        'min_salary': request.POST.get('min-salary'),
        'max_salary': request.POST.get('max-salary'),
        'location': request.POST.get('location'),
        'hiring_manager_email': request.POST.get('hiring-manager'),
        'recruiter_email': request.POST.get('recruiter-email'),
        'department':request.POST.get('department'),
        'status':request.POST.get('status'),
        
    }
    if request.method == 'POST':
        serializer = JobSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            jobs = Job.objects.all()
            serializer = JobSerializer(jobs, many=True)
            return JsonResponse(serializer.data, safe=False)
        return JsonResponse(serializer.errors, status=400)



def fetch_departments(request):
    departments = Department.objects.all()
    # import pdb;pdb.set_trace()
    departments = Department.objects.all()
    serializer = DepartmentSerializer(departments, many=True)
    return JsonResponse(serializer.data, safe=False)
    

def fetch_location(request):
    departments = Department.objects.all()
    # import pdb;pdb.set_trace()
    departments = Department.objects.all()
    serializer = DepartmentSerializer(departments, many=True)
    return JsonResponse(serializer.data, safe=False)
    

def fetch_department_location(request):
    departments = Department.objects.all()
    locations = Location.objects.all()

    department_serializer = DepartmentSerializer(departments, many=True)
    location_serializer = LocationSerializer(locations, many=True)

    data = {
        'departments': department_serializer.data,
        'locations': location_serializer.data
    }

    return JsonResponse(data, safe=False)
def update_job(request, job_id):
    import pdb;pdb.set_trace()
    try:
        job = Job.objects.get(pk=job_id)
    except Job.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    request_data = QueryDict(request.body)
    data_dict = dict(request_data)
    cleaned_data = {key: value[0] for key, value in data_dict.items()}
    job.position = cleaned_data['position']
    department_instance = Department.objects.get(pk=int(cleaned_data['department']))
    job.department = department_instance
    job.location = cleaned_data['location']
    job.status = cleaned_data['status']
    serializer = JobSerializer(job,cleaned_data)
    if serializer.is_valid():
        serializer.save()
        jobs = Job.objects.all()
        serializer = JobSerializer(jobs, many=True)
        return JsonResponse(serializer.data, safe=False)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def fetch_jobs(request):
    if request.method == 'GET':
        jobs = Job.objects.all()
        serializer = JobSerializer(jobs, many=True)
        return JsonResponse(serializer.data, safe=False)



