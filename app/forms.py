from wtforms import Form, StringField, SubmitField

class NoteForm(Form):
    note = StringField('Note')
    submit = SubmitField('Add Note')
