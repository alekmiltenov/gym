from django.urls import path # imports the path url function(allows us to add a path and declare where it leads to)
#from . views import PostListView, PostDetailView, PostCreateView
from . import views
urlpatterns = [  
     path('about/', views.about, name='about-page'),
     path('', views.home ,name='home-page'),
    # path('post/<int:pk>/', PostDetailView.as_view(),name='post-detail'),
    # path('post/new/', PostCreateView.as_view(),name='post-create'),
    
] 