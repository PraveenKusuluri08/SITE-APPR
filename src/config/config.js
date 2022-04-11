import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrP-1rk6_gbWmG5kl734gwQTZu6SPCM6Y",
  authDomain: "sasi-appr.firebaseapp.com",
  databaseURL: "https://sasi-appr-default-rtdb.firebaseio.com",
  projectId: "sasi-appr",
  storageBucket: "sasi-appr.appspot.com",
  messagingSenderId: "654384973370",
  appId: "1:654384973370:web:c6e972ea1d0ab9a9a89703",
  measurementId: "G-419YJ9PC0S",
};

const app = firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, app as default };
