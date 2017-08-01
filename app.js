var express = require('express');

var app = express();

var port = 5000;

//if we put this first, it's going to handle any HTTP request with anything that matches within /public/
app.use(express.static('public'));

//catchall .use callback 
app.use(function(req,res){
    console.log('catchall use function ran');
    
});

app.listen(port, function(){
    console.log('listening on port', port);
    
});