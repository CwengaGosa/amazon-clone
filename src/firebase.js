import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDY-191d0wf2U_DjH8pFZsFir8rUe7Qu2w",
    authDomain: "zaio--clone-b94d0.firebaseapp.com",
    projectId: "zaio--clone-b94d0",
    storageBucket: "zaio--clone-b94d0.appspot.com",
    messagingSenderId: "295861719211",
    appId: "1:295861719211:web:c4ef5ceb22cc714abf27ee",
    measurementId: "G-6X7122H1R7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

