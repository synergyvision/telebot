const db = require('./firebaseBot');



module.exports = {

  //  GetStructure : function (collection,dato){
  //      var refCollection = db.Database().collection(collection);
  //      var queryCollection= refCollection.where('email','==',dato);
       // var snapCollection = queryCollection.onSnapshot().;
  //      return queryCollection;
  //  },

  /*  GetUsers : function (dato) {
        var refUsers = db.Database().collection('Usuario');
        var queryUsers= refUsers.where('email','==',dato);
        var getUsers = queryUsers.get()
           .then(doc => {

           })
     //   queryUsers.get().then(function (querySnapshot) {
     //        data = querySnapshot.docs.map(function (documentSnapshot) {
     //           return documentSnapshot.get().email;
     //         });
     //   });

        return getUsers;
  
    },*/

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