// Initialize an array to store notes
let notes = [];

// Load notes from local storage when the app starts
function loadNotes() {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
        notes = JSON.parse(savedNotes);
        renderNotes();
    }
}

// Save notes to local storage
function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Render notes on the page
function renderNotes() {
    const notesContainer = document.getElementById('notesContainer');
    notesContainer.innerHTML = '';
    notes.forEach((note, index) => {
        const noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.innerHTML = `
            - ${note}
            <button onclick="deleteNote(${index})">Delete</button>
        `;
        notesContainer.appendChild(noteElement);
    });
}

// Add a new note
document.getElementById('saveNote').addEventListener('click', () => {
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value.trim();
    if (noteText) {
        notes.push(noteText);
        noteInput.value = ''; // Clear the input
        saveNotes();
        renderNotes();
    }
});

// Delete a note
function deleteNote(index) {
    notes.splice(index, 1);
    saveNotes();
    renderNotes();
}

// Load notes on page load
loadNotes();
