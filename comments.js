// Create web server
// 1. Create a web server
// 2. Create a route for GET request to /comments
// 3. Read the comments.json file
// 4. Return the comments as JSON to the client

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/comments' && req.method === 'GET') {
        fs.readFile('comments.json', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end('Something went wrong');
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Page not found</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});