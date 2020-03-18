from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    refresh_token = models.CharField(max_length=255, default="")
    avatar = models.CharField(max_length=500)

    def __str__(self) -> str:
        return self.user.username
