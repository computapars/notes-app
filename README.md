# Notes App from Udemy Node Developer Course
This notes app is part of the Node Developer Course on Udemy taught by Andrew Mead.

## How it Works:
Running the console and supplying commands, users have the following options.
`$ node app.js add --title="Foo" --body="Bar Body"`  
`$ node app.js remove --title="Foo"`  
`$ node app.js read --title="Foo"`  
`$ node app.js listNotes`  

## What I Learned:
#### Synchronous file handling through Node
All file system operations in Node offer an asynchronous and synchronous forms. With this beginners project, diving into asynchronous file structures was out of scope.

Synchronous operations error exceptions can be handled via a try catch block.

#### What's a buffer
A buffer is an area of memory, and can be seen as an array of integers. Each of these represent a byte of data.
Since this is basically binary jargon, it can be converted to a string.

[A good buffer resource](https://flaviocopes.com/node-buffers/)

## Future Improvements:
1. Server to spin up all the notes in a web browser
2. Documentation about API
3. Asynchronous File handling
4. Unit Tests