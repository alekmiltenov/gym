from django.shortcuts import render
from .forms import UserRegisterForm, UserUpdateForm, ProfileUpdateForm

# Create your views here.

def register(request):
    form = UserRegisterForm()
    return render(request, 'gym_register/register.html', {'form': form})


