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
        refUsers.get().then(snapshot => {
            snapshot.forEach(doc => {
              console.log(doc.collectionID, '=>', doc.data());
            });
          })
          .catch(err => {
            console.log('Error getting documents', err);
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