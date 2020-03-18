FROM node:8-slim AS vue-dev
EXPOSE 8080
WORKDIR /frontend
COPY ./guillotine/frontend/package*.json /frontend/
RUN npm ci

FROM python:3.8-slim as django-dev
RUN apt-get update && apt-get install -y gcc
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
WORKDIR /guillotine
RUN pip install pipenv
COPY Pipfile* ./
RUN pipenv install --dev --system --ignore-pipfile --deploy
WORKDIR /guillotine
COPY ./guillotine .