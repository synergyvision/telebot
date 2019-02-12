const db = require('./firebaseBot');



module.exports = {

    GetStructure : function (name,id,lastname){
        console.log(name + id + lastname);

        var setUsers = {
            nombre: name,
            apellido: id,
            email: lastname
        }

        var refUsers = db.Database().collection('Usuario').set(setUsers);   
    }

};