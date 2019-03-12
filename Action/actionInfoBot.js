const commandCommands = require('../Command/commandActions');

module.exports = {
    InfoReply : function(context){
        var info = commandCommands.GetCommands('info');
        info.then((info)=>{
            context.reply('\nInformación General\n\n');
                for (let i in info){
                    context.reply(info[i]);           
                }
        }).catch(err => {
            console.log('No se reconoce Informacion General',err);
        }); 
    }
};