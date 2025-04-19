from django.urls import path

from orders.views import OrderView

urlpatterns = [
    path('', OrderView.as_view(), name='place order'),
    path('<str:id>', OrderView.as_view()),     
]
