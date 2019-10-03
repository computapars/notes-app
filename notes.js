const fs = require('fs');
const chalk = require('chalk');

// Utils
const findMatchingNote = (title) => {
    const notes = loadNotes();
    return notes.find((item) => item.title === title);
}
const saveNotes = (noteArray) => {
    const notesJSON = JSON.stringify(noteArray);
    fs.writeFileSync('notes.json', notesJSON)
};

const loadNotes = () => {
    try {
        const notesBuffer = fs.readFileSync('notes.json');
        const notesJSON = notesBuffer.toString();
        return JSON.parse(notesJSON);    
    } catch (error) {
        return [];
    }
}

// Methods
const readNotes = (title) => {
    const matchingNote = findMatchingNote(title);
    if (matchingNote) {
        console.log(chalk.green(matchingNote.title), matchingNote.body)
    } else {
        console.log(chalk.red('Error, no matching note found'))
    }
}

const addNotes = (title, body) => {
    const notes = loadNotes();
    const hasANoteAlready = findMatchingNote(title);
    if (!hasANoteAlready) {
        notes.push({
            title: title,
            body: body,
        })
        saveNotes(notes);
        console.log(chalk.green('note taken'))
    } else {
        console.log(chalk.red.inverse('Note Already Taken'))
    }
}

const removeNote = (title) => {
    let notes = loadNotes();
    const notesToKeep = notes.filter((items) => items.title !== title);
    if(notesToKeep.length < notes.length){
        saveNotes(notesToKeep);
        console.log(chalk.green('Note removed with the title of ' + title));
    } else {
        console.log(chalk.red.inverse('No note removed'));
    }
}


const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.green('Your Notes:'));
    notes.forEach((note) => {
        console.log(chalk.green.inverse(note.title));
    })
}

module.exports = {
    add: addNotes,
    remove: removeNote,
    listNotes: listNotes,
    read: readNotes,
}