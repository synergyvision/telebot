const consumeServer = require('./consumeServerBot');

const _ = require('lodash');

module.exports = {

    showByInstrumentGeneralData : function(symbol, context){

        var data = consumeServer.getDataQuotes();
            data.then((data)=>{
                var search = _.find(data[0].instrumentSubsection,{subcategoryId:symbol});
                    for (let i in search){
                        _.forEach(search[i],function(value){
                            if (value.displayName != undefined){
                                context.replyWithHTML( '<img width="100" height="200" src= value.imageUrl>',
                                    value.displayName+'\n'+
                                    value.value.displayValue+'  '+
                                    value.variation.value.displayValue+'  '+
                                    '('+value.variation.percentage.displayValue+')\n'+
                                    value.date.displayDate+'  '+
                                    value.time.displayTime+'  '+
                                    value.source+'\n'+
                                    value.symbol
                                    
                                );
                                /*context.replyWithPhoto(  
                                    {url: value.imageUrl},   
                                    
                                    {caption: value.displayName+'\n'+
                                    value.value.displayValue+'  '+
                                    value.variation.value.displayValue+'  '+
                                    '('+value.variation.percentage.displayValue+')\n'+
                                    value.date.displayDate+'  '+
                                    value.time.displayTime+'  '+
                                    value.source+'\n'+
                                    value.symbol}                          
                                        
                                    );*/
                            }
                            
                        });
                    }
                    
            }).catch((error)=>{
                console.log('No se encontraron los datos solicitados',error);
            });
    },

    showByInstrumentSpecificData : function(symbol, context){

        var data = consumeServer.getDataSpecificInstrument(symbol);
            data.then((data)=>{
               /*context.replyWithPhoto(
                    {url: data.imageUrl},   
                    {caption: data.displayName+'\n'+
                    data.value.displayValue+'  '+
                    data.variation.value.displayValue+'  '+
                    '('+data.variation.percentage.displayValue+')\n'+
                    data.date.displayDate+'  '+
                    data.time.displayTime+'  '+
                    data.source+'\n'+
                    data.symbol}  
               )*/
                _.forEach(data.aditionalInfo, function(value){
                    context.replyWithHTML(`<B>${value.displayName , value.value}</B>`);
                });
            }).catch((error)=>{
                console.log('No se encontraron los datos solicitados',error);
            });
    },

    showGeneralInstrumentData : function(context){
        var data = consumeServer.getDataQuotes();
            data.then((data)=>{
                _.forEach(data[0].instrumentSubsection,function(value){
                    //context.reply(value.displayName);
                        _.forEach(value.instrument,function(value){
                            if (value.displayName != undefined){

                                context.replyWithPhoto( 
                                {url: value.imageUrl},   
                                {caption:value.displayName+'\n'+
                                value.value.displayValue+'  '+
                                value.variation.value.displayValue+'  '+
                                '('+value.variation.percentage.displayValue+')\n'+
                                value.date.displayDate+'  '+
                                value.time.displayTime+'  '+
                                value.source+'\n'+
                                value.symbol}    
                                );
                            }
                            
                        });
                });
        }).catch((error)=>{
            console.log('No se encontraron los datos solicitados',error);
        });
        
    },

    confirmInstrumentSymbol : function(symbol){
        var data = consumeServer.getDataQuotes();
        return data.then((data)=>{
            var bool = false;
                _.forEach(data[0].instrumentSubsection,function(value){
                        _.forEach(value.instrument,function(value){
                            if (value.displayName != undefined){
                                if (symbol === value.symbol){  
                                    bool = true;
                                }    
                            }
                            
                        });
                });
            console.log(bool);
            return bool;
        }).catch((error)=>{
            console.log('No se encontraron los datos solicitados',error);
        })
    }




}