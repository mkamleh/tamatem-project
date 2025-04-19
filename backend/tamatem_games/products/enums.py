from django.db import models

class LocationChoices(models.TextChoices):
    JORDAN = 'JO', 'Jordan'
    SAUDI_ARABIA = 'SA', 'Saudi Arabia'