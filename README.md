# Guillotine

## Setup

### Install the dependencies

The dependencies for this project are:

• `django`: A python based web framework
• `django-webpack-loader`: Generates static bundles (see [documentation](https://github.com/owais/django-webpack-loader))
for more details
• `pytz`: Does accurate timezone calculations

To install them, run:

`pipenv install django django-webpack-loader pytz`

### Setting up a new django project

To start a new django project, run the following command from the root of the project:

`django-admin startproject [project name]`

This is the main source for your django project, so it would commonly have the same name as your project,
but with all lowercase. 

### Create a superuser

Creating a superuser allows you to access the django `admin page`, which gives you a user interface to interact 
with the database. To do this, first cd into your newly created project and run the following:

`pipenv run python manage.py migrate`

This migrates the changes to the database that were there already from django's side. 

You can now create a superuser by running:

`pipenv run python manage.py createsuperuser`

You will then be prompted for a username and password.

### Runnning the site

You can now get the site running with:

`pipenv run python manage.py runserver`

Navigate to `http://127.0.0.1:8000/` and you should see django's default startpage. You can also go to
the admin page at `http://127.0.0.1:8000/admin/` and log in with your superuser account.

### Configuring the settings

When running a django project, the first thing django does it goes through the `settings.py`
file and applies any configurations in there. So that's where we need to store information about
the structure of our project. Because we are planning to combine django with vue, with vue
providing the frontend of our project, django needs to know what it needs to serve at any
given time. 

We start by setting the directories for our templates and the frontend by adding this to our `settings.py`:

```
TEMPLATES_DIR = os.path.join(BASE_DIR, "templates")
FRONTEND_DIR = os.path.join(BASE_DIR, "frontend")
```

We will be using `django-webpack-loader` to handle static bundles, so we need to make sure django
knows about it by adding `webpack_loader` to `INSTALLED_APPS`.

Next we want to tell django where to look for templates. When we setup vue, the template we need will
be in `frontend/public`. So we add this path to the TEMPLATES section of `settings.py` under `DIRS`:

`"DIRS: [os.path.join(BASE_DIR, "frontend", "public")]`

We also need to give django a location for static files. Add the following to `settings.py`:

```
STATIC_URL = "/static/"
STATIC_ROOT = os.path.join(BASE_DIR, "static_root/")
STATICFILES_DIRS = [
    os.path.join("frontend", FRONTEND_DIR, "dist"),
    os.path.join("frontend", FRONTEND_DIR, "public"),
]
```

Finally we need to add a configuration for `django-webpack-loader`, so add the following to `settings.py`:

```
WEBPACK_LOADER = {
    "DEFAULT": {
        "CACHE": DEBUG,
        "BUNDLE_DIR_NAME": "/bundles/",  # must end with slash
        "STATS_FILE": os.path.join(FRONTEND_DIR, "webpack-stats.json"),
    }
}
```

### Installing Vue

For this project, we will be installing the Vue CLI using npm. Run the command:

`sudo npm install -g @vue/cli`

With the Vue CLI it is really easy to create a new Vue App, just run:

`vue create frontend`

from inside your django project (what you created when you ran `startproject). To start,
you can stick with the default configurations by pressing `enter` until it starts to install.

### Mapping the urls

In django, you need to provide pages (known as views) for the site to display at certain urls. This is specified in `views.py`
and `urls.py`. `urls.py` should already be there, so make a new file and call it `views.py`. In it, add the following:

```
from django.views.generic import TemplateView


class IndexView(TemplateView):
    template_name = "index.html"
```

This will render an html file as a template at a url that we will specify. In this case, `index.html` has already been created
in our `frontend` directory by Vue, and we have specified in `settings.py` that django should look for templates
in `frontend/public`, which is exactly where Vue has put the `index.html` file.
