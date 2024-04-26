from django.shortcuts import render
from django.contrib.auth.models import User
# Create your views here.


from django.contrib.auth import authenticate

def create_user(request):
    if request.method == 'POST':
        # Extract user data from the form
        
        email = request.POST.get('email')
        password = request.POST.get('password')


        # Create a new user
        user = User.objects.get(email, password)

        # Update fields
        user.first_name = first_name
        user.last_name = last_name

        # Save changes
        user.save()

        # Optionally, you can redirect to a success page
        return render(request, 'dashboard.html')

    # Render the form for creating a new user
    return render(request, 'index.html')


def login(request):
    #import pdb;pdb.set_trace()
    if request.method == 'POST':

        email = request.POST.get('email').strip()
        password = request.POST.get('password').strip()

        # Authenticate user
        user = authenticate(request, email='tejendra.iitp@gmail.com', password='kamal123')

        if user is not None:
            # Authentication successful, login the user
            # Optionally, you can perform additional checks or operations here
            
            # Redirect to a success page (e.g., dashboard)
            return render(request, 'dashboard.html')
        else:
            # Authentication failed, render login page with error message
            return render(request, 'index.html', {'error_message': 'Invalid email or password'})

    # If request method is not POST, render login page
    return render(request, 'index.html')



