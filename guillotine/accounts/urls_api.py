from rest_framework import routers

from django.urls import include, path

from .views import UserDetailView

router = routers.DefaultRouter()

urlpatterns = [
    path("", include(router.urls)),
    path("current-user", UserDetailView.as_view()),
]
