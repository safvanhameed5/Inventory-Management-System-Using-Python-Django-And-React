
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Products
from .serializers import ProductSerializer


@api_view(['GET','POST','PUT','PATCH','DELETE'])
def inventory(request):
    if request.method == 'GET':
         # Fetch all products
        products = Products.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        data = request.data
        product_id = request.data.get('id', None)  # Get id from request body
        print(product_id)
        if product_id:
            # Fetch a single product by id
            products = get_object_or_404(Products, id=product_id)
            serializer = ProductSerializer(products)
            return Response(serializer.data)
        else:
            serializer = ProductSerializer(data=data)
            if serializer.is_valid():
                serializer.save()

                return Response(serializer.data)
            return Response(serializer.errors)
    elif request.method == 'PUT':
        data = request.data
        obj = Products.objects.get(id = data['id'])
        serializer = ProductSerializer(obj, data=data, partial=False)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method == 'PATCH':
        data = request.data
        obj = Products.objects.get(id = data['id'])
        serializer = ProductSerializer(obj, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    else:
        data = request.data
        obj = Products.objects.get(id = data['id'])
        obj.delete()
        return Response({"Message" : "Product Deleted"})