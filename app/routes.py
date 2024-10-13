from flask import Blueprint, render_template, request, jsonify
from app.storage import save_note, get_notes
from app.ai_helper import generate_summary, create_quiz, generate_note_suggestions

main = Blueprint('main', __name__)

@main.route('/')
def home():
    return render_template('index.html')

@main.route('/save-note', methods=['POST'])
def save_note_route():
    data = request.json
    note_text = data.get('note')
    folder = data.get('folder', 'Uncategorized')
    save_note(note_text, folder)
    return jsonify({"message": "Note saved"}), 201

@main.route('/get-notes')
def get_notes_route():
    notes = get_notes()
    return jsonify(notes)

@main.route('/generate-summary', methods=['POST'])
def generate_summary_route():
    data = request.json
    note_text = data.get('note')
    summary = generate_summary(note_text)
    return jsonify({"summary": summary})

@main.route('/create-quiz', methods=['POST'])
def create_quiz_route():
    data = request.json
    note_text = data.get('note')
    quiz = create_quiz(note_text)
    return jsonify({"quiz": quiz})

@main.route('/get-suggestions')
def get_suggestions_route():
    notes = get_notes()
    suggestions = generate_note_suggestions(notes)
    return jsonify({"suggestions": suggestions})