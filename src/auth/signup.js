import { app } from "../../firebaseConfig";
import obj, { toaster } from "../../public/dist/toaster";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

let signupForm = document.querySelector("#signup");

const auth = getAuth();

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = signupForm.email.value;
  let password = signupForm.password.value;

  console.log("email", email, "password", password);

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Signin form  success!");
      // ...

      toaster(obj.success, "Successfully Signed in");

      setTimeout(() => {
        window.location.href = "/";
      }, 6500);
    })
    .catch((error) => {
      let err = document.getElementById("error");

      const errorCode = error.code;
      const errorMessage = error.message;

      toaster(obj.error, error.message);
    });
});
