
from products.models import Product
from rest_framework import serializers  



class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id','product_id','price', 'location','title','description']  