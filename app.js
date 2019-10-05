const yargs = require('yargs');
const notes = require('./notes.js');
yargs.version('1.0.2');

/* Sets up Default Yarg Arguments */
const notesObj = {
    title : {
        desc: 'Note Title',
        type: 'string',
        demandOption: true,
    },
    body : {
        desc: 'Note body',
        type: 'string',
        demandOption: false,        
    }
};

/* API */
yargs.command('add', 'Adds a note', {...notesObj, 
    body: {
        ...notesObj.body,
        demandOption: true,
    }}, (argv) => {
        notes.add(argv.title, argv.body);
    },
).command('remove', 'Removes notes', notesObj, (argv) => {
    notes.remove(argv.title);
}).command('listNotes', 'Lists all note titles', () => {
    notes.listNotes();
}).command('read', 'Reads the notes', notesObj, (argv) => {
    notes.read(argv.title)
}).help().argv;
