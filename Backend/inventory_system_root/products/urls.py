from django.urls import path
from . import views

urlpatterns = [
    path('api/products/', views.inventory),  # For all products
    path('api/products/<int:id>/', views.inventory)  # For single product by id
]
