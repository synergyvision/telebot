const dataserver = require('../Service/extractDataServerBot');

module.exports = {
    
    GeneralInstrument : function(context){
      dataserver.showGeneralInstrumentData(context);
    }

}