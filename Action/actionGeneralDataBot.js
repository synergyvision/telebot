const dataserver = require('../Service/extractDataServerBot');

module.exports = {
    GeneralInstrumentData : function(symbol,context){
        dataserver.showByInstrumentGeneralData(symbol,context);
      }
}