const functions = require('firebase-functions');
// const fetch = require('fetch');
const axios = require('axios');
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });




exports.fetchBmsPage = functions.https.onRequest((request, response) => {
	response.send("Hello from Firebase!");
});