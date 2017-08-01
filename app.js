var express = require('express');

var app = express();

var port = 5000;

//if we put this first, it's going to handle any HTTP request with anything that matches within /public/
app.use(express.static('public'));

app.use('/random', function(req,res){

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    }

    var randomResult = randomNumber(0,100);

    // this sends back a JSON object, which I feel like will be super useful at some point, but the assignment seems like it wants a simple string
    // res.json({result: randomResult});
    // console.log('result sent\': {\"result\":'+ randomResult + '}');
    
    res.send(randomResult.toString());
    
});

//catchall .use callback 
app.use(function(req,res){
    console.log('catchall use function ran');
    
});

app.listen(port, function(){
    console.log('listening on port', port);
    
});