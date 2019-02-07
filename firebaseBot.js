var firebase = require ('firebase');

var config = {
    apiKey: process.env.BD_APIKEY,
    authDomain: process.env.BD_AUTHDOMAIN,
    databaseURL: process.env.DB_DATABASEURL,
    projectId: process.env.DB_PROJECTID,
    storageBucket: process.env.DB_STORAGEBUCKET,
    messagingSenderId: process.env.DB_MESSAGINGSENDERID
  };

  firebase.initializeApp(config);

  