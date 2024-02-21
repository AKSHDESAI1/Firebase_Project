// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

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

const auth = getAuth();

let loading = document.getElementById("loading");
let content = document.getElementById("content");

const Login_Or_Not = () => {
  content.style.display = "none";
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log("user", user);

      if (location.href != "http://127.0.0.1:5500/public/") {
        window.location.href = "/public";
      } else {
        let anonymous = document.getElementById("anonymous");
        anonymous.style.display = "none";
      }
    } else {
      // User is signed out
      // ...
      console.log("user signed out");
    }

    loading.style.display = "none";
    content.style.display = "block";

    // if (location.href == "http://127.0.0.1:5500/public/") {
    //   let anonymous = document.getElementById("anonymous");
    //   anonymous.style.display = "block";
    //   content.style.display = "none";
    // }
  });
};

Login_Or_Not();
