const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// exports.createVendor = functions.https.onRequest((req, res) => {
//   let vendor = req.body
//   admin.database().ref('/vendors').push({vendor: vendor}).then(snapshot => {
//     res.redirect(303, snapshot.ref);
//   })
// })

// admin.database().ref('/vendors').push({vendor: vendor}).then(snapshot => {
//   res.redirect(303, snapshot.ref);
// })


exports.createVendor = functions.https.onRequest((req, res) => {
  let vendor = req.body.vendor;

  if (req.method !== 'POST') {
    res.status(403).send('Forbidden!');
  } else {
    admin.database().ref('/vendors').push({vendor: vendor}).then(snapshot => {
      // res.redirect(303, snapshot.ref);
      res.status(200);
      res.send(snapshot.ref);
    })
  }
  // [END sendError]

  // [START usingMiddleware]
  // Enable CORS using the `cors` express middleware.
  // cors(req, res, () => {
  // // [END usingMiddleware]
  //   // Reading date format from URL query parameter.
  //   // [START readQueryParam]
  //   let format = req.query.format;
  //   // [END readQueryParam]
  //   // Reading date format from request body query parameter
  //   if (!format) {
  //     // [START readBodyParam]
  //     format = req.body.format;
  //     // [END readBodyParam]
  //   }
  //   // [START sendResponse]
  //   const formattedDate = moment().format(format);
  //   console.log('Sending Formatted date:', formattedDate);
  //   res.status(200).send(formattedDate);
  //   // [END sendResponse]
  // });
});
// [END all]











// // Take the text parameter passed to this HTTP endpoint and insert it into the
// // Realtime Database under the path /messages/:pushId/original
// exports.addMessage = functions.https.onRequest((req, res) => {
//   // Grab the text parameter.
//   const original = req.query.text;
//   // Push it into the Realtime Database then send a response
//   admin.database().ref('/messages').push({original: original}).then(snapshot => {
//     // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
//     res.redirect(303, snapshot.ref);
//   });
// });
//
// // Listens for new messages added to /messages/:pushId/original and creates an
// // uppercase version of the message to /messages/:pushId/uppercase
// exports.makeUppercase = functions.database.ref('/messages/{pushId}/original')
//     .onWrite(event => {
//       // Grab the current value of what was written to the Realtime Database.
//       const original = event.data.val();
//       console.log('Uppercasing', event.params.pushId, original);
//       const uppercase = original.toUpperCase();
//       // You must return a Promise when performing asynchronous tasks inside a Functions such as
//       // writing to the Firebase Realtime Database.
//       // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
//       return event.data.ref.parent.child('uppercase').set(uppercase);
//     });



// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// })
