from django.shortcuts import render
from django.contrib.auth.models import User
# Create your views here.
from django.shortcuts import redirect
from django.contrib.auth import logout, login

from django.contrib.auth import authenticate

def create_user(request):
    
    return render(request, 'index.html')

from .forms import LoginForm
def log_in(request):
    # import pdb;pdb.set_trace()
    # user = User.objects.create_user("john3", "lennon@thebeatles.com", "johnpassword")

    if request.user.is_authenticated:
        return  redirect('/dashboard')

    # user.last_name = "Lennon"
    # user.save()
    #import pdb;pdb.set_trace()
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username = request.POST.get('username').strip()
            password = request.POST.get('password').strip()

        # Authenticate user
            user = authenticate( username=username, password=password)
            # import pdb;pdb.set_trace()
            if user is not None:
                # Authentication successful, login the user
                # Optionally, you can perform additional checks or operations here
                login(request, user)
                # Redirect to a success page (e.g., dashboard)
                print('success')
                # request.user = user
                return  redirect('/dashboard', user_id=user.id)
            else:
                # Authentication failed, render login page with error message
                return render(request, 'index.html', {'error_message': 'Invalid email or password'})
    form = LoginForm()
    # If request method is not POST, render login page
    return render(request, 'index.html',{'form': form})

def log_out(request):
    logout(request)
    # Redirect to a specific page
    return redirect('/auth/login') 



