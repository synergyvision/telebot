const commandCommands = require('../Command/commandActions');

module.exports = {

    VisionReply : function(context){
        var vision = commandCommands.GetCommands('vision');
             vision.then((vision)=>{
                for (let i in vision){
                    context.reply(vision[i]);           
                }
              }).catch(err => {
                 console.log('No se reconoce Vision',err);
              }); 
    }
};