const dataserver = require('../Service/extractDataServerBot');

module.exports = {
    
    InstrumentSpecificReply : function(symbol,context){
        var data = dataserver.confirmInstrumentSymbol(symbol,context);
        data.then((data) =>{
            if (data){
                dataserver.showByInstrumentSpecificData(symbol);
            }else{
                context.reply('Usted introdujo un símbolo no existente');
            }
        }).catch((err)=>{
            console.log('Error al extraer la data', err);
        });

    }

}