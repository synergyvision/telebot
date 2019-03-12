const commandCommands = require('../Command/commandActions');

module.exports = {

    VisitusReply : function(context){
        var visitus = commandCommands.GetCommands('visitus');
        visitus.then((visitus)=>{
                for (let i in visitus){
                    context.reply(visitus[i]);           
                }
        }).catch(err => {
            console.log('No se reconoce Vision',err);
        }); 
    }
}
