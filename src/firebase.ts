// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBklpvkRLA0stcgRixPpxRtCi2Q7_1bG3Q",
  authDomain: "office-app-fcd24.firebaseapp.com",
  projectId: "office-app-fcd24",
  storageBucket: "office-app-fcd24.appspot.com",
  messagingSenderId: "884084409546",
  appId: "1:884084409546:web:4d61d58df0dde721dc2033",
  measurementId: "G-9FE9RB8TBL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const db = getFirestore();

export default app;
