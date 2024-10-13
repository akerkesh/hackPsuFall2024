# config.py
import os
import urllib.parse

class Config:
    # Your MongoDB password
    PASSWORD = 'ZPAifCU4tv675GgC'
    # URL encode the password
    ENCODED_PASSWORD = urllib.parse.quote(PASSWORD)
    
    # MongoDB URI (replace with your MongoDB Atlas or local URI)
    MONGO_URI = os.getenv('MONGO_URI', f'mongodb+srv://nwachira07:{ENCODED_PASSWORD}@hackpsu2024.kw4zu.mongodb.net/')
    
    SECRET_KEY = os.getenv('SECRET_KEY', 'P\xc2\xf0\xecW\xb0\xa4\x19\xbccZ7\xafT\xb0\xe7m\xd1ZmR\x19\xff\\')

    # Added WTF-CSRF configuration
    WTF_CSRF_ENABLED = True
    WTF_CSRF_SECRET_KEY = 'your_random_secret_key'  # Replace with a strong secret key