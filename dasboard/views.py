from django.shortcuts import render
from django.shortcuts import redirect

def dasboard(request):
    
    if request.user.is_authenticated:
        return render(request, 'dashboard.html')
    else:
    	return redirect('/auth/login')



