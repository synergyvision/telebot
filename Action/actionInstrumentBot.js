const dataserver = require('../Service/extractDataServerBot');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

module.exports = {
    
    InstrumentSpecificReply : function(context){

        rl.question('Indique bond', (answer) => {
            dataserver.showByInstrumentGeneralData(answer,context);
            //context.reply(`Oh, so your favorite food is ${answer}`);
          });

    }

}