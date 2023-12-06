// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYMrOp5hfuoiA9uEa45E-1olUHkb4E2xw",
  authDomain: "jewerly-7a07f.firebaseapp.com",
  projectId: "jewerly-7a07f",
  storageBucket: "jewerly-7a07f.appspot.com",
  messagingSenderId: "969643730768",
  appId: "1:969643730768:web:68e1e0bebf4fa1c353ae55",
  measurementId: "G-5WB76M18WC"
};
console.log('aaaa')

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app)
export const  auth = getAuth(app)


