# app/__init__.py
from flask import Flask
from flask_pymongo import PyMongo
from config import Config

mongo = None

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    global mongo
    mongo = PyMongo(app)  # Initialize MongoDB connection

    from app.routes import main
    app.register_blueprint(main)  # Import routes

    return app
