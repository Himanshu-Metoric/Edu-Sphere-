// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4zb0DqjB1q7MuH1FbgN3qJRQd5c5Vce0",
  authDomain: "authentication-5993c.firebaseapp.com",
  projectId: "authentication-5993c",
  storageBucket: "authentication-5993c.firebasestorage.app",
  messagingSenderId: "851761389921",
  appId: "1:851761389921:web:c3938a325da2d7dcc4e520"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export const Files_Upload=getStorage(app);
export default app;