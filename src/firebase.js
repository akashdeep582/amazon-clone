import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp({

  apiKey: "AIzaSyDBWPEJ4Bj22vn6B3wHVoSxPQqrD5Anovs",
  authDomain: "clone-f4934.firebaseapp.com",
  projectId: "clone-f4934",
  storageBucket: "clone-f4934.appspot.com",
  messagingSenderId: "527942762549",
  appId: "1:527942762549:web:1c7780a18f72d838c5b17c",
  measurementId: "${config.measurementId}"

});


const db = firebaseApp.firestore();
const auth = firebase.auth();

export{db,auth};