from django import forms
from .models import MuscleMeasurement


class MuscleMeasurementForm(forms.ModelForm):
    class Meta:
        model = MuscleMeasurement
        exclude = ['biceps', 'measurement', 'date_time']

class DataForm(forms.Form):
    data = forms.CharField(widget=forms.HiddenInput())  # Hidden field to store JSON data

