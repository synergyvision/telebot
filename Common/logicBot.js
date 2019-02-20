const Telegraf = require('telegraf');
const WizardScene = require('telegraf/scenes/wizard');
const Stage = require('telegraf/stage');
const session = require('telegraf/session');
const commandUsers = require('../Command/commandUser');
const commandCommands = require('../Command/commandActions');
const Markup = require('telegraf/markup');
var sleep = require('system-sleep');

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
            context.reply('Por favor para unirse escriba la palabra unirse');
            var joinus = commandCommands.GetCommands('joinus');
            joinus.then((joinus)=>{
              const join = new WizardScene('join_us',
              context =>{
                context.reply(joinus.insertid);
                return context.wizard.next();
              },

              context =>{
                context.wizard.state.id = context.message.text;
                context.reply(joinus.insertname);
                return context.wizard.next();
              },

              context =>{
                context.wizard.state.name = context.message.text;
                context.reply(joinus.insertlastname);
                return context.wizard.next();
              },

              context =>{
                context.wizard.state.lastname = context.message.text;
                context.reply(joinus.insertEmail);
                return context.wizard.next();
              },

              context =>{
                context.wizard.state.email = context.message.text;
                const joinID = context.wizard.state.id;
                const joinName = context.wizard.state.name;
                const joinLastname = context.wizard.state.lastname;
                const joinEmail = context.wizard.state.email;
                console.log(joinID,joinName,joinLastname,joinEmail);
                commandUsers.PostUsers(joinName,joinLastname,joinID,joinEmail);
                sleep(100);
                var users = commandUsers.GetUsers(joinID);
                users.then((users)=>{
                  context.reply('Sr(a). '+users.name+ ' '+users.lastname+' '+
                  'envie su curriculum vitae a -------');
                }).catch(err => {
                  console.log('No se reconoce users',err);
              });
                return context.scene.leave();
              }
              
            );
            const stage = new Stage([join],{default: 'join_us'});
            bot.use(session());
            bot.use(stage.middleware());
            }).catch(err => {
              console.log('No se reconoce Joinus',err);
           });
          break;
          
          case 'visitus':
           context.reply('Asumo que aqui se consume Firebase y el servidor de Synergy');
          break;
      }
});

 