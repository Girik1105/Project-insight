from django.shortcuts import render

def index(request):
    context = {}
    return render(request, 'landing/index.html', context)

def dashboard(request):
    context = {}
    return render(request, 'dashboard/home.html', context)