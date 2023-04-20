const express = require('express');


//express app
const app = express();

//listen for requests
app.listen(3000);


//this function takes in a request and a response object.  The request object contains information about the request that was made.  The response object contains information about what we want to send back to the client.
app.get('/', (req, res) => {
    res.send('<p>home page</p>');
    });

    app.get('/about', (req, res) => {
        res.send('<p>about page</p>');
        });
