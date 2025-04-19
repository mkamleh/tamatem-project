# Use an official Python runtime as a parent image
FROM python:3.10

# Set the working directory in the container
WORKDIR /app

# Install dependencies
COPY ./tamatem_games/requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy the Django app into the container
COPY . /app/

# Set environment variables
ENV PYTHONUNBUFFERED 1

# Expose port 8000 (default port for Django)
EXPOSE 8000

# Run the Django development server
CMD ["python", "tamatem_games/manage.py", "runserver", "0.0.0.0:8000"]