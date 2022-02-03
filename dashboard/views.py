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
    return render(request, 'internal/department_store.html', context)

@login_required
def wholesale_video(request):
    context = {}
    return render(request, 'internal/wholesale.html', context)

@login_required
def retail_video(request):
    context = {}
    return render(request, 'internal/retail.html', context)

@login_required
def vending_store_video(request):
    context = {}
    return render(request, 'internal/vending_store.html', context)

@login_required
def internal_trade_video(request):
    context = {}
    return render(request, 'internal/internal_trade.html', context)

@login_required
def ep1_video(request):
    context = {}
    return render(request, 'external/ep1.html', context)

@login_required
def ep2_video(request):
    context = {}
    return render(request, 'external/ep2.html', context)

@login_required
def ep3_video(request):
    context = {}
    return render(request, 'external/ep3.html', context)

@login_required
def ep4_video(request):
    context = {}
    return render(request, 'external/ep4.html', context)

@login_required
def ep5_video(request):
    context = {}
    return render(request, 'external/ep5.html', context)

@login_required
def ep6_video(request):
    context = {}
    return render(request, 'external/ep6.html', context)

@login_required
def ep7_video(request):
    context = {}
    return render(request, 'external/ep7.html', context)

@login_required
def ep8_video(request):
    context = {}
    return render(request, 'external/ep8.html', context)

@login_required
def quiz_index(request):
    context = {}
    return render(request, 'quiz_game/index.html', context)

@login_required
def quiz_game(request):
    context = {}
    return render(request, 'quiz_game/index.html', context)

@login_required
def quiz_highscores(request):
    context = {}
    return render(request, 'quiz_game/highscores.html', context)

@login_required
def quiz_end(request):
    context = {}
    return render(request, 'quiz_game/end.html', context)

@login_required
def retail_game(request):
    context = {}
    return render(request, 'retail_game/WebGL/index.html', context)

@login_required
def video_video(request):
    context = {}
    return render(request, 'dashboard/anothervid.html', context)