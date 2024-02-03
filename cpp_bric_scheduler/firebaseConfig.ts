import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

/* console.log("apikey: ")
console.log(process.env.API_KEY) */

const firebaseConfig = {
  apiKey: "AIzaSyBJDPjwNip7dR4QZLKw6cyMrBZ99XdfdrE",
  authDomain: "cppbricscheduler.firebaseapp.com",
  projectId: "cppbricscheduler",
  storageBucket: "cppbricscheduler.appspot.com",
  messagingSenderId: "643950148261",
  appId: "1:643950148261:web:7f3d0fcfb972f19d46eb4c",
  measurementId: "G-GZJP94E4SL"
}; 

/* var admin = require("firebase-admin");

var serviceAccount = require("./cppbricscheduler-firebase-adminsdk-3tl78-242d0b2e3a.json");

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
 */

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, auth, db };