const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
exports.sendPushNotification = functions.database
  .ref("users/{userID}")
  .onCreate(event => {
      console.log('event',event)
    const data = event._data;
    payload = {
      notification: {
        title: "Welcome",
        body: "thank for installed our app",
      },
    };
    admin
      .messaging()
      .sendToDevice(data.notification_token, payload)
      .then(function(response) {
        console.log("Notification sent successfully:", response);
      })
      .catch(function(error) {
        console.log("Notification sent failed:", error);
      });
  });