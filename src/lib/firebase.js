// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvNdhbT6MtKxuBNepI7Du8wxoaxiWumwQ",
  authDomain: "shloki-8d195.firebaseapp.com",
  projectId: "shloki-8d195",
  storageBucket: "shloki-8d195.firebasestorage.app",
  messagingSenderId: "711703561397",
  appId: "1:711703561397:web:414190e4a480b2fb616afc",
  measurementId: "G-WM9R5233PF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);