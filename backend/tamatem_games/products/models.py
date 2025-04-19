from django.db import models

from products.enums import LocationChoices

class Product(models.Model):
    product_id = models.IntegerField(unique=True)
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    location = models.CharField(max_length=2, choices=LocationChoices.choices)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
