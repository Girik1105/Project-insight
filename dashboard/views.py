from django.shortcuts import render

# Create your views here.
def dashboard(request):
    context = {}
    return render(request, 'dashboard/home.html', context)

    