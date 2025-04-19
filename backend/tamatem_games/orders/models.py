from django.db import models

# Create your models here.

from django.db import models
from django.contrib.auth.models import User
from products.models import Product  # Update if your product app is named differently

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='orders')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order #{self.id} by {self.user.username} for {self.product.name}"
