from django.urls import path
from .views import ProductView

urlpatterns = [
    path('', ProductView.as_view(), name='all_products'),
    path('<str:id>/', ProductView.as_view(), name='product_detail'),  # Single product by ID

]