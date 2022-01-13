from django.urls import path

from . import views

urlpatterns = [
    path('', views.dashboard, name="dashboard"),

    path('department-store/video/', views.department_store_video, name="department_store_video"),
    path('wholesale/video/', views.wholesale_video, name="wholesale_video"),
    path('retail/video/', views.retail_video, name="retail_video"),
    path('vending/video/', views.vending_store_video, name="vending_store_video"),
    path('video/', views.video_video, name="video_video"),

    path('quiz/', views.quiz_index, name="quiz_index"),
    path('quiz/game/', views.quiz_game, name="quiz_game"),
    path('quiz/highscores/', views.quiz_highscores, name="quiz_highscores"),
    path('quiz/end/', views.quiz_end, name="quiz_end"),
    
    path('retail/game/', views.retail_game, name="retail_game"),
    
]


 