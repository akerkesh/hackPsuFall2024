# config.py
import os

class Config:
    # MongoDB URI (replace with your MongoDB Atlas or local URI)
    MONGO_URI = os.getenv('MONGO_URI', 'mongodb+srv://nwachira07:<ZPAifCU4tv675GgC>@hackpsu2024.kw4zu.mongodb.net/')
    SECRET_KEY = os.getenv('SECRET_KEY', 'P\xc2\xf0\xecW\xb0\xa4\x19\xbccZ7\xafT\xb0\xe7m\xd1ZmR\x19\xff\\')
