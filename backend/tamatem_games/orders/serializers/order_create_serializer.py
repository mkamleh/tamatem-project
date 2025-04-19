from rest_framework import serializers
from products.models import Product

class OrderCreateSerializer(serializers.Serializer):
    product_id = serializers.IntegerField()

    def validate_product_id(self, value):
        if not isinstance(value, int):
            raise serializers.ValidationError("Product ID must be a number.")
        if value <= 0:
            raise serializers.ValidationError("Product ID must be a positive number.")
        if not Product.objects.filter(id=value).exists():
            raise serializers.ValidationError("Product not found.")
    
        return value