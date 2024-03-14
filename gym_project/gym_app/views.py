from django.shortcuts import render
### test data
messages = [
    {
        'author': 'alek',
        'content': 'First post content',
        'date_posted': 'last week'
    },
    {
        'author': 'Ben dover',
        'content': 'Second post content',
        'date_posted': 'today'
    }
]

def home(request):
    context = {
        'messages' : messages
    }
    return render(request,'gym_app/home.html',context)#####

def about(request):
   return render(request,'gym_app/about.html')#####