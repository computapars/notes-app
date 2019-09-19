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

yargs.version('1.0.2');

/* Sets up Yarg commands */
yargs.command('add', 'Adds a note',
    {
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
    }, (argv) => {
        console.log('My title: ' + argv.title, 'My Body:' + argv.body)
    },
).command('remove', 'Removes notes', () => {
    console.log('Removes a note')
}).command('list', 'Lists all notes', () => {
    console.log('listing a note')
}).command('read', 'Reads the notes', () => {
    console.log('Reading a note')
}).help().argv;


