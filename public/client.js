function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function displayResult(){
    var newRand = randomNumber(0,100);
    $('#resultsDiv').html("<p style='font-size: 2em; margin: 2px; text-align: center'>" + newRand + "</p>");
    $('#resultsDiv').fadeIn();
}

$(document).ready(function(){
    $('#newRandomButton').on('click', function(){
        $('#resultsDiv').fadeOut(displayResult);
    });
});