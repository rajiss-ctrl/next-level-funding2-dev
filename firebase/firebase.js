// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR0Up5sYNIEeeVn85LBMyWDvBVST830JI",
  authDomain: "nextlevelfunding-630e6.firebaseapp.com",
  projectId: "nextlevelfunding-630e6",
  storageBucket: "nextlevelfunding-630e6.appspot.com",
  messagingSenderId: "952318283091",
  appId: "1:952318283091:web:8bd6914476eb209ceb25a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)