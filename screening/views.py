from django.shortcuts import render


def screening(request):

    if request.user.is_authenticated:
        return render(request, 'screening.html')
    else:
    	return redirect('/auth/login')



