// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhvD_3nPGhNRvyTs7jo0DII02r4IGjIrM",
  authDomain: "doubt-share-fc989.firebaseapp.com",
  projectId: "doubt-share-fc989",
  storageBucket: "doubt-share-fc989.appspot.com",
  messagingSenderId: "324241713374",
  appId: "1:324241713374:web:89492de027732735c1ba4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
