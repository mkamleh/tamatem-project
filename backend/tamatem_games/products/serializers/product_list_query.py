from rest_framework import serializers  
from products.enums import LocationChoices
from utils.validation import validate_page, validate_size


class ProductListQuerySerializer(serializers.Serializer):
    query = serializers.CharField(required=False, allow_blank=True)
    page = serializers.CharField(required=False, default='1')
    size = serializers.CharField(required=False, default='10')

    def validate_page(self, value):
        page_number, page_error = validate_page(value)
        if page_error:
            raise serializers.ValidationError(page_error)
        return page_number

    def validate_size(self, value):
        size, size_error = validate_size(value)
        if size_error:
            raise serializers.ValidationError(size_error)
        return size

    def validate_query(self, value):
        valid_locations = [choice[0] for choice in LocationChoices.choices]
        if value and value.upper() not in valid_locations:
            raise serializers.ValidationError("Not a valid location")
        return value

