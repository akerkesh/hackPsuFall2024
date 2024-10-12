# app/models.py
from app import mongo

def insert_note(user_id, title, content):
    """Insert a new note into the database."""
    notes_collection = mongo.db.notes
    note = {
        "user_id": user_id,
        "title": title,
        "content": content
    }
    return notes_collection.insert_one(note)

def get_notes_by_user(user_id):
    """Retrieve all notes for a specific user."""
    notes_collection = mongo.db.notes
    return list(notes_collection.find({"user_id": user_id}))

def delete_note_by_id(note_id):
    """Delete a note by its ID."""
    notes_collection = mongo.db.notes
    return notes_collection.delete_one({"_id": note_id})
