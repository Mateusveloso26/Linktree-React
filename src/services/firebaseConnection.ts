import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgP7sUnQ7VsdbJ-2W8eMOPNxJ55jHyBHQ",
  authDomain: "reactlinks-d6c9c.firebaseapp.com",
  projectId: "reactlinks-d6c9c",
  storageBucket: "reactlinks-d6c9c.appspot.com",
  messagingSenderId: "533152602001",
  appId: "1:533152602001:web:ab7f737fee6a1ad7266c30",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
