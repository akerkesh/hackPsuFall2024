# config.py
import os

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'your_secret_key_here')
    WTF_CSRF_ENABLED = True
    WTF_CSRF_SECRET_KEY = 'your_random_secret_key'  # Replace with a strong secret key
