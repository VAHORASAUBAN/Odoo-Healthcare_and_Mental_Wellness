from django.http import JsonResponse
from django.shortcuts import render
from .models import doctor
from django.views.decorators.csrf import csrf_exempt
import json

def index(request):
	return render(request,'index.html')

@csrf_exempt  # This decorator disables CSRF protection for this view (use with caution)
def signup(request):
    if request.method == 'POST':
        # Parse the JSON data sent by the AJAX request
        data = json.loads(request.body)

        # Extract data from the request
        first_name = data.get('firstName')
        last_name = data.get('lastName')
        phone = data.get('phnno')
        email = data.get('email')
        password = data.get('password')

        # Create a new doctor entry in the database
        doctor_instance = doctor.objects.create(
            FirstName=first_name,
            LastName=last_name,
            Email=email,
            Phone=phone,
            Password=password
        )

        # Respond with a success message
        return JsonResponse({'message': 'Signup successful!'}, status=200)

    return JsonResponse({'error': 'Invalid request method'}, status=400)



@csrf_exempt  # Use with caution: It's fine for now, but you should handle CSRF properly in production
def login(request):
    if request.method == 'POST':
        try:
            # Parse the incoming JSON data
            data = json.loads(request.body)
            email = data.get('email')  # Match the field name exactly with the model
            password = data.get('password')

            # Check if user exists in the database
            try:
                user = doctor.objects.get(Email=email)  # Match the field name with model (Email, not email)

                # Check password
                if user.Password == password:
                    return JsonResponse({'message': 'Login successful!'}, status=200)
                else:
                    return JsonResponse({'error': 'Invalid credentials!'}, status=400)

            except doctor.DoesNotExist:
                return JsonResponse({'error': 'User not found!'}, status=400)

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON format!'}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=400)

