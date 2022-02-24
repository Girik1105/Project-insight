from django.urls import path

from . import views

urlpatterns = [
    path('', views.dashboard, name="dashboard"),

    path('department-store/video/', views.department_store_video, name="department_store_video"),
    path('wholesale/video/', views.wholesale_video, name="wholesale_video"),
    path('retail/video/', views.retail_video, name="retail_video"),
    path('chainstore/video/', views.vending_store_video, name="vending_store_video"),
    path('video/', views.video_video, name="video_video"),
    path('retail/game/', views.retail_game, name="retail_game"),
    path('internal_trade/video/', views.internal_trade_video, name="internal_trade_video"),
    path('department-store/visit/', views.department_store_visit, name="department_store_visit"),
    
    
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
    
    path('quiz1/', views.quiz_for_index, name="quiz_for_index"),
    path('quiz1/game/', views.quiz_for_game, name="quiz_for_game"),
    path('quiz1/end/', views.quiz_for_end, name="quiz_for_end"),
    

    path('quiz2/', views.quiz_of_index, name="quiz_of_index"),
    path('quiz2/game/', views.quiz_of_game, name="quiz_of_game"),
    path('quiz2/end/', views.quiz_of_end, name="quiz_of_end"),

    path('quiz3/', views.quiz_in_index, name="quiz_in_index"),
    path('quiz3/game/', views.quiz_in_game, name="quiz_in_game"),
    path('quiz3/end/', views.quiz_in_end, name="quiz_in_end"),

    path('quiz4/', views.quiz_and_index, name="quiz_and_index"),
    path('quiz4/game/', views.quiz_and_game, name="quiz_and_game"),
    path('quiz4/end/', views.quiz_and_end, name="quiz_and_end"),
    
]


 