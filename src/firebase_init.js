// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDyyTCeCixRnP4GoN7_O9s6P7SCugV4OM",
  authDomain: "electrical-solution-e0837.firebaseapp.com",
  projectId: "electrical-solution-e0837",
  storageBucket: "electrical-solution-e0837.appspot.com",
  messagingSenderId: "593635801438",
  appId: "1:593635801438:web:608f3b18852c1c27c577cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth
