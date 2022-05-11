import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAN_kF2yDFvv-9nBWhIsdrxCjpo2RKShME",
    authDomain: "react-authentication-a6eb4.firebaseapp.com",
    projectId: "react-authentication-a6eb4",
    storageBucket: "react-authentication-a6eb4.appspot.com",
    messagingSenderId: "740328225829",
    appId: "1:740328225829:web:6ea9943ee24ba79b31d3cc",
    measurementId: "G-8ZF4W875ZR"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);