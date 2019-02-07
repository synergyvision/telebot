var admin = require("firebase-admin");
const URL_DB = process.env.BD_DATABASEURL;
var serviceAccount = require('./visiontelebotjson.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: URL_DB
});

  