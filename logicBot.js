const Telegraf = require('telegraf');

const API_TOKEN = '693912750:AAGxhaERiIwqf3BPrqrl4r_YGJpy_2WzgrY' /*process.env.BOT_TOKEN || ''*/
const PORT = /*process.env.PORT ||*/ 3000
const URL = 'https://web.telegram.org/#/im?p=@VisionTeleBot' /*process.env.BOT_URL*/

const bot = new Telegraf(API_TOKEN);
bot.telegram.setWebhook(`${URL}bot${API_TOKEN}`);
bot.startWebhook(`/bot${API_TOKEN}`, null, PORT)

bot.start((context)=>{
    console.log('synergyvisionbot started', context.from.id)
    return context.reply('El Bot de Synergy Vision te da la bienvenida.')
  })

  bot.command('ayuda', (context) => {
    context.reply('Esta es la ayuda!!')
  })

