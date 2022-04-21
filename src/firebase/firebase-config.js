import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAb6_pTph9MPYZ6SIO7au99gw-erx3HVSI",
    authDomain: "react-journal-app-662c9.firebaseapp.com",
    projectId: "react-journal-app-662c9",
    storageBucket: "react-journal-app-662c9.appspot.com",
    messagingSenderId: "426253837170",
    appId: "1:426253837170:web:699aed2cce98b51b1c33eb"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuhtProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuhtProvider,
    firebase
}