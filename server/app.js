var express 	= require('express'),
    app 		= express(),
    server 		= require('http').createServer(app),
    bodyParser 	= require('body-parser'), //support POST requests
    multer 		= require('multer'), //support POST requests
    path 		= require('path');

// set default server port
var port = process.env.PORT || 9000;

app.set('view engine', 'html');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data

//app.use('/api/comments', require('./api/comments'));



var root = path.normalize(__dirname + '/..');

app.use(express.static(path.join(root, 'app')));

app.listen(port, function(){
    console.log('Express server listening on %d', port);
});