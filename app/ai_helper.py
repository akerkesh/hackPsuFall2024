import openai
import os
from dotenv import load_dotenv

# Load environment variables and set up OpenAI API key
load_dotenv()
openai.api_key = os.getenv('OPENAI_API_KEY')

def generate_summary(text):
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=f"Summarize the following text:\n\n{text}\n\nSummary:",
        max_tokens=150
    )
    return response.choices[0].text.strip()

def create_quiz(text):
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=f"Create a quiz based on the following text:\n\n{text}\n\nQuiz:",
        max_tokens=200
    )
    return response.choices[0].text.strip()

def generate_note_suggestions(existing_notes):
    combined_notes = "\n".join(existing_notes)
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=f"Based on these notes:\n\n{combined_notes}\n\nSuggest additional notes or topics to explore:",
        max_tokens=200
    )
    return response.choices[0].text.strip()