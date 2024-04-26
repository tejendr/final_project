from django.shortcuts import render


def outreach(request):

    if request.user.is_authenticated:
        return render(request, 'outreach.html')
    else:
    	return redirect('/auth/login')



