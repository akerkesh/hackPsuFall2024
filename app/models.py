# app/models.py
import json
import os
import logging

NOTES_FILE = 'notes.json'
logging.basicConfig(level=logging.INFO)

def load_notes():
    try:
    if os.path.exists(NOTES_FILE):
        with open(NOTES_FILE, 'r') as f:
            return json.load(f)
    return []
    except Exception as e:
        logging.error(f"Error loading notes: {str(e)}")
        return []

def save_notes(notes):
    try:
    with open(NOTES_FILE, 'w') as f:
        json.dump(notes, f)
        logging.info(f"Notes saved successfully")
    except Exception as e:
        logging.error(f"Error saving notes: {str(e)}")
def insert_note(user_id, title, content, folder):
    try:
    notes = load_notes()
    note = {
        "user_id": user_id,
        "title": title,
            "content": content,
            "folder": folder
    }
    notes.append(note)
    save_notes(notes)
    return len(notes) - 1  # Return the index of the new note
def get_notes_by_user(user_id):
    """Retrieve all notes for a specific user."""
    notes = load_notes()
    return [note for note in notes if note['user_id'] == user_id]
def delete_note_by_id(note_id):
    """Delete a note by its ID."""
    notes = load_notes()
    if 0 <= note_id < len(notes):
        del notes[note_id]
        save_notes(notes)
        return True
    return False
