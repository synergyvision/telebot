const Telegraf = require('telegraf');
const WizardScene = require('telegraf/scenes/wizard');
const Stage = require('telegraf/stage');
const session = require('telegraf/session');

const button = require('../Common/buttonsBot'); 

const commandUsers = require('../Command/commandUser');
const commandCommands = require('../Command/commandActions');

const actionService = require('../Action/actionServiceBot');
const actionInfo = require('../Action/actionInfoBot');
const actionMision = require('../Action/actionMisionBot');
const actionVision = require('../Action/actionVisionBot');
const actionVisit = require('../Action/actionVisitBot');
const actionJoin = require('../Action/actionJoinBot');
const actionQuotes = require('../Action/actionQuotesBot');
const actionGeneralData = require ('../Action/actionGeneralDataBot');
const actionInstrument = require ('../Action/actionInstrumentBot');

const API_TOKEN = process.env.BOT_TOKEN || '';
const PORT = process.env.PORT || 3000;
const URL = process.env.BOT_URL;

const bot = new Telegraf(API_TOKEN);

bot.telegram.setWebhook(`${URL}bot${API_TOKEN}`);
bot.startWebhook(`/bot${API_TOKEN}`, null, PORT);

bot.start((context)=>{
  context.reply('Bienvenidos a Synergy Vision \n' +
                'Para conocer más sobre nosotros ingresa la palabra "información"');
});

bot.hears(/Informaci[óo]n/i, (context) => {   
  bot.telegram.sendMessage(context.from.id,'Conócenos', button.GetButtons());
});
 
bot.on('callback_query', (context) =>{
      context.answerCbQuery()
      
      switch(context.update.callback_query.data){
          
          case 'info':
            context.reply('\nInformación General\n\n');
            actionInfo.InfoReply(context);
          break;
  
          case 'service':
            context.reply('\n Conozca nuestros Servicios \n\n'); 
            actionService.ServiceReply(context);
          break;
              
          case 'mision':
            actionMision.MisionReply(context);
          break;
          
          case 'vision':
            actionVision.VisionReply(context);
          break;
              
          case 'joinus':
            actionJoin.JoinReply(context);
          break;
          
          case 'visitus':
            actionVisit.VisitusReply(context);
          break;

          case 'insfin':
            context.reply('Indique el símbolo del Instrumento Financiero');
          break;

          case 'quotes':
          actionQuotes.GeneralInstrument(context);
          break;

          case 'bond':
          context.reply('Bonos');
          actionGeneralData.GeneralInstrumentData('bond',context);
          break;

          case 'bvc':
          context.reply('Bolsa de Valores de Caracas');
          actionGeneralData.GeneralInstrumentData('bvc',context);
          break;

          case 'etf':
          context.reply('ETF');
          actionGeneralData.GeneralInstrumentData('etf',context);
          break;

          case 'commodities':
          context.reply('Materia Prima');
          actionGeneralData.GeneralInstrumentData('commodities',context);
          break;

          case 'crypto':
          context.reply('Criptomonedas');
          actionGeneralData.GeneralInstrumentData('crypto',context);
          break;

          case 'currency':
          context.reply('Monedas');
          actionGeneralData.GeneralInstrumentData('currency',context);
          break;

          case 'stock':
          context.reply('Acciones');
          actionGeneralData.GeneralInstrumentData('stock',context);
          break;

 
      }
});

bot.hears(/^(.*)$/, (context) => {
  actionInstrument.InstrumentSpecificReply(context.match[1],context);
});

/*bot.hears(/Unirse/i,()=>{
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
          context.reply('Sr(a)'+joinName+' '+joinLastname+
          ' por favor envie su curriculum vitae a '+joinus.synergyemail);
          context.reply(context.from.id,'Conocenos', button.GetButtons());
          return context.scene.leave();  
        },

    );

  const stage = new Stage([join],{default: 'join_us'});
  bot.use(session());
  bot.use(stage.middleware());
  }).catch(err => {
    console.log('No se reconoce Joinus',err);
  });
});*/

 