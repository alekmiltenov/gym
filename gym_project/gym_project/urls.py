from django.urls import path, include
from django.contrib import admin
from django.contrib.auth import views as auth_views
from gym_register import views as user_view
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('gym_app.urls')),
    path('register/', user_view.register, name="register"),
    path('login/', auth_views.LoginView.as_view(template_name='gym_register/login.html'), name="login"),
    path('logout/', user_view.logout_view, name='logout'),
    path('about/', include('gym_app.urls')),
    path('profile/',user_view.profile , name='profile')
]



if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

    