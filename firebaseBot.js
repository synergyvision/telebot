var admin = require("firebase-admin");

var config = {
    "type": "service_account",
    "project_id": "visiontelebot",
    "private_key_id": "c972dae567bb86a8743185fe4014f07bf39d44b0",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDK9K7BFX0jKDzP\nYE3B4hyHcbE0weGYTllHEzowDScPqQgMCg3GmwTLLN9uDNj5WM77fNHwz8t7QNce\nL1oUjgK7/1+rIMo8FcUAfoNZporSw4lxaSb0/MSvaydR+VqXCr5epB+uAhITv9XQ\nyIif2IeMmjv1JkR+IPGIitpFYyXtmkqndal8y5bw125GSMJDKEk9MhYCuLuUfnRz\n/yQNAutWwWzK7v28TuFXMorM/JCZTtVaF2PVUJVc2WczB7qCJkcUf3cMUN/0Hr6+\njdfHR+j1JQC0r75bEEFk5tP+JS/tXUIEkuQRw6whjaA7hxEGhajNbnwiTorzVyOO\nDiUDwKLhAgMBAAECggEABWejpZbLiXWbZ0059jijQxxNCG9EhrHJHkkQgYIA08Gl\nVNcUiRZCLUwlf+4lveqGf5Yc7AAdUSvXwWZoLG2K5y6yDDyq2hOygSn9WD8PdHUF\nNTZESvMAz2hH01QT8dC1I2V/m6VojcABTbvgvztXrRqYj8BMQ7zKRd/nF8Df/D5K\n9M1r0rR1n7j+dEyJgXfOd7VG0LRtmye3Ji/mc0IK0vnyHwrMmaK8sCg6vtwfUXZv\n1gLPfjKrVq4lfq1H0SFAb7pOi7pxIbNzGISV6z+iZnLwDm3f/7ewTKsI6w342DGp\nIwe4rng5a3PQvvrBkE04sQAeL62RAkyMVdCrUaaUOQKBgQDsiNGYdFUgOKTB3Wjm\nZufEJufs3F16+2qyiK5arRmOcWwZ3bmgQUtxyMC1bm39N2TXqDpFfM97diMa06nv\nA0bhnZAhyJvC6lSyeiVAwF/XXx5x5mVCOvzpkDQpOy3yUNqctKe5jbB+k2BiuwzH\nsj2j4W7Acp6w50SlTEXzkGW/aQKBgQDbqHJcM1G3AYuXQDb16eibTpdib/Xc4skp\nnkCTnhfJki5SvShpdn1+WZjJB2x6GrTB2cnH1WjNSGW1XddCZjbTkc2GoSaY612Y\na0CS5TYLTaA/XHuxx0UPIpQ0u13iAONIteaNH9ObtfppLOsgTiVqeLlUaqSSnX9X\nRCJk5pTQuQKBgQCdIt+rGk2bFEZQDFkuB1sdMoONFXB8zR268ZZy4uBBgxQ/ss8o\nqXgHZUiwv2YOfIhfxIDBvQLRkFAN+GPCRzkFlXk1GGJyAN63mvG4rJR/Lc+590d5\n0lpGh+g/I/OIMTKqPFHYsUp5LEsyC/WXjM/qWU8MRpkqCNnPvnYSMvGFUQKBgQC9\nMdlOkOVRO4OAQ08TgOVY39iEcOrT1oJt1mDIxOK4O7Cqk0K7k9ODgKiYfkxw34/R\naETkWmxqZHE2Rh2ik2el02+zBhq4nAGBxt9XpxVlpvbfnEjuVzSkVKRSxw+WGi2p\n8wMhisg41gVZkdbzfFu92T3H+BLINd/4yjbVscV8AQKBgFJ/fUVGgHZmeiHRdE34\nFcQQXX60Sn8YdmSF/mS+QQ2cMz1SeRpfBLOsM70GobdGp3yJVk6j1XzpdIp9WLIW\ny7cFG37lcwav6tjSIG6XrTm0l8/1Vi2kWhXO1dRZTHmWKFwv+XjrXubTy6GNtStd\ncNimh7mXevRmXjbL5fbFZ2Lp\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-z0so4@visiontelebot.iam.gserviceaccount.com",
    "client_id": "102279789752593602649",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-z0so4%40visiontelebot.iam.gserviceaccount.com"
  }

var serviceAccount = require(config);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://visiontelebot.firebaseio.com"
});

  