from django.urls import path
from . views import MuscleAllMeasurementListView, MuscleMeasurementListView
from . import views
urlpatterns = [  
    path('about/', views.about, name='about-page'),
    path('', MuscleAllMeasurementListView.as_view(),name='home-page'),
    path('stats/', MuscleMeasurementListView.as_view(),name='stats-detail'),
    path('stats/new/', views.submit_data,name='stats-create'),

    
] 