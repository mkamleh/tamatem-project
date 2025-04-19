#!/bin/sh

# Wait for the database to be ready
/app/tamatem_games/wait-for-it.sh db:5432

# Run migrations
python /app/tamatem_games/manage.py migrate

# Import CSV data
python /app/tamatem_games/import_csv.py

# Create the superuser if it doesn't exist
python /app/tamatem_games/manage.py createsuperuser --noinput --username root --email root@example.com || echo "Superuser already exists"

# Run the Django development server
python /app/tamatem_games/manage.py runserver 0.0.0.0:8000