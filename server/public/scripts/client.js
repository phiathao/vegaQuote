$(document).ready(handleReady);

function handleReady(){
    console.log('jQ is ready!');

// click listeners  

    $('#isClick').on('click', buttonClick);
    console.log('after click');
    $('#addingQuote').on('click', addQuote)
// call out server  

// get a quote`

// append to dom
    getQuote();
}

function addQuote(){
    // this object will be req.body when it gets to the server
    let objectToSend = {
        quote: $('#quoteIn').val()
    } // end of objectToSend
    $.ajax({
        method: 'POST',
        url: '/quote',
        data: objectToSend
    }).then( function (response){
        console.log('back from the sever with', response);
    }); // end of ajax
} // end of function

function buttonClick(){
    console.log('is in click');
    getQuote();
}

function getQuote(){
    $.ajax({
        method: 'GET',
        url: '/quote'
    }).then(function(response){
        console.log(response);
        $('#target').append(`<p>${response}</p>`)
    })
}