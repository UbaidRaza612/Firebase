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
let result = document.querySelector("#result");
// Sign Up
if (location.pathname === "/html/signUp.html") {
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
        result.innerHTML = error.code;
        result.style.color = "red";
      });
  });

  // Login
} else if (location.pathname === "/html/login.html") {
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
        result.innerHTML = error.code;
        result.style.color = "red";
      });
  });
} else if (location.pathname === "/html/index.html") {
  const logOut = document.getElementById("logOut");

  logOut.addEventListener("click", () => {
    console.log(logOut);
    signOut(auth)
      .then(() => {
        location.replace("login.html");
      })
      .catch((error) => {});
  });
}
