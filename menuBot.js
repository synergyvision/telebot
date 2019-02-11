const bot = require('./logicBot').bot;

bot.start((context)=>{
    console.log('synergyvisionbot started', context.from.id);
    return context.reply('Bienvenidos a Synergy Vision.')
  });
  
  bot.hears('Alo', (context) => {
  return context.reply('Si estamos funcionando')
  });
  
  bot.hears('New', (context) => {
    return context.reply('We are Synergy')
    });

  bot.hears('Informacion', (context) => {
      let botoms = [
  
          botoms2 = [
          Markup.callbackButton('Información General', 'info'),
          Markup.callbackButton('Servicios', 'service')
          ],
  
          botoms3 = [
          Markup.callbackButton('Misión', 'mision'),
          Markup.callbackButton('Visión', 'vision')
          ],
  
          botoms4 = [
          Markup.callbackButton('Unetenos', 'joinus'),
          Markup.callbackButton('Visitanos', 'visitus')
          ]
      ]
  
      let message = Markup.inlineKeyboard(botoms).extra()
  
      bot.telegram.sendMessage(context.from.id,'Conocenos', message)
  });
  
  
  bot.on('callback_query', (context) =>{
      context.answerCbQuery()
      
      switch(context.update.callback_query.data){
          case 'info':
           context.reply('Asumo que aqui se consume Firebase y el servidor de Synergy');
          break;
  
          case 'service':
          context.reply('Asumo que aqui se consume Firebase y el servidor de Synergy');
          break;
              
          case 'mision':
          context.reply('Asumo que aqui se consume Firebase y el servidor de Synergy');
          break;
          
          case 'vision':
          context.reply('Asumo que aqui se consume Firebase y el servidor de Synergy');
          break;
              
          case 'joinus':
          context.reply('Asumo que aqui se consume Firebase y el servidor de Synergy');
          break;
          
          case 'visitus':
          context.reply('Asumo que aqui se consume Firebase y el servidor de Synergy');
          break;
      }
  });