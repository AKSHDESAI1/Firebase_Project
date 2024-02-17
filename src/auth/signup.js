import { app } from "../../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

let signupForm = document.querySelector("#signup");

const auth = getAuth();

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = signupForm.email.value;
  let password = signupForm.password.value;

  console.log(email, password);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log("error", error.message);
    });

  console.log("Signup Form Submitted Successfully");
});
