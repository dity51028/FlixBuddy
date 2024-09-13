// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRPU-TY2Mq1xlelc7cF08_KFGP0rOfnRA",
  authDomain: "flixbuddy-69801.firebaseapp.com",
  projectId: "flixbuddy-69801",
  storageBucket: "flixbuddy-69801.appspot.com",
  messagingSenderId: "783835013462",
  appId: "1:783835013462:web:37d7b5f853ea1617e4f6f7",
  measurementId: "G-PXF0XN47RB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  
export const auth = getAuth();