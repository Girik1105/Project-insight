from django.shortcuts import render
from django.contrib.auth.decorators import login_required

from accounts.models import team, user_profile
from dashboard.models import user_score

def index(request):

    team_members = team.objects.all()

    context = {"team_members":team_members}
    return render(request, 'landing/index.html', context)

def resources(request):
    context = {}
    return render(request, 'resources/resources.html', context)

def about(request):
    context = {}
    return render(request, 'landing/explore.html', context)

@login_required
def learning(request):

    obj = user_profile.objects.get(user=request.user)
    obj.score += 1
    obj.save()

    context = {}
    return render(request, 'learning/learning.html', context)

@login_required
def internal(request):

    obj = user_profile.objects.get(user=request.user)
    obj.score += 1
    obj.save()

    obj = user_profile.objects.get(user=request.user)
    obj.score += 1

    context = {}
    return render(request, 'internal/internal.html', context)

@login_required
def external(request):

    obj = user_profile.objects.get(user=request.user)
    obj.score += 1
    obj.save()

    context = {}
    return render(request, 'external/external.html', context)