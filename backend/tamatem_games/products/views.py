# products/views.py

from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from rest_framework.pagination import PageNumberPagination
from django.db.models import Q

from .models import Product

from products.serializers import ProductSerializer, ProductIdSerializer, ProductListQuerySerializer



class ProductView(GenericAPIView):
    queryset = Product.objects.all().order_by('id')
    serializer_class = ProductSerializer
    pagination_class = PageNumberPagination

    def get(self, request, id=None):
        if id:
            return self.get_product_by_id(id)
        return self.get_all_products(request)

    def get_product_by_id(self, id):
        serializer = ProductIdSerializer(data={"id": id})
        serializer.is_valid(raise_exception=True)
        product = serializer.get_product()

        return Response(self.get_serializer(product).data)

    def get_all_products(self, request):
        query_serializer = ProductListQuerySerializer(data=request.query_params)
        query_serializer.is_valid(raise_exception=True)
        validated_data = query_serializer.validated_data

        queryset = self.get_queryset()

        if "query" in validated_data and len(validated_data["query"]):
            location = validated_data["query"].upper()
            queryset = queryset.filter(Q(location__iexact=location))

        paginator = self.pagination_class()
        paginator.page_size = validated_data["size"]
        paginated_queryset = paginator.paginate_queryset(queryset, request)

        serializer = self.get_serializer(paginated_queryset, many=True)
        return paginator.get_paginated_response(serializer.data)
