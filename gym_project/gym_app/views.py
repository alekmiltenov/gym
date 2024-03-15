from django.shortcuts import render
from django.views.generic import ListView, CreateView
from django.db.models import Avg
from django.db.models.functions import TruncMonth
from .models import MuscleMeasurement
from .forms import DataForm
from django.utils import timezone
import json


def home(request):
    context = {
        'monthly_averages': get_monthly_average_measurements(request)
    }
    return render(request,'gym_app/home.html', context)


class MuscleAllMeasurementListView(ListView):
    model = MuscleMeasurement
    template_name = 'gym_app/home.html'
    context_object_name = 'monthly_averages'
 


    def get_monthly_average_measurements(request):
        # Annotate each measurement with the month and year of its date_time
        measurements = MuscleMeasurement.objects.annotate(
            month=TruncMonth('date_time')
        ).values(
            'month'
        ).annotate(
            average_measurement=Avg('measurement')
        ).order_by('month')
  
        monthly_averages = list(measurements)

        # Extracts the months from the monthly_averages
        months_list = [measurement['month'].strftime('%Y-%m') for measurement in monthly_averages]

        
        response_data = {
            'monthly_averages': monthly_averages,
            'months_list': months_list,
        }

        return response_data

def personal_stats(request):
    context = {
        'muscle_stats': MuscleMeasurementListView.get_all_muscle_measurements(request)
    }
    return render(request,'gym_app/stats_muscles.html', context)

class MuscleMeasurementListView(ListView):
    muscles = ["abdominals", "obliques", "forearms", "biceps", "traps", "chest", "quads", "calves"]
    model = MuscleMeasurement
    context_object_name = "muscle_stats"
    def get_muscle_measurements(request, muscle_to_query):
        muscle_measurements = MuscleMeasurement.objects.filter(muscle=muscle_to_query).order_by('date_time')
        measurements = []
        dates = []
        for measurement in muscle_measurements:
            measurements.append(measurement.measurement)
            dates.append(measurement.date_time.strftime('%Y-%m-%d'))
        
        response_data = {
        "measurements": measurements,
        "dates": dates
        }

        return response_data
 
    def get_all_muscle_measurements(request):
        all_muscle_data = {}   
        for muscle in muscles:
            muscle_data = get_muscle_measurements(request, muscle)
            muscle_measurements = muscle_data["measurements"]
            muscle_dates = muscle_data["dates"]
            all_muscle_data[muscle]=muscle_measurements
            all_muscle_data[muscle+ "_date"]=muscle_dates
            
        return json.dumps(all_muscle_data) 


    
def save_muscle_measurements(muscle_map, request):
    for key, value in muscle_map.items():    
        user = request.user
        measurement = MuscleMeasurement(
        user=user,
        date_time=timezone.now(),
        measurement=int(value),  
        muscle=key ,
        )
        measurement.save()
        
def submit_data(request):
    if request.method == 'POST':
        form = DataForm(request.POST)
        if form.is_valid():
            data=request.POST.get('data')
            print(data)
            data_json = json.loads(data)
            print(data_json)
            save_muscle_measurements(data_json, request)
        
        context = {
        'monthly_averages': []
        }
        return render(request,'gym_app/home.html', context)
    else:
        form = DataForm()

    return render(request, 'gym_app/measurements.html', {'form': form})

def about(request):
    return render(request, 'gym_app/about.html', {'title': 'About'})
