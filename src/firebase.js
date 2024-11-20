// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAk-FZ26DMZ8WOp65CmPl2QWMsAyRMbujU",
  authDomain: "clone-b8eae.firebaseapp.com",
  projectId: "clone-b8eae",
  storageBucket: "clone-b8eae.firebasestorage.app",
  messagingSenderId: "580932164895",
  appId: "1:580932164895:web:e688edb4bcf68b776b642a",
  measurementId: "G-VT40GQ2V1R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
