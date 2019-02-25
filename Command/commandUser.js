const db = require('../Persistence/firebaseBot');

module.exports = {

    GetUsers : function (collectionID) {
        var refUsers = db.Database().collection('Usuario').doc(collectionID); 
        return refUsers.get()
        .then(doc => {
                if (!doc.exists) {
                  console.log('No existe el Usuario!');
                } else {
                    var usuario = doc.data();
                    return usuario;
                }
              })
              .catch(err => {
                console.log('Error extrayendo al Usuario', err);
              });
        
    },

    PostUsers : function(name,lastname,id,email){      
        var setUsers = {
            name: name,
            lastname: lastname,
            identification: id,
            email: email
        }
        var refUsers = db.Database().collection('Usuario').doc(id).set(setUsers);
    },
    
};