import {
  createUserWithEmailAndPassword,
  auth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "./firebase.js";

let email = document.querySelector("#email");
let password = document.querySelector("#password");
const signUp = document.querySelector(".sign-up");
const login = document.querySelector(".login");
let google = document.querySelector("#google");

// Sign Up
if (signUp) {
  let btn = document.querySelector("#submit");
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        location.replace("./login.html");
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // Google Login
  google.addEventListener("click", () => {
    const provider = new GoogleAuthProvider();
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
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  });

  // Login
} else if (login) {
  const loginBtn = document.getElementById("login");
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        location.replace("index.html");

        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  });
} else {
  const logOut = document.getElementById("logOut");

  logOut.addEventListener("click", () => {
    signOut(auth)
      .then(() => {
        location.replace("login.html");
      })
      .catch((error) => {
      });
  });
}
