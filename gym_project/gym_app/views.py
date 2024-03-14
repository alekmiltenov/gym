from django.shortcuts import render
from django import HttpResponse

def home(request):
    return HttpResponse('<h1>marto</h1>')
