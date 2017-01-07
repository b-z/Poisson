var os = require("os");
var platform = os.platform();
var express = require('express');
var http = require('http');
var request = require('request');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var exec = require('child_process').exec;
var spawn = require('child_process').spawn;
var app = express();

//app.all('*', function(req, res, next) {
//    next();
//});
app.use(bodyParser.urlencoded({
    extended: false //,
        // limit: '50mb'
}));
app.use(bodyParser.json());
app.use(express.static('public'));

var app_port = 2333;
http.createServer(app).listen(app_port, function() {
    console.log('Http server listening on port ' + app_port);
});

app.set('view engine', 'ejs');

app.use(function(req, res, next) {
    if (req.is('text/*')) {
        req.text = '';
        req.setEncoding('utf8');
        req.on('data', function(chunk) {
            req.text += chunk
        });
        req.on('end', next);
    } else {
        next();
    }
});

function handle(foo, req, res) {
    try {
        foo(req, res);
    } catch (err) {
        console.log(err);
        res.send(err)
    }
}

app.get('/', function(req, res) {
    handle(webpage, req, res);
});

function webpage(req, res) {
    res.render('Poisson');
}
