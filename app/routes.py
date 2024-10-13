import logging
from flask import Blueprint, render_template, request, jsonify
from app.models import insert_note, get_notes_by_user, delete_note_by_id
from app.forms import NoteForm

main = Blueprint('main', __name__)
logging.basicConfig(level=logging.INFO)

@main.route('/')
def home():
    form = NoteForm()
    return render_template('index.html', form=form)

@main.route('/save-note', methods=['POST'])
def save_note():
    try:
        data = request.json
        note_text = data.get('note')
        folder_name = data.get('folder', 'Uncategorized')
        user_id = "default_user"
        title = "Untitled"
        
        if not note_text:
            return jsonify({"error": "Missing note text"}), 400

        note_id = insert_note(user_id, title, note_text, folder_name)
        logging.info(f"Note saved successfully: {note_id}")
        return jsonify({"message": "Note saved", "note_id": note_id}), 201
    except Exception as e:
        logging.error(f"Error saving note: {str(e)}")
        return jsonify({"error": "An error occurred while saving the note"}), 500

@main.route('/get-notes', methods=['GET'])
def get_all_notes():
    try:
        user_id = "default_user"  # Replace with actual user identification logic
        notes = get_notes_by_user(user_id)
        logging.info(f"Retrieved {len(notes)} notes for user {user_id}")
        return jsonify([note['content'] for note in notes]), 200
    except Exception as e:
        logging.error(f"Error fetching notes: {str(e)}")
        return jsonify({"error": "An error occurred while fetching notes"}), 500
