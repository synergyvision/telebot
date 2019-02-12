const db = require('./firebaseBot');

var refUsers = db.Database().collection('Usuario').doc('12345');

var setUsers = refUsers.set({
    nombre: 'Braulio',
    apellido: 'Picon',
    email:'Brauliopicon96',
});