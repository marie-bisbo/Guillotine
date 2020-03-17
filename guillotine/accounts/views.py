from django.http import HttpRequest, HttpResponse


def login_view(request: HttpRequest) -> HttpResponse:
    return HttpResponse("Please log in.")
