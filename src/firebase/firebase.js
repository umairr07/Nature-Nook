// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8HNJ1z9ZU_1oRZ02AquaHVKtpMcEMlAE",
    authDomain: "nature-nook-88177.firebaseapp.com",
    projectId: "nature-nook-88177",
    storageBucket: "nature-nook-88177.firebasestorage.app",
    messagingSenderId: "455036438508",
    appId: "1:455036438508:web:b173f2f5f8dcfcee5222c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore(app)

export default app