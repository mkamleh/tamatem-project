from rest_framework import serializers
from orders.models import Order

class OrderSerializer(serializers.ModelSerializer):
    product = serializers.StringRelatedField(read_only=True)  # Display the product name
    price = serializers.DecimalField(source='product.price', max_digits=10, decimal_places=2, read_only=True)

    class Meta:
        model = Order
        fields = ['id', 'product', 'created_at', 'price']