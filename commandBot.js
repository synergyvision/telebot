const db = require('./firebaseBot');



module.exports = {

    GetStructure : function (coleccion,id){
        console.log(coleccion + id);

        var setUsers = {
            nombre: 'Synergy',
            apellido: 'Vision',
            email:'sinergyvision@'
        }

        var refUsers = db.Database().collection(coleccion).doc(id).set(setUsers);   
    }

};