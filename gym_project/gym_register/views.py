from django.shortcuts import render

# Create your views here.

def register(request):
    form = UserRegisterForm()
    return render(request, 'gym_register/register.html', {'form': form})


