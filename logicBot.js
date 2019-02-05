const Telegraf = require('telegraf');
const express = require('express') 
const expressApp = express()

const API_TOKEN = process.env.BOT_TOKEN || ''
const PORT = process.env.PORT || 3000

expressApp.get('/', (req, res) => { res.send('Hello World!') }) 
expressApp.listen(port, () => { console.log(`Listening on port ${port}`) })

const URL = process.env.BOT_URL 
const bot = new Telegraf(API_TOKEN);


bot.telegram.setWebhook(`${URL}/bot${API_TOKEN}`);
bot.startWebhook(`/bot${API_TOKEN}`, null, PORT)

bot.start((context)=>{
    console.log('synergyvisionbot started', context.from.id)
    return context.reply('El Bot de Synergy Vision te da la bienvenida.')
  })

  bot.command('ayuda', (context) => {
    context.reply('Esta es la ayuda!!')
  })

