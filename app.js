"use strict";

var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.listen(port, function() {
    console.log('Running server on...' + port);
});
