const bot = require('../Common/logicBot');

bot.TeleBot().on('callback_query', (context) =>{
    context.answerCbQuery()
    

});