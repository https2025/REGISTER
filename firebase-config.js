// Ganti dengan data dari Firebase project kamu
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyANnAy7bMJ-vWDe_hl-D1rfeYubOfOiS0E",
  authDomain: "gamestore-1.firebaseapp.com",
  projectId: "gamestore-1",
  appId: "1:873394493857:web:6ea6fafb13332c55ead3e0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANnAy7bMJ-vWDe_hl-D1rfeYubOfOiS0E",
  authDomain: "gamestore-1.firebaseapp.com",
  projectId: "gamestore-1",
  storageBucket: "gamestore-1.firebasestorage.app",
  messagingSenderId: "873394493857",
  appId: "1:873394493857:web:6ea6fafb13332c55ead3e0",
  measurementId: "G-3S4Z4HSNPV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/
