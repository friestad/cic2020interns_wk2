//npm install express
'use strict';

const express = require('express');  
const app = express(); 
const request = require('request');
const util = require('util');
const fs = require('fs');

const uri = 'covid-19.by.state.json';

app.get('/', function(req, res) {  
    const json = fs.readFileSync(util.format('./%s', uri));
    const output = JSON.parse(json);
    const asOfDate = output.asOfDate;    
    const summary = output.summary;    
    const detail = output.detail;
    res.send(output);
});
 
app.get('/asofdate', function(req, res) {  
    const json = fs.readFileSync(util.format('./%s', uri));
    const output = JSON.parse(json);
    const asOfDate = output.asOfDate;    
    res.send(asOfDate);
});

app.get('/summary', function(req, res) {  
    const json = fs.readFileSync(util.format('./%s', uri));
    const output = JSON.parse(json);
    const summary = output.summary;    
    res.send(summary);
});

app.get('/detail', function(req, res) {  
    const json = fs.readFileSync(util.format('./%s', uri));
    const output = JSON.parse(json);
    const detail = output.detail;
    res.send(detail);
});

const server = app.listen(8081, function () {
    const host = server.address().address;
    const port = server.address().port;
    
    console.log("Snippet 3 listening at http://%s:%s", host, port);
});
