# app/routes.py
from flask import Blueprint, request, jsonify
from flask import Blueprint, request, jsonify, render_template
from bson import ObjectId  # To work with MongoDB ObjectIds

main = Blueprint('main', __name__)

@main.route('/')
def home():
    return "Welcome to the Notes App!"

    return render_template('index.html')
@main.route('/notes', methods=['POST'])
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
