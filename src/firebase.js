// import firebase from "firebase"
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = ({
//     apiKey: "AIzaSyBb04rAJUR0OTAKH71MVGDL5afjpJGT_T4",
//     authDomain: "clone-279ec.firebaseapp.com",
//     projectId: "clone-279ec",
//     storageBucket: "clone-279ec.appspot.com",
//     messagingSenderId: "307545212323",
//     appId: "1:307545212323:web:7bb71b005d044b47b7c616",
//     measurementId: "G-ETRZMKBT85"
//   });

//   // const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const firebaseApp = firebase.initializeApp(firebaseConfig)

//   const db = firebaseApp.firestore();
//   const auth = firebase.auth();
  
//   export { db, auth }
  
  const firebaseApp = initializeApp({     apiKey: "AIzaSyBb04rAJUR0OTAKH71MVGDL5afjpJGT_T4",
  authDomain: "clone-279ec.firebaseapp.com",
  projectId: "clone-279ec",
  storageBucket: "clone-279ec.appspot.com",
  messagingSenderId: "307545212323",
  appId: "1:307545212323:web:7bb71b005d044b47b7c616",
  measurementId: "G-ETRZMKBT85" });
const auth = getAuth();
onAuthStateChanged(auth, user => { console.log(user); });

export {auth}