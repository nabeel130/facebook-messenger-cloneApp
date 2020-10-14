import firebase from "firebase";

const firebaseApp =firebae.initializeApp({

  apiKey: "AIzaSyAaW-b1iGrCSIvKHWXe5ZcYQPV7WKeXcKI",
  authDomain: "facebook-messenger-clone-3fec4.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-3fec4.firebaseio.com",
  projectId: "facebook-messenger-clone-3fec4",
  storageBucket: "facebook-messenger-clone-3fec4.appspot.com",
  messagingSenderId: "206390631842",
  appId: "1:206390631842:web:e30e07268597aa5b6026fb",
  measurementId: "G-RT5JCCMSVH"

});

const db = firebase.firestore();

export default db;