// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBEV9n9XjgKc_jvoHmJwLiWbAyLKjnOf0I",
  authDomain: "battleground-uta.firebaseapp.com",
  projectId: "battleground-uta",
  storageBucket: "battleground-uta.appspot.com",
  messagingSenderId: "302942668119",
  appId: "1:302942668119:web:1586af14d464f713f86a12",
  measurementId: "G-W4Y3GM13HW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, analytics };