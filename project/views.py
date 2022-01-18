from django.shortcuts import render
from django.contrib.auth.decorators import login_required


def index(request):
    context = {}
    return render(request, 'landing/index.html', context)

def resources(request):
    context = {}
    return render(request, 'resources/resources.html', context)

def about(request):
    context = {}
    return render(request, 'about/about.html', context)

@login_required
def internal(request):
    context = {}
    return render(request, 'internal/internal.html', context)

@login_required
def external(request):
    context = {}
    return render(request, 'external/external.html', context)