from django import forms

class DataForm(forms.Form):
    data = forms.CharField(widget=forms.HiddenInput())  # Hidden field to store JSON data

