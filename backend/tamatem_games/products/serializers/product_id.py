
from rest_framework import serializers  
from products.models import Product
from utils.validation import validate_id
from rest_framework.exceptions import NotFound



class ProductIdSerializer(serializers.Serializer):
    id = serializers.CharField(required=True)

    def validate_id(self, value):
        _, error = validate_id(value)
        if error:
            raise serializers.ValidationError(error)
        
        try:
            product = Product.objects.get(id=value)
        except Product.DoesNotExist:
            raise NotFound("Product not found.")
        self._product = product  # Store it for later use
        return self._product
    
    def get_product(self):
        return getattr(self, '_product', None)


