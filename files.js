//fs = file system
const fs = require('fs');

// reading files
//this is asyncronous, so it will not wait for the file to be read before it moves on to the next line.  It will start to read the file and then move on to the next line.  It will then print the file to the console when it is done reading the file.
//err, data is a call back function.  It will run when the file is done reading.  If there is an error, it will print the error to the console.  If there is no error, it will print the data to the console.
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line');

//writing files
fs.writeFile('./docs/blog1.txt', 'hello, world' , () => {
    console.log('file was written');
});

fs.writeFile('./docs/blog2.txt', 'hello, again' , () => {
    console.log('file was written');
});

