const bot = require('../Common/logicBot');
const commandUsers = require('../Command/commandUser');
const commandCommands = require('../Command/commandActions');
const Markup = require('telegraf/markup');


bot.TeleBot().hears('Informacion', (context) => {
    let buttons = [

        buttons2 = [
        Markup.callbackButton('Información General', 'info'),
        Markup.callbackButton('Servicios', 'service')
        ],

        buttons3 = [
        Markup.callbackButton('Misión', 'mision'),
        Markup.callbackButton('Visión', 'vision')
        ],

        buttons4 = [
        Markup.callbackButton('Unetenos', 'joinus'),
        Markup.callbackButton('Visitanos', 'visitus')
        ]
    ]

    let message = Markup.inlineKeyboard(buttons).extra()
    
    bot.TeleBot().telegram.sendMessage(context.from.id,'Conocenos', message)
});


bot.TeleBot().on('callback_query', (context) =>{
    context.answerCbQuery()
    
    switch(context.update.callback_query.data){
        case 'info':
          //commandUsers.PostUsers('Braulio','Zambrano','2','brauliopicon@');
          /*var usuario = commandUsers.GetUsers('1');
          usuario.then( (usuario) =>{
              //console.log(usuario);
              context.reply('Hola'+' '+ usuario.nombre+' '+usuario.apellido);
          }).catch(err => {
              console.log('Error saludando', err);
            });
          */
          break;

        case 'service':
        context.reply('Asumo que aqui se consume Firebase y el servidor de Synergy');
        break;
            
        case 'mision':
          var mision = commandCommands.GetCommands('mision');
           mision.then((mision)=>{
               //console.log(mision);
               context.reply(mision.content);
             }).catch(err => {
               console.log('No se reconoce Mision',err);
           });

           
        break;
        
        case 'vision':
        context.reply('Asumo que aqui se consume Firebase y el servidor de Synergy');
        break;
            
        case 'joinus':
        context.reply('Asumo que aqui se consume Firebase y el servidor de Synergy');
        break;
        
        case 'visitus':
        context.reply('Asumo que aqui se consume Firebase y el servidor de Synergy');
        break;
    }
});