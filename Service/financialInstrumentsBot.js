const rp = require('request-promise');

var header = {
    Authorization: process.env.SERVER_VALUE				
}

const options = {
    uri: process.env.SERVER_QUOTES,
    headers: header,
    method: 'GET',
    json: true
}

module.exports={
    
    getData :async function(){
        try {
            var body = await rp.get(options);
            return body;
        } catch (error) {
            console.log('Error', error);
        }
        
    }

}