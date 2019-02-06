const Telegraf = require('telegraf');
const Markup = require('telegraf/markup');
//const command = require('.comandBot');

const API_TOKEN = process.env.BOT_TOKEN || '';
const PORT = process.env.PORT || 3000;
const URL = process.env.BOT_URL;

const bot = new Telegraf(API_TOKEN);
bot.telegram.setWebhook(`${URL}bot${API_TOKEN}`);
bot.startWebhook(`/bot${API_TOKEN}`, null, PORT);

bot.start((context)=>{
  console.log('synergyvisionbot started', context.from.id);
  return context.reply('Bienvenidos a Synergy Vision.')
});


bot.hears('Informacion', (context) => {
    let botoms = [
        Markup.callbackButton('Información General', 'info'),
        Markup.callbackButton('Servicios', 'service'),
        Markup.callbackButton('Misión', 'mision'),
        Markup.callbackButton('Visión', 'vision'),
        Markup.callbackButton('Unetenos', 'joinus'),
        Markup.callbackButton('Visitanos', 'visitus')
    ]

    let botoms1 = [
        Markup.callbackButton('probando')
    ]

    let message = Markup.inlineKeyboard(botoms).extra()
    
    message['parse_mode'] = 'HTML'

    bot.telegram.sendMessage(context.from.id,'Conocenos', message)
});


bot.on('callback_query', (context) =>{
    context.answerCbQuery()
    console.log(context.update)
});


