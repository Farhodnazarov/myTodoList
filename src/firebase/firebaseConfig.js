import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsqxf6eynOtym7o94OIhkgRA0sY2WcZIw",
  authDomain: "todos-8d8f6.firebaseapp.com",
  projectId: "todos-8d8f6",
  storageBucket: "todos-8d8f6.firebasestorage.app",
  messagingSenderId: "538755446310",
  appId: "1:538755446310:web:d255b862b7cc8cb3f258e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// db
export const db = getFirestore(app);

// auth

export const auth = getAuth();
