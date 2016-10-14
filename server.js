"use strict"

const http = require('http');
const server = http.createServer(function onRequest(request, response) {
    console.log('Request for: '+ request.url);
    console.log('From:'+ request.ip);
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World');
});

server.listen('9000', function started() {
    console.log('Server started at http://localhost:9000');
}) 
    