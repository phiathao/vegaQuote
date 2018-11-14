// Bring express from Node

// requries
const express = require('express');
const bodyParser = require('body-parser');
const quoteHandler = require('./modules/quotes.modules');

// globals
const app = express();
const PORT = 5000;

// uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true })) //necessary for POST data
//route
app.get('/quote', function(req, res){
    // getQuoteNow is in quoteHandler
    res.send(quoteHandler.getQuoteNow());
    // res.send('something else'); // only 1 response per request
});// end get
app.post('/quote', function(req, res){
    // req.body on server is the data field of ajax call on client.js
    console.log('post hit:', req.body);
    res.send(quoteHandler.addAQuoteNow(req.body.quote));
});// end post

// Start server on PORT
app.listen(PORT, function(){
    console.log(`listening on port ${PORT}`);
})