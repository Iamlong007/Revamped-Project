import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDahOwGCYVq3FXQa4P6Bd7qc9jfiCCTbM4",
  authDomain: "vue-project-97514.firebaseapp.com",
  databaseURL: "https://vue-project-97514.firebaseio.com",
  projectId: "vue-project-97514",
  storageBucket: "vue-project-97514.appspot.com",
  messagingSenderId: "134541740920",
  appId: "1:134541740920:web:5ccb80dffc49af0fafd68d",
  measurementId: "G-TVYNXDZ5T6",
};

// Get a Firestore instance
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();
const storage = app.storage();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples

export { db, auth, storage };
// if using Firebase JS SDK < 5.8.0
// db.settings({ timestampsInSnapshots: true });
