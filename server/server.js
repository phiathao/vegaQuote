// Bring express from Node
const express = require('express');

const app = express();
const PORT = 5000;

app.get('/quote', function(req, res){
    res.send('got to quote');
});

// Start server on PORT
app.listen(PORT, function(){
    console.log(`listening on port ${PORT}`);
})