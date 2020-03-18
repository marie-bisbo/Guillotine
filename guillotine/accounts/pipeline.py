from .models import UserProfile


def get_avatar(backend, response, user=None, *args, **kwargs) -> None:
    url = None
    if backend.name == "google-oauth2":
        url = response.get("picture")
    if url:
        UserProfile.objects.get_or_create(user=user, defaults={"avatar": url})
