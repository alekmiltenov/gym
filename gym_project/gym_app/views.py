from django.shortcuts import render


def home(request):
    return render(request, 'gym_app/home.html')

def about(request):
    return render(request, 'gym_app/about.html')
    