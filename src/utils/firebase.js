// Import Firebase App (required for initializing Firebase project)
import { initializeApp } from "firebase/app";
// Import Firestore (required for database features)
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration (replace with your actual config)
const firebaseConfig = {
    apiKey: "AIzaSyDHZQu2TnzTdLzWBB-i2gl94Iz6V6qKNfc",
    authDomain: "react-contact-form-9e778.firebaseapp.com",
    projectId: "react-contact-form-9e778",
    storageBucket: "react-contact-form-9e778.appspot.com",
    messagingSenderId: "962325250925",
    appId: "1:962325250925:web:8215dde16dc297bb85d064"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a Firestore instance
const db = getFirestore(app);

// Export Firestore instance
export { db };
