const Markup = require('telegraf/markup');

module.exports = {

    GetButtons : function(){
        let buttons = [
  
            buttons2 = [
            Markup.callbackButton('Información General', 'info'),
            Markup.callbackButton('Servicios', 'service')
            ],
    
            buttons3 = [
            Markup.callbackButton('Misión', 'mision'),
            Markup.callbackButton('Visión', 'vision')
            ],
    
            buttons4 = [
            Markup.callbackButton('Unetenos', 'joinus'),
            Markup.callbackButton('Visitanos', 'visitus')
            ]
        ]
    
         let message = Markup.inlineKeyboard(buttons).extra();
         return message;
    },

    GetButtonsBack : function(){
        let buttons = [
            Markup.callbackButton('Volver al Menú', 'back'),
        ]

        let message = Markup.inlineKeyboard(buttons).extra();
        return message;
    }
};