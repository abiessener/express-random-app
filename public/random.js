
function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

var randomResult = randomNumber(0,100);

//$('body').append("<p>random number result: " + result + "</p>");
