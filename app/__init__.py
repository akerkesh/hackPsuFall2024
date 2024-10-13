# app/__init__.py
from flask import Flask
from flask_pymongo import PyMongo
from flask_wtf.csrf import CSRFProtect
from config import Config
<<<<<<< HEAD
from dotenv import load_dotenv

load_dotenv()

mongo = None

=======

mongo = None
>>>>>>> b8fd680d50c377cc2947af9199933fff53051b7f
def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    csrf = CSRFProtect(app)  # Initialize CSRF protection

    global mongo
    mongo = PyMongo(app)  # Initialize MongoDB connection

    from app.routes import main
<<<<<<< HEAD
    app.register_blueprint(main)
=======
    app.register_blueprint(main)  # Import routes
>>>>>>> b8fd680d50c377cc2947af9199933fff53051b7f

    return app
