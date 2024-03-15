from django.urls import path
from . views import MuscleMeasurementListView, MuscleMeasurementDetailView, MuscleMeasurementCreateView
from . import views
urlpatterns = [  
    path('about/', views.about, name='about-page'),
    path('', MuscleMeasurementListView.as_view(),name='home-page'),
    path('post/<int:pk>/', MuscleMeasurementDetailView.as_view(),name='post-detail'),
    path('post/new/', MuscleMeasurementCreateView.as_view(),name='post-create'),
    
] 