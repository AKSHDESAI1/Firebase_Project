// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEACFWjsG4SSf4Cdz6WqOwIi8HOO14Yoo",
  authDomain: "full-project-52831.firebaseapp.com",
  projectId: "full-project-52831",
  storageBucket: "full-project-52831.appspot.com",
  messagingSenderId: "401425922412",
  appId: "1:401425922412:web:30cf5ad70ccb96a5189b49",
  measurementId: "G-YE0DX9WJCE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
