/* Section 2 */
// const fsPromises = require('fs').promises;

// async function writeTheFile () {
//     fsPromises.writeFile('Notes.txt', 'Initial comment on File');
//     await fsPromises.appendFile('Notes.txt', '. This is a New comment on the file');
// }

// writeTheFile();

/* Section 3 */
const getNotes = require('./notes.js');

getNotes()