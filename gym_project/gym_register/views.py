from django.shortcuts import render
from.django.contrib.auth.forms import UserCreationForm

def register(request):
    form = UserRegisterForm()
    return render(request, 'gym_register/register.html', {'form': form})


