// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJDPjwNip7dR4QZLKw6cyMrBZ99XdfdrE",
  authDomain: "cppbricscheduler.firebaseapp.com",
  projectId: "cppbricscheduler",
  storageBucket: "cppbricscheduler.appspot.com",
  messagingSenderId: "643950148261",
  appId: "1:643950148261:web:7f3d0fcfb972f19d46eb4c",
  measurementId: "G-GZJP94E4SL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
//const analytics = getAnalytics(app);

export { app, auth, db };