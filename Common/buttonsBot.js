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
            ],

            buttons5 = [
            Markup.callbackButton('Cotizaciones','quotes'),
            ],

            buttons6 = [
            Markup.callbackButton('Bonos','bond'),
            Markup.callbackButton('BVC','bvc'),
            ],

            buttons7 = [
            Markup.callbackButton('Instrumentos Financieros','insfin'),
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