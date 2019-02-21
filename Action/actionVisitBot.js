const commandCommands = require('../Command/commandActions');

module.exports = {

    VisitusReply : function(context){

        var visitus = commandCommands.GetCommands('visitus');
        visitus.then((visitus)=>{
        context.reply(visitus.webAddress);
        }).catch(err => {
            console.log('No se reconoce Vision',err);
        }); 
    }
}
