from django.urls import path
from . import views

#### test data
posts = [
    {
        'author':'Alek',
        'title' : 'This is the title',
        'content':'This is the dummy data context',
        'date_posted':'today',
    }
]


urlpatterns = [
    path('', views.home,name="home"),
    path('about/', views.about,name="about"),
]