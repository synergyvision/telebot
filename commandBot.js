const db = require('./firebaseBot');



module.exports = {

    GetStructure : function (coleccion,id){
        console.log(coleccion + id);
        //collection.doc(doc.id).set(doc)
        var refUsers = db.Database().collection('Usuario').doc(id);
        console.log('pase el refUsers');
        var setUsers = refUsers.set({
        nombre: 'Synergy',
        apellido: 'Vision',
        email:'sinergyvision@',
        }).catch(function (error){
            console.log(error)
        });   
    }

};