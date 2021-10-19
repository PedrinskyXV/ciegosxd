// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG8w7YybywKS1jQBrN0PPa6Y3XRMfwtoE",
  authDomain: "sysbraile.firebaseapp.com",
  projectId: "sysbraile",
  storageBucket: "sysbraile.appspot.com",
  messagingSenderId: "304303299631",
  appId: "1:304303299631:web:c88f612015779bf8b23ada",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db
