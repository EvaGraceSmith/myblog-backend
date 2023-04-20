const express = require('express');


//express app
const app = express();

//listen for requests
app.listen(3000);

//installed ejs, a templating engine that allows you to use javascript in html files and allows you to use variables (dynamic content) in html files

//register view engine
app.set('view engine', 'ejs');


//this function takes in a request and a response object.  The request object contains information about the request that was made.  The response object contains information about what we want to send back to the client.
app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
      res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
  });
  
  app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
  });
  
  // 404 page
  app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
  });