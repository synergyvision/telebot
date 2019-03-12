const consumeServer = require('./consumeServerBot');

const _ = require('lodash');

module.exports = {

    showByInstrumentGeneralData : function(symbol){

        var data = consumeServer.getDataQuotes();
            data.then((data)=>{
                var search = _.find(data[0].instrumentSubsection,{subcategoryId:symbol});
                    for (let i in search){
                        _.forEach(search[i],function(value){
                            if (value.displayName != undefined){
                                let a = [value.displayName, 
                                         value.value.displayValue,
                                         value.source,
                                         value.time.displayTime,
                                         value.variation.value.displayValue,
                                         value.variation.percentage.displayValue
                                        ];
                                console.log(a);
                            }
                            
                        });
                    }
            }).catch((error)=>{
                console.log('No se encontraron los datos solicitados',error);
            });
    },

    showByInstrumentSpecificData : function(symbol){

        var data = consumeServer.getDataSpecificInstrument(symbol);
            data.then((data)=>{
                _.forEach(data.aditionalInfo, function(value){
                    console.log(value.displayName , value.value);
                });
            }).catch((error)=>{
                console.log('No se encontraron los datos solicitados',error);
            });
    }

}