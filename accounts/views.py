from django.shortcuts import render, redirect

from . import models, forms

from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required

# Create your views here.
@login_required
def profile_edit_view(request):
    profile = request.user.profile
    form = forms.profile_form(instance=profile)

    if request.method == 'POST':
        form = forms.profile_form(request.POST, request.FILES, instance=profile)
        if form.is_valid():
            form.save()

            return redirect('dashboard')

    context = {'form': form}
    return render(request, 'landing/profile_edit.html', context)