const commandCommands = require('../Command/commandActions');

module.exports = {
    MisionReply : function(context){
        var mision = commandCommands.GetCommands('mision');
             mision.then((mision)=>{
                 for (let i in mision){
                    context.reply(mision[i]);           
                }
             }).catch(err => {
                 console.log('No se reconoce Mision',err);
             }); 
    }
};