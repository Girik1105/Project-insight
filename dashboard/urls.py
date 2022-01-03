from django.urls import path

from . import views

urlpatterns = [
    path('', views.dashboard, name="dashboard"),

    path('department-store/video/', views.department_store_video, name="department_store_video"),
    path('wholesale/video/', views.wholesale_video, name="wholesale_video"),
]


 