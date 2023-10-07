// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd3BuIVXPFNqehHLlF9y76rvzg979pKB4",
  authDomain: "chat-app-react-23.firebaseapp.com",
  projectId: "chat-app-react-23",
  storageBucket: "chat-app-react-23.appspot.com",
  messagingSenderId: "242448832889",
  appId: "1:242448832889:web:b39d555981cbc83f4e77a8",
  measurementId: "G-PK930XZE5B"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);