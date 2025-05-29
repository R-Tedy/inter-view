import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC2286sL24V7_q5JxWBEj-5tqVliHZyo3A",
  authDomain: "interview-49e8d.firebaseapp.com",
  projectId: "interview-49e8d",
  storageBucket: "interview-49e8d.firebasestorage.app",
  messagingSenderId: "183696254942",
  appId: "1:183696254942:web:41f55fb6b378598f3a1f4f",
  measurementId: "G-Z4QCQEHBHK"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);