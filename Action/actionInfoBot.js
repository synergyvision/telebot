const commandCommands = require('../Command/commandActions');

module.exports = {
    InfoReply : function(context){
        var info = commandCommands.GetCommands('info');
        info.then((info)=>{
            context.reply('\nInformación General\n\n' + 
                          'Direccion: '+ info.address + ' \n' +
                          'Contactos: ' + info.cellphone+ '    ' + 
                                          info.roomphone +' \n' +
                          'Horario de Atención: ' + info.schedule+' \n' +
                          'Contacto vía Email: ' + info.emailcontact
             );
        }).catch(err => {
            console.log('No se reconoce Informacion General',err);
        }); 
    }
};