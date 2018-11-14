let quotes = [
    'Work is the curse of the drinking class.',
    'The only thing to fear is fear itself',
    `Fool me once, shame on me, but teach a man to fool me and I'll...`
];

let index = 0

function addAQuote(newQuote){
    console.log('in addQuote', newQuote);
    quotes.push(newQuote);
    return 'ribbit';
} // end addQuote

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

module.exports = { getQuoteNow: getQuote, addAQuoteNow: addAQuote }