from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField

class NoteForm(FlaskForm):
    note = StringField('Note')
    submit = SubmitField('Add Note')
