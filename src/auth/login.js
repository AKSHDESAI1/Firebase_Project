import { app } from "../../firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import {
  GoogleAuthProvider,
  signInWithPopup,
  getRedirectResult,
} from "firebase/auth";

const auth = getAuth();

let login = document.getElementById("login");

login.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = login.email.value;
  let password = login.password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      alert("Successfully Logged In.");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(`Error: ${errorMessage}`);
    });
});

// Login With Google Login FUNCTION
let loginGoogle = document.querySelector(".loginGoogle");

const provider = new GoogleAuthProvider();

loginGoogle.addEventListener("click", () => {
  console.log("Login With Google Clicked");

  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      console.log("error", error.message);
      // ...
    });

  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});

// Login with Twitter Login Function
let loginTwitter = document.querySelector(".loginTwitter");
loginTwitter.addEventListener("click", () => {
  console.log("Login with Twitter Clicked");
});

let loginGithub = document.querySelector(".loginGithub");
loginGithub.addEventListener("click", () => {
  console.log("login with github clicked");
});
