const Telegraf = require('telegraf');

const API_TOKEN = process.env.BOT_TOKEN || ''
const PORT = process.env.PORT || 3000
const URL = process.env.BOT_URL

const bot = new Telegraf(API_TOKEN);
bot.telegram.setWebhook(`${URL}bot${API_TOKEN}`);
bot.startWebhook(`/bot${API_TOKEN}`, null, PORT)

bot.start((context)=>{
  console.log('synergyvisionbot started', context.from.id)
  return context.reply('Bienvenidos a Synergy Vision.')
})
