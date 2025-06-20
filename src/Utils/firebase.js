// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth ,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import "../Components/Login"
import { use } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBhyyZ29zbTx6lfaDMwoKCiewFCp6TDGEw",
  authDomain: "netflixgpt2-666c1.firebaseapp.com",
  projectId: "netflixgpt2-666c1",
  storageBucket: "netflixgpt2-666c1.firebasestorage.app",
  messagingSenderId: "923196705316",
  appId: "1:923196705316:web:6a2a6d7a2f91a888db26b1",
  measurementId: "G-2BPVM165YS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode="en";
const provider = new GoogleAuthProvider()
// const analytics = getAnalytics(app);



 export const googleCheck =(e)=>{
  e.preventDefault()
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    alert(credential,user)
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode,errorMessage)
  })
  }