// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyB5Mi74-UVqsaKl3BspmU6B7ks_H31pPeQ",
  authDomain: "form-8e66d.firebaseapp.com",
  projectId: "form-8e66d",
  storageBucket: "form-8e66d.appspot.com",
  messagingSenderId: "66665405701",
  appId: "1:66665405701:web:73ebe06ff6ffe2b5f26b6c",
  measurementId: "G-1SSYBJ050G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
};
