const db = require('./firebaseBot');

var refUsers = db.Database().collection('Usuario').doc('2424');

var setUsers = refUsers.set({
    nombre: 'Manuel',
    apellido: 'Espinoza',
    email:'ManuelEspinoza@',
});