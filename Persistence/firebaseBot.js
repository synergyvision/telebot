var admin = require("firebase-admin");


var serviceAccount = {
  type: process.env.FIREBASE_TYPE,
  project_id: process.env.FIREBASE_PROJECTID,
  private_key_id: process.env.FIREBASE_PRIVATEKEYID,
  private_key: process.env.FIREBASE_PRIVATEKEY.replace(/\\n/g, '\n'),
  client_email: process.env.FIREBASE_CLIENTEMAIL,
  client_id: process.env.FIREBASE_CLIENTID,
  auth_uri: process.env.FIREBASE_AUTHURI,
  token_uri: process.env.FIREBASE_TOKENURI,
  auth_provider_x509_cert_url: process.env.FIREBASE_AUTHPROVIDER,
  client_x509_cert_url: process.env.FIREBASE_CLIENT

};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASEURL
});

var database = admin.firestore();

module.exports ={
  
  Database : function() { 
    return database;
  }


};
