import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACmcA3Aa82uy7x0n4g7sCjkvUYSLmACdo",
  authDomain: "mcdonalds-d13d9.firebaseapp.com",
  projectId: "mcdonalds-d13d9",
  storageBucket: "mcdonalds-d13d9.firebasestorage.app",
  messagingSenderId: "326823101955",
  appId: "1:326823101955:web:49aa9c67df8c472a9c3036",
  measurementId: "G-8NX3Y370Z4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
