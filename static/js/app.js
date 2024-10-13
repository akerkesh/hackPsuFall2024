let notes = {};
document.getElementById('noteForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const noteText = document.getElementById('noteText').value;
    const folderName = document.getElementById('folderName').value || 'Uncategorized';

    try {
        const response = await fetch('/save-note', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ note: noteText, folder: folderName }),
        });

        if (response.ok) {
            document.getElementById('noteText').value = '';
            document.getElementById('folderName').value = '';
            loadNotes();
            loadSuggestions();
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

async function loadSuggestions() {
    try {
        const response = await fetch('/get-suggestions');
        const data = await response.json();
        const suggestionsDiv = document.getElementById('suggestions');
        suggestionsDiv.innerHTML = `<h3>Suggested Topics:</h3><p>${data.suggestions}</p>`;
    } catch (err) {
        console.error('Error fetching suggestions:', err);
    }
}

window.onload = () => {
    loadNotes();  // Load notes when the page loads
    loadSuggestions(); // Load initial suggestions
};
