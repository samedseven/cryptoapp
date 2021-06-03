// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs

import firebase from "firebase/app";

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/database");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrWfVp-2h6-x2JPzKGvloPnlElKucbrcI",
  authDomain: "cryptoapp-6ea02.firebaseapp.com",
  databaseURL: "https://cryptoapp-6ea02-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cryptoapp-6ea02",
  storageBucket: "cryptoapp-6ea02.appspot.com",
  messagingSenderId: "263534999879",
  appId: "1:263534999879:web:0b8a7ed28ca774fdd6f462"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebaseApp.database();

export { firebaseAuth, firebaseDb }
