import admin from 'firebase-admin';

export const initializeFirebase = () => {
  let  serviceAccountKey  ={
        "type": "service_account",
        "project_id": "prepinsights-523c5",
        "private_key_id": "4b309573084658adfeb1cbdc69b837cc963f2565",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCyiziSV2ns09LS\n1+qT2P1krN1EsRvwoEfYC5kpTKbvKXKoBHQc7eKyvQjWOuz3TFfrD1YWmoioSMmb\njun5ajTnrbAwiyBwd4NeOFwsNPyoZLkeTA1scfUIkeN/j96oIQv73vHFWd7Dz58Q\n0bjPSPwUhDiFt6vJqnA+C9eymrD4SBLQCiW9SUfhJ3HWcLL6aeCUpvCM+d0lz7Va\n13LwYHg1x0RsGCrgU/q165YuoDZZoGBkuwBJYfvwS7sfh5lyyCQS7trz9ZHlv2oG\nbobv+02IvRyqy9nvzAxy4uMViYeeVcRC8hb7vUt5M350FKs3xAAvJTR0AlUD36y7\nQgJFDKd7AgMBAAECggEABmt8HsL245WgRIWQAT3xqo+OqzwlEYtp2epc2P/RFtNq\nNIFofWvOVXf3m+BlieTcWm7kPQ7UcByh5y6F2jqH6Xa02aH/Chw6BIbJRauoFBP/\nFghNCUO1uFeqkvkk2+3IRQe4sMxw9qB+CzhHSWjJ66DveVtn2Wn//DMnz9vBFkRN\npguJgwMnay+iXuw3sdKoDlsBQyPhQHuQEv0qBZV4vmW+2vq084KMTicGKbG15O0d\n+6js8TZ2OPL21NDn/5LTEQ5Y7pSKVZApUUYOKvqF8W2OtC7+TFnofUEcdf5tKKzO\nAfmgDNIbtdeLCQItwgP0lUKeg/NWi+PsPfBBmOwMqQKBgQD2BkJAj+jJ4YN1ajJ9\nrKqtl1LFVrILNF5hJ92b2mx4rmEmkfyXeIy9uSYe2NmMGKkzHg4r/xc5mijURrmK\nB+U5IFRMMIskbMC99cPGpDCTVeCyThDXhrjIRNbLZ8ZypWoAa91PMDed5oYgfrXv\nM2e61Pr4qz9ahVMrntEYEjjhaQKBgQC5yILnx3Vpe9wXFjGl5nNUjoOFaw/iapd0\nL8yzbSJLsl2PrYGJtpfyjNc/huSjjs1A2s9PXAKT54ZhrvRR9YZYTW65dww/8Wr+\nsInJXQtR3AG3r0WvUi9dsQ0L/S/dLUmNVDcNYc1ts1lZxTig8hYiyFqZzQOr3yEa\nhQ60S75BQwKBgQDgN7QJwx4VX0G/sJlzj/m9WzxEPU7mh0O8p+iAMgDJu6Mu072x\nDly2TBdB5b/evlr2C14/GqzAAo9TZ2GROsDd32j0RwmImNTQSzuxvdHHdWzjE+Kl\nilK9sn9PwbRKqBaDa8q2cOs/LOjwlIqbBe5zh8dy+h8zEG9MQeGuXm0YgQKBgAj4\n2wGQi2YNukJPKxSk/Xre6xEda4X2udu9lzgvFBHtykDvEytwawQmsxp5TD9t3RG9\nv3dIrUMxUjcTeO8gWV2YV7mTOz83TICCTBUybiKE6nxRdZ8S7ACtVUD3+EDJOB0g\nLQxzZbVfjPgd4y86ocEKRf3ZfczmGLYsKNqiMcz7AoGAA4INmfKcZs4a5rCn1mU5\nCs0DvY4zXOLG/KxiYmT8xmEocW/O/qA9cS4EKDqDTh/b7sPCJIA6V8uOmhCK/Tcm\nxVQhXELwydbRpQ1iuWyikWsvme4GeFI05kr1qi9cT7t+U+Fd8ON/Z7qHJThEy15O\nH81H6tcRin7NCW3WctVBBoM=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-7wqhl@prepinsights-523c5.iam.gserviceaccount.com",
        "client_id": "102722845082635506180",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7wqhl%40prepinsights-523c5.iam.gserviceaccount.com",
        "universe_domain": "googleapis.com"
      }
      
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccountKey),
    });
};

export const getFirebaseAdmin = () => {
    return admin;
};
