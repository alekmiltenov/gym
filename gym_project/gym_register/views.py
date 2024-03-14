from django.shortcuts import render, redirect
from .forms import UserCreationForm

def register(request):
    form = UserCreationForm()
    return render(request,'gym_register/register.html'),{'form': form}
