var express = require('express');
var app = express();
var Bookmark=require('./bookmark').Bookmark;

var server = app.listen(3000, function() {
    console.log('Listening on port %d',
server.address().port);
});
