const commandCommands = require('../Command/commandActions');

module.exports = {

    VisionReply : function(context){
        var vision = commandCommands.GetCommands('vision');
             vision.then((vision)=>{
                context.reply(vision.content);
              }).catch(err => {
                 console.log('No se reconoce Vision',err);
              }); 
    }
};