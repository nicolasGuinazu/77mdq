// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8ptlAyv_Sw0xmE4vhTV1PF8kW-lpNHI0",
  authDomain: "mdq-76626.firebaseapp.com",
  projectId: "mdq-76626",
  storageBucket: "mdq-76626.appspot.com",
  messagingSenderId: "368964223641",
  appId: "1:368964223641:web:aea77a9899aaf422112e08"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);