// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import {getFirestore} from 'firebase/firestore/lite'
// import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4UD9zjw2p5F1vjfu7bGp3648-Q16pjaQ",
  authDomain: "flightbookingapp-4db6d.firebaseapp.com",
  projectId: "flightbookingapp-4db6d",
  storageBucket: "flightbookingapp-4db6d.appspot.com",
  messagingSenderId: "795398643661",
  appId: "1:795398643661:web:afdba6e6cb6e2fd24d6e84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app);
// export const db = getFirestore(app)
// export const storage = getStorage(app)