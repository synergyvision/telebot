const Telegraf = require('telegraf');
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
  
/*
bot.hears('Alo', (context) => {
  return context.reply('Si estamos funcionando')
  });
*/


bot.hears('Informacion', (context) => {
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
      
      bot.telegram.sendMessage(context.from.id,'Conocenos', message)
});
 


bot.on('callback_query', (context) =>{
      context.answerCbQuery()
      
      switch(context.update.callback_query.data){
          //case 'info':
          //break;
  
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
            var joinus = commandCommands.GetCommands('joinus');
             joinus.then((joinus) => {
               
              for (let i in joinus){
                  console.log('entro al for');
                  //console.log('Hace algo'+ joinus[i]);
                  //context.reply(joinus[i]);
                    if (joinus[i] === joinus.insertid){
                      console.log('ENTRO AL IF insertid');
                    }else{
                      if (joinus[i].hasOwnProperty('insertname')){
                        console.log('insertname');
                        context.reply(joinus.insertname);
                      }else {
                        if (joinus[i].hasOwnProperty('insertlastname')){
                          console.log('insertlastname');
                          context.reply(joinus.insertlastname);
                        }else {
                          if (joinus[i].hasOwnProperty('insertEmail')){
                            console.log('insertEmail');
                            context.reply(joinus.insertEmail);
                          }
                        }
                      }
                    }



                }
                console.log(joinus);
              }).catch(err => {
                 console.log('No se reconoce Joinus',err);
              });
          break;
          
          case 'visitus':
          context.reply('Asumo que aqui se consume Firebase y el servidor de Synergy');
          break;
      }
});


module.exports = {

  TeleBot : function(){
    return bot;  
  }

};
 