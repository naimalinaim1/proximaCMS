// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// fire base config
const firebaseConfig = {
  apiKey: "AIzaSyC_LLzHVXLIhvslRzz1UusC89Cg78BXybE",
  authDomain: "fir-auth-ecce.firebaseapp.com",
  projectId: "fir-auth-ecce",
  storageBucket: "fir-auth-ecce.appspot.com",
  messagingSenderId: "15116287670",
  appId: "1:15116287670:web:e134f58419319681fab017",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
