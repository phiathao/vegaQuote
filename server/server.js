// Bring express from Node
const express = require('express');
const getQuote = require('./modules/quotes.modules');

const app = express();
const PORT = 5000;

app.get('/quote', function(req, res){
    res.send(getQuote());
    // res.send('something else'); // only 1 response per request
});

// Start server on PORT
app.listen(PORT, function(){
    console.log(`listening on port ${PORT}`);
})