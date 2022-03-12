// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCvsz3EIYu2G6mrdUPnZKG3rEc1HwDBOIo",
    authDomain: "web-list-f1ed1.firebaseapp.com",
    databaseURL: "https://web-list-f1ed1-default-rtdb.firebaseio.com",
    projectId: "web-list-f1ed1",
    storageBucket: "web-list-f1ed1.appspot.com",
    messagingSenderId: "777677007332",
    appId: "1:777677007332:web:51bdd67f5f5973ec053ff1",
    measurementId: "G-ZKE3N07YWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);