//Server Variables
var PORT = '1234';

//HTML Server Setup
var express	= require('express');
var app		= express();

app.use(express.static(__dirname + '/public'));

app.listen(PORT);