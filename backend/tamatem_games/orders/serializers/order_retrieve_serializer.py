from rest_framework import serializers
from ..models import Order
from rest_framework.exceptions import NotFound


class OrderRetrieveSerializer(serializers.Serializer):
    id = serializers.IntegerField()

    def validate_id(self, value):
        request = self.context.get("request")
        if not isinstance(value, int):
            raise serializers.ValidationError("Order ID must be a number.")
        if value <= 0:
            raise serializers.ValidationError("Order ID must be a positive number.")
        if not Order.objects.filter(id=value, user=request.user).exists():
            raise NotFound("Order not found.")
       
        return value