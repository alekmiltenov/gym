from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Profile

class UserRegisterForm(UserCreationForm):
    email = forms.Emailfield()
    class Meta:
        model = user
        fields = ['username', 'email','password1','password2']
