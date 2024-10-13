import json
import os

NOTES_FILE = 'notes.json'

def save_note(note_text, folder='Uncategorized'):
    notes = get_notes()
    if folder not in notes:
        notes[folder] = []
    notes[folder].append(note_text)
    with open(NOTES_FILE, 'w') as f:
        json.dump(notes, f)

def get_notes():
    if not os.path.exists(NOTES_FILE):
        return {}
    with open(NOTES_FILE, 'r') as f:
        return json.load(f)
