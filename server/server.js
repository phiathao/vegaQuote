// Bring express from Node
const express = require('express');

const app = express();
const PORT = 5000;

let quotes = [
            'Work is the curse of the drinking class.',
            'The only thing to fear is fear itself',
            `Fool me once, shame on me, but teach a man to fool me and I'll...`
        ];

let index = 0

// return one quote
// not the same every
function getQuote(){
    // a loop
    let quoteToReturn = quotes[index]; // save quotes[index] to quoteToReturn before adding
    index +=1;
    // keep out quotes inbounds / reset
    if (index >= quotes.length){
        index = 0;
    }
    return quoteToReturn;
}

app.get('/quote', function(req, res){
    res.send(getQuote());
    // res.send('something else'); // only 1 response per request
});

// Start server on PORT
app.listen(PORT, function(){
    console.log(`listening on port ${PORT}`);
})