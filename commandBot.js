const db = require('./firebaseBot');



module.exports = {

  //  GetStructure : function (collection,dato){
  //      var refCollection = db.Database().collection(collection);
  //      var queryCollection= refCollection.where('email','==',dato);
       // var snapCollection = queryCollection.onSnapshot().;
  //      return queryCollection;
  //  },

    GetUsers : function (collectionID) {
        var refUsers = db.Database().collection('Usuario').doc(collectionID);
        
        return refUsers.get()
        .then(doc => {
                if (!doc.exists) {
                  console.log('No such document!');
                } else {
                    var usuario = doc.data();
                    console.log('Document data:', usuario);
                    return usuario;
                  
                }
              })
              .catch(err => {
                console.log('Error getting document', err);
              });
        
    },

    PostUsers : function(name,lastname,id,email){
        var setUsers = {
            nombre: name,
            apellido: lastname,
            identification: id,
            email: email
        }
        var refUsers = db.Database().collection('Usuario').doc(id).set(setUsers);
    },
    
};