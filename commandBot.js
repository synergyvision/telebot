const db = require('./firebaseBot');



module.exports = {

    GetStructure : function (name,id,lastname){
        


           
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
    
};