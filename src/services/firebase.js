// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLzeYbwMl32tFUV0ocfo4Lj7_m17v619I",
    authDomain: "scotchs.firebaseapp.com",
    projectId: "scotchs",
    storageBucket: "scotchs.appspot.com",
    messagingSenderId: "849295565752",
    appId: "1:849295565752:web:8420f13398c7a521bf654d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const firestoreDb = getFirestore(app);