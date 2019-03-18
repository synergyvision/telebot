const commandCommands = require('../Command/commandActions');

module.exports = {

    JoinReply : function(context){
    var join = commandCommands.GetCommands('join');
    join.then((join)=>{
        for (let i in join){
           context.reply(join[i]);           
       }
    }).catch(err => {
        console.log('No se reconoce Unirte',err);
    }); 
}
};