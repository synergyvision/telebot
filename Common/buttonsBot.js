const Markup = require('telegraf/markup');

module.exports = {

    GetButtons : function(){
        let buttons = [
            buttons1 = [
            Markup.callbackButton('Información General', 'info'),
            ],

            buttons2 = [
            Markup.callbackButton('Servicios', 'service'),
            Markup.callbackButton('Misión', 'mision')
            ],
    
            buttons3 = [
            Markup.callbackButton('Visión', 'vision'),
            Markup.callbackButton('Unetenos', 'joinus'),
            ],
    
            buttons4 = [
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
        return Markup.inlineKeyboard(buttons).extra();
    }
};