//Global object

// console.log(global);

setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);
}, 3000);


const int = setInterval(() => {
    console.log('in the interval');

}, 1000);

//this is useful to get the directory name and file name so you can use it in other files
console.log(__dirname);
console.log(__filename);

//node does not have a window object, but it does have a global object, so you can't access document or querySelector.  You can access the global object, but it is not recommended.  You can use the global object to access the setTimeout and setInterval functions.