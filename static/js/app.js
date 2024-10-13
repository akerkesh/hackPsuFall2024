let notes = {};
document.getElementById('noteForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const noteText = document.getElementById('noteText').value;
    const folderName = document.getElementById('folderName').value || 'Uncategorized';

    console.log('Note Text:', noteText);
    console.log('Folder Name:', folderName);

    try {
        const response = await fetch('/save-note', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ note: noteText }),
        });

        console.log('Save Note Response Status:', response.status);

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

        if (response.ok) {
            const notes = await response.json();

            console.log('Fetched Notes:', notes);

            const notesList = document.getElementById('notesList');
            notesList.innerHTML = notes.map(note => `<p>${note}</p>`).join('');
        }
    } catch (err) {
        console.error('Error fetching notes:', err);
    }
}

window.onload = () => {
    console.log('Page Loaded - Fetching notes');
    loadNotes();
} // Load notes when the page loads
