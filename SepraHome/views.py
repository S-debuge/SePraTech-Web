from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Contact
from django.utils import timezone

def home(request):
    return render(request, 'home_sepra.html')

def contact_view(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')

        Contact.objects.create(
            name=name,
            email=email,
            subject=subject,
            message=message,
            created_at=timezone.now()
        )

        messages.success(request, "✅ Your message has been sent successfully!")
        return redirect('home')
