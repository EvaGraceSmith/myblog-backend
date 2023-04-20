const express = require('express');


//express app
const app = express();

//listen for requests
app.listen(3000);


//this function takes in a request and a response object.  The request object contains information about the request that was made.  The response object contains information about what we want to send back to the client.
app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
});

//redirects
app.get('/about-us', (req, res) => {
    res.reroute('/about');
});

//404 page
app.use((req, res) => {
    res.sendFile('./views/404.html', { root: __dirname });
});
