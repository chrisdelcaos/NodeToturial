//var mensaje = "asfsadfasdf";
//console.log(mensaje);
/*
Execute in terminal:
node 01-InitialScript.js
*/

var server = require('http');

server.createServer(motor).listen('1337');

function motor(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    response.end('Hey there, from the server! :D');
}