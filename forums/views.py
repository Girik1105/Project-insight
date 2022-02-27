from django.shortcuts import render
from django.contrib.auth.decorators import login_required

# Create your views here.
@login_required
def forum_list(request):
    context = {}

    return render(request, 'forums/forum_list.html', context)