import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZBD-OM1q6BkVk-34EBCoPat5iWgdmkXA",
  authDomain: "whatsappclone-c5b7b.firebaseapp.com",
  projectId: "whatsappclone-c5b7b",
  storageBucket: "whatsappclone-c5b7b.appspot.com",
  messagingSenderId: "526226771983",
  appId: "1:526226771983:web:e4f9d156c5e9b094de937a",
  measurementId: "G-LXWNKQ31C4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
export default app;
