const Telegraf = require('telegraf');
const WizardScene = require('telegraf/scenes/wizard');
const Stage = require('telegraf/stage');
const session = require('telegraf/session');

const button = require('../Common/buttonsBot'); 

const commandUsers = require('../Command/commandUser');
const commandCommands = require('../Command/commandActions');

const actionService = require('../Action/actionServiceBot');
const actionStart = require('../Action/actionStartBot');
const actionInfo = require('../Action/actionInfoBot');
const actionMision = require('../Action/actionMisionBot');
const actionVision = require('../Action/actionVisionBot');
const actionVisit = require('../Action/actionVisitBot');

const API_TOKEN = process.env.BOT_TOKEN || '';
const PORT = process.env.PORT || 3000;
const URL = process.env.BOT_URL;

const bot = new Telegraf(API_TOKEN);

bot.telegram.setWebhook(`${URL}bot${API_TOKEN}`);
bot.startWebhook(`/bot${API_TOKEN}`, null, PORT);

bot.start((context)=>{
  return actionStart.StartReply(context);
});

bot.hears(/Informaci[óo]n/i, (context) => {   
  bot.telegram.sendMessage(context.from.id,'Conocenos', button.GetButtons());
});
 
bot.on('callback_query', (context) =>{
      context.answerCbQuery()
      
      switch(context.update.callback_query.data){
          
          case 'info':
            actionInfo.InfoReply(context);
            bot.telegram.sendMessage(context.from.id,'Conocenos', button.GetButtons());
          break;
  
          case 'service':
            actionService.ServiceReply(context);
            bot.telegram.sendMessage(context.from.id,'Conocenos', button.GetButtons());
          break;
              
          case 'mision':
            actionMision.MisionReply(context);
            bot.telegram.sendMessage(context.from.id,'Conocenos', button.GetButtons());
          break;
          
          case 'vision':
            actionVision.VisionReply(context);
            bot.telegram.sendMessage(context.from.id,'Conocenos', button.GetButtons());
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
                    commandUsers.PostUsers(joinName,joinLastname,joinID,joinEmail);
                    var users = commandUsers.GetUsers(joinID);
                    users.then((users)=>{
                      context.reply('Sr(a). '+users.name+ ' '+users.lastname+' '+
                      'envie su curriculum vitae a -------');
                    }).catch(err => {
                      console.log('No se reconoce users',err);
                  });
                    bot.telegram.sendMessage(context.from.id,'Conocenos', button.GetButtons());
                    return context.scene.leave();
              });

            const stage = new Stage([join],{default: 'join_us'});
            bot.use(session());
            bot.use(stage.middleware());
            }).catch(err => {
              console.log('No se reconoce Joinus',err);
            });
          break;
          
          case 'visitus':
            actionVisit.VisitusReply(context);
            bot.telegram.sendMessage(context.from.id,'Conocenos', button.GetButtons());
          break;
      }
});

 