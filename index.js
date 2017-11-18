var express   = require('express');
var app       = express();

app.get('/', function(request, response){
    response.sendFile(__dirname + '/view/front/home/index.html');
});
app.get('/home', function(request, response){
    response.sendFile(__dirname + '/view/front/home/index.html');
});
app.get('/profile', function(request, response){
    response.sendFile(__dirname + '/view/front/profile/index.html');
});
app.get('/rooms', function(request, response){
    response.sendFile(__dirname + '/view/front/rooms/index.html');
});
app.get('/location', function(request, response){
    response.sendFile(__dirname + '/view/front/location/index.html');
});
app.get('/service', function(request, response){
    response.sendFile(__dirname + '/view/front/service/index.html');
});
app.get('/news', function(request, response){
    response.sendFile(__dirname + '/view/front/news/index.html');
});
app.get('/contact-us', function(request, response){
    response.sendFile(__dirname + '/view/front/contact-us/index.html');
});

// port : 8081/3000/8000
var server  = app.listen(80, '127.0.0.1' ,function(){
  var host  = server.address().address;
  var port  = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});
