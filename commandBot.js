const db = require('./firebaseBot');



module.exports = {

    GetStructure : function (collection,dato){
        var refCollection = db.Database().collection(collection);
        var queryCollection= refCollection.where('email','==',dato);

    },

    PostUsers : function(name,lastname,id,email){
        var setUsers = {
            nombre: name,
            apellido: lastname,
            identification: id,
            email: email
        }
        var refUsers = db.Database().collection('Usuario').doc().set(setUsers);
    },
    
};)