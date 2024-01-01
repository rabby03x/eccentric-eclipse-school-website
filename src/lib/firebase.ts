// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNrimy1FLYv1wNsQYnGPlEKcg9JmNWu9g",
  authDomain: "sms1991es.firebaseapp.com",
  databaseURL: "https://sms1991es-default-rtdb.firebaseio.com",
  projectId: "sms1991es",
  storageBucket: "sms1991es.appspot.com",
  messagingSenderId: "452109586904",
  appId: "1:452109586904:web:b46230da70c47d1e1962ad",
  measurementId: "G-4LN5M2FQV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app, analytics, auth};