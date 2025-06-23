// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth ,GoogleAuthProvider,} from "firebase/auth";
import "../Components/Login"
// import { use } from "react";

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
export const auth = getAuth(app);
auth.languageCode="en";
export const provider = new GoogleAuthProvider()
// const analytics = getAnalytics(app);



 


