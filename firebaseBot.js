var admin = require("firebase-admin");

var serviceAccount = require('./visiontelebotjson.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: ""
});

  