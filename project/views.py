from django.shortcuts import render

def index(request):
    context = {}
    return render(request, 'landing/index.html', context)

def resources(request):
    context = {}
    return render(request, 'resources/resources.html', context)

def about(request):
    context = {}
    return render(request, 'about/about.html', context)

def internal(request):
    context = {}
    return render(request, 'internal/internal.html', context)

def external(request):
    context = {}
    return render(request, 'external/external.html', context)