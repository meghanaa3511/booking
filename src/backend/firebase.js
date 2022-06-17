// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8qIA7i7Hiu5V7iRDbvrNMF1OnuBDC5P0",
  authDomain: "booking-da25e.firebaseapp.com",
  databaseURL: "https://booking-da25e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "booking-da25e",
  storageBucket: "booking-da25e.appspot.com",
  messagingSenderId: "202045696663",
  appId: "1:202045696663:web:53fe8fca3001c2c1f5d7d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDatabase = getDatabase(app);