import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { getFirestore, collection, addDoc , getDocs} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDEjcCB86q4nl6ltcvz8lqo12WvInEkQF0",
  authDomain: "agro-firebase-7164a.firebaseapp.com",
  projectId: "agro-firebase-7164a",
  storageBucket: "agro-firebase-7164a.appspot.com",
  messagingSenderId: "557744060043",
  appId: "1:557744060043:web:a6305a8fc8994bb11c068e",
  measurementId: "G-MVKRV68Q17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Configure Firestore
const firestore = getFirestore(app);
export { firestore, collection, addDoc, getDocs };

// Configure Google provider
export const googleProvider = new GoogleAuthProvider();

// Configure Facebook provider
export const facebookProvider = new FacebookAuthProvider();
