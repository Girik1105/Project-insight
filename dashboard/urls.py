from django.urls import path

from . import views

urlpatterns = [
    path('', views.dashboard, name="dashboard"),

    path('department-store/video/', views.department_store_video, name="department_store_video"),
    path('wholesale/video/', views.wholesale_video, name="wholesale_video"),
    path('retail/video/', views.retail_video, name="retail_video"),
    path('vending/video/', views.vending_store_video, name="vending_store_video"),
    path('video/', views.video_video, name="video_video"),
    path('internal_trade/video/', views.internal_trade_video, name="internal_trade_video"),
    path('ep1/video/', views.ep1_video, name="ep1_video"),
    path('ep2/video/', views.ep2_video, name="ep2_video"),
    path('ep3/video/', views.ep3_video, name="ep3_video"),
    path('ep4/video/', views.ep4_video, name="ep4_video"),
    path('ep5/video/', views.ep5_video, name="ep5_video"),
    path('ep6/video/', views.ep6_video, name="ep6_video"),
    path('ep7/video/', views.ep7_video, name="ep7_video"),
    path('ep8/video/', views.ep8_video, name="ep8_video"),

    path('quiz/', views.quiz_index, name="quiz_index"),
    path('quiz/game/', views.quiz_game, name="quiz_game"),
    path('quiz/highscores/', views.quiz_highscores, name="quiz_highscores"),
    path('quiz/end/', views.quiz_end, name="quiz_end"),
    
    path('retail/game/', views.retail_game, name="retail_game"),
    
]


 