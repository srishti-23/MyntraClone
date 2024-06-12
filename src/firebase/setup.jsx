// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4oHItlaGB4WcitpO-JXOSn4PPcpIYPy8",
  authDomain: "myntra-clone-1ec1f.firebaseapp.com",
  projectId: "myntra-clone-1ec1f",
  storageBucket: "myntra-clone-1ec1f.appspot.com",
  messagingSenderId: "406429995341",
  appId: "1:406429995341:web:06a8e29d586d04de36e704"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);