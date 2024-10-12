# config.py
import os

class Config:
    # MongoDB URI (replace with your MongoDB Atlas or local URI)
    MONGO_URI = os.getenv('MONGO_URI', 'mongodb+srv://username:password@cluster.mongodb.net/quackademic')
    SECRET_KEY = os.getenv('SECRET_KEY', 'supersecretkey')
