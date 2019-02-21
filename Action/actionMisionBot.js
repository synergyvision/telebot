const commandCommands = require('../Command/commandActions');

module.exports = {

    MisionReply : function(context){
        var mision = commandCommands.GetCommands('mision');
             mision.then((mision)=>{
                 context.reply(mision.content);
             }).catch(err => {
                 console.log('No se reconoce Mision',err);
             }); 
    }
};