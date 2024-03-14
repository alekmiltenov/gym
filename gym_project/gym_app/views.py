from django.shortcuts import render

messages = [
    {
        'author': 'alek',
        'content': 'First post content',
        'date_posted': 'August 27, 2018'
    },
    {
        'author': 'BEN',
        'content': 'Second post content',
        'date_posted': 'August 28, 2018'
    }
]

def home(request):
    context = {
        'messages' : messages
    }
    return render(request,'gym_app/home.html',context)

def about(request):
   return render(request,'gym_app/about.html')