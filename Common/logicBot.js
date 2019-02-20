const Telegraf = require('telegraf');
const WizardScene = require('telegraf/scenes/wizard');
const Stage = require('telegraf/stage');
const session = require('telegraf/session');
const commandUsers = require('../Command/commandUser');
const commandCommands = require('../Command/commandActions');
const Markup = require('telegraf/markup');


const API_TOKEN = process.env.BOT_TOKEN || '';
const PORT = process.env.PORT || 3000;
const URL = process.env.BOT_URL;

const bot = new Telegraf(API_TOKEN);

bot.telegram.setWebhook(`${URL}bot${API_TOKEN}`);
bot.startWebhook(`/bot${API_TOKEN}`, null, PORT);



bot.start((context)=>{
    console.log('synergyvisionbot started', context.from.id);
    return context.reply(
        'Bienvenidos a Synergy Vision \n'+
        'Para conocer mas sobre nosotros \n'+
        'escriba la palabra Informacion'
    )
});





const join = new WizardScene('join_us',
 context =>{
  context.reply('Introduzca su Cédula');
  var joinID = context.message.text;
  console.log(joinID + '  '+ context.message.text);
  return context.wizard.next();
 },

 context =>{
  return context.scene.leave();
 }
);

bot.hears(/Informaci[óo]n/i, (context) => {
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
  
       let message = Markup.inlineKeyboard(buttons).extra();
      
       bot.telegram.sendMessage(context.from.id,'Conocenos', message)
});
 


bot.on('callback_query', (context) =>{
      context.answerCbQuery()
      
      switch(context.update.callback_query.data){
          
          case 'info':
            var info = commandCommands.GetCommands('info');
             info.then((info)=>{
                 context.reply('\nInformación General\n\n' + 
                               'Direccion: '+ info.address + ' \n' +
                               'Contactos: ' + info.cellphone+ '    ' + 
                                               info.roomphone +' \n' +
                               'Horario de Atención: ' + info.schedule
                  );
             }).catch(err => {
                 console.log('No se reconoce Informacion General',err);
             }); 
          break;
  
          case 'service':
          context.reply('Asumo que aqui se consume Firebase y el servidor de Synergy');
          break;
              
          case 'mision':
            var mision = commandCommands.GetCommands('mision');
             mision.then((mision)=>{
                 context.reply(mision.content);
             }).catch(err => {
                 console.log('No se reconoce Mision',err);
             }); 
          break;
          
          case 'vision':
            var vision = commandCommands.GetCommands('vision');
             vision.then((vision)=>{
                context.reply(vision.content);
              }).catch(err => {
                 console.log('No se reconoce Vision',err);
              }); 
          break;
              
          case 'joinus':
              const stage = new Stage([join],{default: 'join_us'});
              console.log('despues del stage');
              bot.use(session());
              console.log('despues del session');
              bot.use(stage.middleware());
              console.log('despues del middleware');
          //bot.use(flow.middleware());
          /*var joinus = commandCommands.GetCommands('joinus');
             joinus.then((joinus) => { 

              for (let i in joinus){
                    switch(joinus[i]){

                      case joinus.insertid :
                       context.reply(joinus[i]);
                       bot.hears(/^(.*)$/, (context) =>{
                       var id = context.message;
                       console.log(id);
                       });
                      break;

                      case joinus.insertname :
                       context.reply(joinus[i]);
                       bot.hears(/^(.*)$/, (context) =>{
                        var id = context.message;
                        
                        console.log(id);
                      });

                      break;

                      case joinus.insertEmail :
                       context.reply(joinus[i]);
                      
                      break;

                      case joinus.insertlastname :
                       context.reply(joinus[i]);
                      
                      break;

                    }               
                }

              }).catch(err => {
                 console.log('No se reconoce Joinus',err);
              });*/
          break;
          
          case 'visitus':
           context.reply('Asumo que aqui se consume Firebase y el servidor de Synergy');
          break;
      }
});

 