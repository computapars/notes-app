const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    console.log("Get's the notes");
}

const findDuplicates = (title) => {
    const notes = loadNotes();
    return notes.filter((item) => item.title === title).length > 0;
}

const addNotes = (title, body) => {
    const notes = loadNotes();
    const hasDuplicates = findDuplicates(title);
    if (!hasDuplicates) {
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

module.exports = {
    addNotes: addNotes,
    getNotes: getNotes,
    removeNote: removeNote,
}