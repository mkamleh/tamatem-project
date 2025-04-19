from rest_framework.views import APIView
from rest_framework.response import Response
from orders.serializers import OrderCreateSerializer,OrderRetrieveSerializer,OrderSerializer
from orders.serializers.order_serializer import OrderSerializer
from .models import Order
from products.models import Product


class OrderView(APIView):
    def get(self, request, id=None):
        serializer = OrderRetrieveSerializer(data={"id": id}, context={"request": request})
        serializer.is_valid(raise_exception=True)

        order = Order.objects.get(id=serializer.validated_data["id"], user=request.user)
        return Response(OrderSerializer(order).data)

    def post(self, request):
        serializer = OrderCreateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        product_id = serializer.validated_data["product_id"]
        product = Product.objects.get(id=product_id)
        order = Order.objects.create(user=request.user, product=product)

        return Response(OrderSerializer(order).data, status=201)
