'use strict';

// Requires
var http = require('http');
var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');

var DIRECTORY = __dirname + '/public';
var PORT      = process.env.PORT || 3333;

var serve = serveStatic(DIRECTORY);

var server = http.createServer(function(req, res) {
  var done = finalhandler(req, res);
  serve(req, res, done);
});

server.listen(PORT);
console.log('Listening on port',PORT);
