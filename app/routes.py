# app/routes.py
from flask import Blueprint, request, jsonify, render_template
from bson import ObjectId  # To work with MongoDB ObjectIds
from app.models import insert_note, get_notes_by_user, delete_note_by_id
from app.forms import NoteForm  # Add this import

main = Blueprint('main', __name__)

@main.route('/', methods=['GET', 'POST'])
def home():
    form = NoteForm()
    if form.validate_on_submit():
        # Process the form data
        note_text = form.note.data
        # Save the note (you'll need to implement this)
        # Redirect or render template as needed
    return render_template('index.html', form=form)

@main.route('/notes', methods=['POST'])
def create_note():
    data = request.json
    user_id = data.get('user_id')
    title = data.get('title')
    content = data.get('content')

    if not user_id or not title or not content:
        return jsonify({"error": "Missing data"}), 400

    note_id = insert_note(user_id, title, content)
    return jsonify({"note_id": str(note_id.inserted_id)}), 201

@main.route('/notes/<user_id>', methods=['GET'])
def get_notes(user_id):
    notes = get_notes_by_user(user_id)
    result = [{"_id": str(note["_id"]), "title": note["title"], "content": note["content"]} for note in notes]
    return jsonify(result), 200

@main.route('/notes/<note_id>', methods=['DELETE'])
def delete_note(note_id):
    result = delete_note_by_id(ObjectId(note_id))
    if result.deleted_count == 1:
        return jsonify({"message": "Note deleted"}), 200
    return jsonify({"error": "Note not found"}), 404

# New routes to match the JavaScript frontend

@main.route('/save-note', methods=['POST'])
def save_note():
    data = request.json
    note_text = data.get('note')
    # You might want to add user_id and title handling here
    user_id = "default_user"  # Replace with actual user identification logic
    title = "Untitled"  # You might want to derive this from the note text
    
    if not note_text:
        return jsonify({"error": "Missing note text"}), 400

    note_id = insert_note(user_id, title, note_text)
    return jsonify({"message": "Note saved", "note_id": str(note_id.inserted_id)}), 201

@main.route('/get-notes', methods=['GET'])
def get_all_notes():
    # You might want to add user identification logic here
    user_id = "default_user"  # Replace with actual user identification logic
    notes = get_notes_by_user(user_id)
    return jsonify([note['content'] for note in notes]), 200
