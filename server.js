const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    //set header content type
    res.setHeader('Content-Type', 'text/html');
    res.write('<p>hello, world!</p>');
    res.end();
});

server.listen(3010
    , 'localhost', () => {
    console.log('listening for requests on port 3010');
}
);