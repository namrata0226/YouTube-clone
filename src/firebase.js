import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBjs-4kNif9fTBfjAK1pjf2yEVgfRdlXAw",
    authDomain: "clone3-aefb2.firebaseapp.com",
    projectId: "clone3-aefb2",
    storageBucket: "clone3-aefb2.appspot.com",
    messagingSenderId: "267041868987",
    appId: "1:267041868987:web:d139b04761593c2a692d9e"
  };
  firebase.initializeApp(firebaseConfig)
  export default firebase.auth()