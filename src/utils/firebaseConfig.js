// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB24vG9HFjTxHPFywkXm19PJQq3A29d3PQ",
  authDomain: "showclass-producciones.firebaseapp.com",
  projectId: "showclass-producciones",
  storageBucket: "showclass-producciones.appspot.com",
  messagingSenderId: "616406797814",
  appId: "1:616406797814:web:7d0b28df89a7df4c860bd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const productsCollection = collection(db, 'products')