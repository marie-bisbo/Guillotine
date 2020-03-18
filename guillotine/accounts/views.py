from rest_framework.generics import RetrieveAPIView

from django.views.generic import TemplateView

from .serializers import UserSerializer


class Login(TemplateView):
    template_name = "login.html"


class UserDetailView(RetrieveAPIView):
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
