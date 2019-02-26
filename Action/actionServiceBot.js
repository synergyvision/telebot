const commandCommands = require('../Command/commandActions');

module.exports = {
    ServiceReply : function(context){
        var service = commandCommands.GetCommands('service');
        service.then((service) => {
            context.reply('\n Conozca nuestros Servicios \n\n');   
            for (let i in service){
                context.reply(service[i]);           
            }
         }).catch( err => {
        console.log('No se reconoce Servicios',err);
         });
    }
}