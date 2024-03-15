from django.urls import path
from . views import MuscleMeasurementListView, MuscleMeasurementDetailView
from . import views
urlpatterns = [  
    path('about/', views.about, name='about-page'),
    path('', MuscleMeasurementListView.as_view(),name='home-page'),
    path('stats/', MuscleMeasurementDetailView.as_view(),name='stats-detail'),
    path('stats/new/', views.submit_data,name='stats-create'),

    
] 