from django.shortcuts import render

def home(request):
    return render(request, 'gym_app/index.html')

def about(request):
    return render(request, 'gym_app/about.html')


