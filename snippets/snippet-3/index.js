//npm install express
'use strict';

const express = require('express');  
const app = express(); 
const request = require('request');
const util = require('util');
const fs = require('fs');
const Detail = require('./objects');

const uri = 'covid-19.by.state.json';

app.get('/', function(req, res) {  
    const json = fs.readFileSync(util.format('./%s', uri));
    const output = JSON.parse(json);
  
    const detail = output.detail;
    
    let objects = [];

    for(let item of detail){
        const object = new Detail();
        Object.assign(object, item);
        objects.push(object);
    }

    detail.sort((a, b) => (a.avgCasesPerDay > b.avgCasesPerDay) ? 1 : -1)
    
    res.send(objects);
});
 
const server = app.listen(8081, function () {
    const host = server.address().address;
    const port = server.address().port;
    
    console.log("Snippet 3 listening at http://%s:%s", host, port);
});
