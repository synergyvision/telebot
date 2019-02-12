const db = require('./firebaseBot');



module.exports = {

    GetStructure : function (coleccion,id){
        var refUsers = db.Database().collection(coleccion,id);

     var setUsers = refUsers.set({
     nombre: 'Synergy',
     apellido: 'Vision',
     email:'sinergyvision@',
     });

    }

};