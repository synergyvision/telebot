const db = require('./firebaseBot');

module.exports = {

    GetCommands : function (comandType){
        var refCommands = db.Database().collection('Acciones').doc(comandType);

        return refCommands.get()
        .then(doc => {
            if (!doc.exists){
                console.log('No existe el comando!');
            }else{
                var accion = doc.data();
                    return accion;
            }
        })
        .catch(err =>{
            console.log('Error extrayendo el comando', err);
        })
    }

};