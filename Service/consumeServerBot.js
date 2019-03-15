const rp = require('request-promise');

var header = {
    Authorization: process.env.SERVER_VALUE				
}

const optionsQuotes = {
    uri: process.env.SERVER_QUOTES,
    headers: header,
    method: 'GET',
    json: true
}

const optionByInstrument = {
    headers: header,
    method: 'GET',
    json: true
}

module.exports = {

    getDataQuotes :async function(){
        try {
            var data = await rp.get(optionsQuotes);
            return data;
        } catch (error) {
            console.log('Error al extraer los datos del servidor', error);
        }
        
    },
    
    getDataSpecificInstrument :async function(symbol){
        try {
            var data = await rp.get(process.env.SERVER_INSTRUMENT_SPECIFIC+symbol+'/empty',optionByInstrument);
            return data;
        } catch (error) {
            console.log('Error al extraer los datos del servidor', error);
        }
        
    }
}