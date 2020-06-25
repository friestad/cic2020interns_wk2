'use strict';
const express = require('express');
const app = express();
const request = require('request');
const util = require('util');
const Global = require('./Global');
const Countries = require('./Countries');


const uri = 'https://api.covid19api.com/summary';

//totalrecovered endpoint
app.get('/totalrecovered', function (req, res) {
    //calling external API  
    //req.pipe(request(util.format('%s', uri))).pipe(res);
    const options = {
        url: uri,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8'
        }
    };
    request(options, function(error, response, body) {
        let json = JSON.parse(body);
        const global = json.Global;
        const countries = json.Countries;

        countries.sort((a,b) => (a.TotalRecovered < b.TotalRecovered) ? 1 : -1)
        
        const ordered = countries.slice(0,10).map((nameAndTR) => {
            return {
                country: nameAndTR.Country,
                totalRecoveredCases: nameAndTR.TotalRecovered,
            };
        });

        console.log(countries);
        res.json(ordered);
    });
});

app.get('/newconfirmed', function(req, res) {
    const options = {
        url: uri,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8'
        }
    };
    request(options, function(error, response, body) {
        let json = JSON.parse(body);
        const global = json.Global;
        const countries = json.Countries;

        countries.sort((a,b) => (a.NewConfirmed > b.NewConfirmed) ? 1 : -1)

        const ordered = countries.slice(0,10).map((nameAndNC) => {
            return {
                country: nameAndNC.Country,
                newConfirmedCases: nameAndNC.NewConfirmed,

            };
        });
   
        res.json(ordered);
    });
});

app.get('/differenceconfirmed', function(req, res) {
    const options = {
        url: uri,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8'
        }
    };
    request(options, function(error, response, body) {
        let json = JSON.parse(body);
        const global = json.Global;
        const countries = json.Countries;
        
        countries.sort((a,b) => (a.TotalConfirmed > b.TotalConfirmed) ? 1 : -1)

        const least = countries[0];
        const most = countries[countries.length - 1];
        const percent = (most.TotalConfirmed - least.TotalConfirmed)/most.TotalConfirmed;
        console.log(most.Country);
        res.json({
            countryWithHighest: most.Country,
            countryWithLowest: least.Country,
            difference: percent
        });
    }); 
   
});

app.get('/percentageconfirmed', function(req, res) {
    const options = {
        url: uri,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8'
        }
    };
    request(options, function(error, response, body) {
        let json = JSON.parse(body);
        const global = json.Global;
        const countries = json.Countries;
        const totalConfirmedCases = global.TotalConfirmed;
        const list = countries.map((nameAndPC) => {
            return {
                country: nameAndPC.Country,
                percentageOfTotalConfirmedCases: ((nameAndPC.TotalConfirmed / totalConfirmedCases)*100).toFixed(3)

            };
        });

        res.json(list);
    }); 
   
});
const server = app.listen(8082, function() {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Justin on", host, port);
    
});