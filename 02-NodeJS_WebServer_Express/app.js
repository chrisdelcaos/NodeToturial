'use strict';

const http = require('http');
const express = require('express');
const fs = require('fs');

//const configJson = fs.readFileSync('./config.json');

//lee asincronamente cuando no lleva el sync lyego del file
fs.readFile('./config.json', 'utf8', function(err, data){

    const config = JSON.parse(data);

    const app = express();

    app.use(express.static(config.webServer.folder));

    const httpServer = http.createServer(app);

    httpServer.listen(config.webServer.port, function(err){

        if (err){
            console.log(err.message);
            return;
        }

        //console.log('iniciando servidor en el puerto: ' + config.webServer.port);
        console.log(`iniciando servidor en el puerto ${config.webServer.port}`);
    });

});

console.log('leyendo el archivo config');

