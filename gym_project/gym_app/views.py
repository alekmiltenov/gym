from django.shortcuts import render
from django.views.generic import ListView, DetailView, CreateView
from django.db.models import Avg
from django.db.models.functions import TruncMonth
from .models import MuscleMeasurement

# Create your views here.

def home(request):
    context = {
        'monthly_averages': get_monthly_average_measurements(request)
    }
    return render(request,'gym_app/home.html', context)


class MuscleMeasurementListView(ListView):
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
        'muscle_stats': get_all_muscle_measurements(request)
    }
    return render(request,'gym_app/stats.html', context)

class MuscleMeasurementDetailView(DetailView):
    muscles = ["abdominals", "obliques", "forearms", "biceps", "traps", "chest", "quads", "calves"]
    model = MuscleMeasurement
    context_object_name = "muscle_stats"
    def get_muscle_measurements(request, muscle_to_query):
    # Filter for biceps measurements
        muscle_measurements = MuscleMeasurement.objects.filter(muscle=muscle_to_query).order_by('date_time')

        # Initialize arrays to hold measurements and dates
        measurements = []
        dates = []

        # Populate the arrays
        for measurement in biceps_measurements:
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
            
        return all_muscle_data 

class MuscleMeasurementCreateView(CreateView):
    model = MuscleMeasurement
    def save_muscle_measurements(muscle_map):
        for key, value in muscle_map:
            user = self.request.user
            measurement = MuscleMeasurement(
            user=user,
            date_time=timezone.now(),
            measurement=value,  
            muscle=key ,
        )
            measurement.save()
            
    def submit_data(request):
        if request.method == 'POST':
            form = DataForm(request.POST)
            if form.is_valid():
                    data_json = form.cleaned_data['muscle_data']
                    data_dict = json.loads(data_json)  # Convert JSON string back to Python dict
                    measurements.save(data_dict)
                    # Process your data_dict here
            
            return redirect('gym_app/success.html') 
        else:
            form = DataForm()

        return render(request, 'gym_app/add_stats.html', {'form': form})

def about(request):
    return render(request, 'gym_app/about.html', {'title': 'About'})
