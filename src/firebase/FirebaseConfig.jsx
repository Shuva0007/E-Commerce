// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDW-4nYLLAdPUjkDRQ1ddo8Yxp_It7v7OE",
  authDomain: "ecommerce-62e0b.firebaseapp.com",
  projectId: "ecommerce-62e0b",
  storageBucket: "ecommerce-62e0b.appspot.com",
  messagingSenderId: "394828831515",
  appId: "1:394828831515:web:6ccb007fe7362a32d811be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;