const db = require('./firebaseBot');



module.exports = {

    GetStructure : function (coleccion,id){
        var refUsers = db.Database().collection(coleccion).doc(id);

        var setUsers = refUsers.set({
        nombre: 'Synergy',
        apellido: 'Vision',
        email:'sinergyvision@',
        });

    }

};