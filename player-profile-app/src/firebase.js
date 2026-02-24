import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWwei0sDz0rgrerfZeLTX9uJWW3gpSdDI",
  authDomain: "player-profile-be005.firebaseapp.com",
  projectId: "player-profile-be005",
  storageBucket: "player-profile-be005.firebasestorage.app",
  messagingSenderId: "354054486103",
  appId: "1:354054486103:web:b2e05d7e71d32698098b12",
  measurementId: "G-2DF8M6YNQ7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);