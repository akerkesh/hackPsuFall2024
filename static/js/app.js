// Backend Team: Handle logic for saving notes via AJAX and fetching saved notes

document.getElementById('noteForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const noteText = document.getElementById('noteText').value;

    try {
        const response = await fetch('/save-note', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ note: noteText }),
        });

        if (response.ok) {
            document.getElementById('noteText').value = ''; // Clear input field
            loadNotes();  // Reload notes list
        }
    } catch (err) {
        console.error('Error saving note:', err);
    }
});

async function loadNotes() {
    try {
        const response = await fetch('/get-notes');
        const notes = await response.json();
        const notesList = document.getElementById('notesList');
        notesList.innerHTML = notes.map(note => `<p>${note}</p>`).join('');
    } catch (err) {
        console.error('Error fetching notes:', err);
    }
}

window.onload = loadNotes;  // Load notes when the page loads
