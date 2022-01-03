from django.shortcuts import render


from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required

# Create your views here.
@login_required
def dashboard(request):
    context = {}
    return render(request, 'dashboard/home.html', context)

@login_required
def department_store_video(request):
    context = {}
    return render(request, 'dashboard/department_store.html', context)

@login_required
def wholesale_video(request):
    context = {}
    return render(request, 'dashboard/wholesale.html', context)
