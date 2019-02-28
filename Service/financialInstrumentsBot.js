const request = require('request');

var header = {
    key: process.env.SERVER_KEY,
	value: process.env.SERVER_VALUE				
}

var quotes = {
    url: process.env.SERVER_QUOTES,
    headers: header,
    method: 'GET',
}

request(quotes ,function (error, response, body){
    if (!error && response.statusCode == 200){
        var quote = body;
        console.log(quote);
    }
});

