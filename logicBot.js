const Telegraf = require('telegraf');
const express = require('express');

const API_TOKEN = process.env.BOT_TOKEN || '' ;
const PORT = process.env.PORT || 3000 ;
const URL = process.env.BOT_URL ;
const URL_BOT = process.env.BOT_URL_SECRET;

const expressApp = express();
const bot = new Telegraf(API_TOKEN);

expressApp.use(bot.webhookCallback(`/secret-path ${URL_BOT}`));
bot.telegram.setWebhook(`${URL} bot${API_TOKEN}`);

bot.startWebhook(`/bot${API_TOKEN}`, null, PORT);

expressApp.get('/', (req, res) => {
  res.send('Hello World!')
});

expressApp.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
});

bot.start((context)=>{
    console.log('synergyvisionbot started', context.from.id)
    return context.reply('El Bot de Synergy Vision te da la bienvenida.')
  });

bot.command('ayuda', (context) => {
    context.reply('Esta es la ayuda!!')
  })

