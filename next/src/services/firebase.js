// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJt5yYcrMVBAYDupoJ_w5ASMqeVCSPIxk",
  authDomain: "nextauth-16419.firebaseapp.com",
  projectId: "nextauth-16419",
  storageBucket: "nextauth-16419.firebasestorage.app",
  messagingSenderId: "394219091583",
  appId: "1:394219091583:web:54558d5b54b9c473e1314a",
  measurementId: "G-98TSGHCLH9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
