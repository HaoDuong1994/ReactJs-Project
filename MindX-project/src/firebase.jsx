import { initializeApp } from "firebase/app";
import { createContext } from "react";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASukhaP6KpzNWUfKSna79LswpTSQ70mjg",
  authDomain: "productlist-7c67e.firebaseapp.com",
  databaseURL:
    "https://productlist-7c67e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "productlist-7c67e",
  storageBucket: "productlist-7c67e.appspot.com",
  messagingSenderId: "108844229858",
  appId: "1:108844229858:web:8ea0c0abd666771233aabb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FirebaseContext = createContext();
const FirebaseProvider = ({ children }) => {
  const db = getFirestore(app);
  const productsCollection = collection(db, "products");

  return (
    <FirebaseContext.Provider
      value={{
        app,
        productsCollection,
      }}>
      {children}
    </FirebaseContext.Provider>
  );
};
export default FirebaseProvider;
