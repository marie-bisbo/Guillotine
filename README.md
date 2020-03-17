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

