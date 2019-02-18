const telebot = require('../Common/logicBot');

var tbot = telebot.TeleBot();

tbot.on('callback_query', (context) =>{
    context.answerCbQuery()
     if (context.update.callback_query.data === 'info'){
        context.reply('Informacion General');
     }


});