# Quackademic Notes

Welcome to the **Quackademic Notes** project! This web application provides an intuitive platform for users to store, organize, and access notes locally on their device. With the added power of AI, you can automatically generate notes and personalized quizzes to enhance your learning experience.

![Quackademic Notes Logo](images/Quackademic%20Notes%20Logo.jpeg)

## Current User Interface

![Quackademic Notes User Interface](./images/Quackademic%20Notes%20FrondEnd.jpg)

The Current User Interface

## Features

- **Local Storage**  
  Keep your notes securely stored on your local device for quick access and privacy.

- **Organize with Folders**  
  Easily organize your notes into folders for better management and retrieval.

- **AI-Generated Notes**  
  Let our AI assist you in generating summaries and additional notes for your topics.

- **Personalized Quizzes**  
  Automatically create quizzes based on your notes to help reinforce your learning.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Python with Flask
- **Storage:** Local file system for note storage
- **AI Services:** Integration with OpenAI API for quiz and note generation

## Local Setup

1. Clone the repository

git clone [repository-url] cd [repository-name]

3. Set up a virtual environment (optional but recommended):

python -m venv venv source venv/bin/activate # On Windows use venv\Scripts\activate

4. Install the required dependencies:

pip install -r requirements.txt

5. Set up environment variables:
Create a `.env` file in the root directory and add:
SECRET_KEY=your_secret_key_here


6. Run the application:
  
python run.py


9. Open your web browser and navigate to `http://127.0.0.1:5000/`

10. You can now use the application to create, view, and organize your notes.

Note: Make sure you have Python installed on your system before starting these steps.
