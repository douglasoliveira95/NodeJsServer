"use strict"

const http = require('http')
const host = 'localhost'
const port = 9000
const url = require('url');

function start(route, handler) {
   http
    .createServer(onRequest)
    .listen(port, onStart) 
    
    function onRequest(request, response) {
    console.log('Request for: ' + request.url)
    
    let path = url.parse(request.url).path
    route(path,handler)
    
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/plain')
    response.end('Hello World')
    }
}

function onStart() {
    console.log(`Server started at http://${host}:${port}`)
}

//Public API
exports.start = start