const commandCommands = require('../Command/commandActions');

module.exports = {
    
    StartReply: function(context){

        var start = commandCommands.GetCommands('start');
        start.then((start)=>{
        context.reply(start.content);
        }).catch(err =>{
            console.log('No se reconoce Start',err);
        });
        
    }
};