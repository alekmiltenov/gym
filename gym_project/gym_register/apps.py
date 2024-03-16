from django.apps import AppConfig


class GymRegisterConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'gym_register'

def ready(self):
    import gym_register.signals
