/* Section 2 */
// const fsPromises = require('fs').promises;

// async function writeTheFile () {
//     fsPromises.writeFile('Notes.txt', 'Initial comment on File');
//     await fsPromises.appendFile('Notes.txt', '. This is a New comment on the file');
// }

// writeTheFile();

/* Section 3 */
// Requiring modules and importing them;
const getNotes = require('./notes.js');
getNotes()

// Using npm modules and using api's
const chalk = require('chalk');
console.log(chalk.green.bold.inverse('Success'));


