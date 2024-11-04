// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-woQARCoLFlJCaRZmbRVSoPfiXQkJTyk",
  authDomain: "fir-demo-e3165.firebaseapp.com",
  projectId: "fir-demo-e3165",
  storageBucket: "fir-demo-e3165.appspot.com",
  messagingSenderId: "959958593976",
  appId: "1:959958593976:web:ef19eb11e29a1281f41f4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db = getFirestore(app);