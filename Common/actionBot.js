const bot = require('../Common/logicBot');

bot.TeleBot().on('callback_query', (context) =>{
    context.answerCbQuery()
     if (context.update.callback_query.data === 'info'){
        context.reply('Informacion General');
     }


});