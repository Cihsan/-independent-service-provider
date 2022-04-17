// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc0Kr_9RaUjDQjVA5US4oVMFZVZsEHUv4",
  authDomain: "fitness-park-508a8.firebaseapp.com",
  projectId: "fitness-park-508a8",
  storageBucket: "fitness-park-508a8.appspot.com",
  messagingSenderId: "204437086749",
  appId: "1:204437086749:web:0ad19d5105d25c15dc9cf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth
