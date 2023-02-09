import { initializeApp } from "firebase/app";
import dotenv from "dotenv";

dotenv.config();

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "todo-3dadf.firebaseapp.com",
  projectId: "todo-3dadf",
  storageBucket: "todo-3dadf.appspot.com",
  messagingSenderId: "1007776576921",
  appId: "1:1007776576921:web:5c65f2b3992e407f09cf08",
  measurementId: "G-G2454HN30N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
