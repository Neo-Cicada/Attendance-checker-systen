import { initializeApp } from "firebase/app";
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCjSpf3WWsvmoKKj93h25wHIYoWQfePkIk",
  authDomain: "attendance-system-5dad1.firebaseapp.com",
  projectId: "attendance-system-5dad1",
  storageBucket: "attendance-system-5dad1.appspot.com",
  messagingSenderId: "397014051786",
  appId: "1:397014051786:web:8104ee96e07fc1f9993d33"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;