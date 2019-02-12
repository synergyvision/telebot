const db = require('./firebaseBot');



module.exports = {

    GetStructure : function (coleccion,id){
        console.log(coleccion + id);
        //collection.doc(doc.id).set(doc)
        var setUsers = {
            nombre: 'Synergy',
            apellido: 'Vision',
            email:'sinergyvision@',
            }
        var refUsers = db.Database().collection('Usuario').doc(id).set(setUsers);
        console.log('pase el refUsers');
        
    }

};