import os
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

# Codespace URL configuration for -8000.app.github.dev
if os.environ.get('CODESPACE_NAME'):
    base_url = f"https://{os.environ.get('CODESPACE_NAME')}-8000.app.github.dev"
else:
    base_url = 'http://localhost:8000'

router = DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'teams', views.TeamViewSet)
router.register(r'activity', views.ActivityViewSet)
router.register(r'leaderboard', views.LeaderboardViewSet)
router.register(r'workouts', views.WorkoutViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
