/* Section 2 
// Using asynchronous file writing and appending
const fsPromises = require('fs').promises;

async function writeTheFile () {
    fsPromises.writeFile('Notes.txt', 'Initial comment on File');
    await fsPromises.appendFile('Notes.txt', '. This is a New comment on the file');
}

writeTheFile();
*/

/* Section 3
// Requiring modules and importing them;

const getNotes = require('./notes.js');
getNotes()

Using npm modules and using api's
const chalk = require('chalk');
console.log(chalk.green.bold.inverse('Success'));
*/

/* Section 4 
// Using arguments in command line
*/

const yargs = require('yargs');
const notes = require('./notes.js');
yargs.version('1.0.2');

// /* Sets up Yarg commands */
const notesObj = {
    title : {
        desc: 'Note Title',
        type: 'string',
        demandOption: true,
    },
    body : {
        desc: 'Note body',
        type: 'string',
        demandOption: true,        
    }
};

yargs.command('add', 'Adds a note', notesObj, (argv) => {
        notes.addNotes(argv.title, argv.body);
    },
).command('remove', 'Removes notes', notesObj, (argv) => {
    notes.removeNote(argv.title);
}).command('list', 'Lists all notes', () => {
    console.log('listing a note')
}).command('read', 'Reads the notes', () => {
    console.log('Reading a note')
}).help().argv;


/* Section 4 
// Working with JSON and the file system
*/

const fs = require('fs');

const dataBuffer = fs.readFileSync('playground/1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data)

data.name = "Marlene";
data.planet = "Virgo";
data.age = "37";

fs.writeFileSync('playground/1-json.json', JSON.stringify(data));