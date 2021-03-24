//Server
var server				=	require('express')();
var http				=	require('http').Server(server);
var net					=	require('net');
var express				=	require('express');
var fs					=	require('fs');
var bodyParser			=	require('body-parser');

server.set('view engine','ejs');
server.set('views', [__dirname + '/views',__dirname + '/views']);
server.use(express.static(__dirname + '/public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

http.listen(process.env.PORT || 3000, function(){
  console.log('Server Started');
});

require('events').EventEmitter.prototype._maxListeners = 0;

server.get('/crveno',function(req,res){
	res.render('red-wine',{});
});

server.get('/belo',function(req,res){
	res.render('white-wine',{});
});

server.get('/roze',function(req,res){
	res.render('rose-wine',{});
}); 

server.get('*',function(req,res){
	res.redirect('/crveno');
})