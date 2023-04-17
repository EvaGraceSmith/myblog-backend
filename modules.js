//rather than giving the const a name, we can use destructuring to pull out the properties we want by adding an object {} to the require function.  This is useful when you have a lot of properties ('people' in this instance) in the object and you only want to use a few of them.

const {people, ages} = require('./people');

console.log(people, ages);

//os is a built in module that gives you information about the operating system you are using.  You can use this to get the hostname, platform, and other information about the operating system.  You can also use this to get the free memory, total memory, and other information about the memory on your computer.  You can also use this to get the current user, and other information about the user.
const os = require('os');

console.log(os.platform(), os.homedir());

