import firebase from 'firebase/app';
import 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG8w7YybywKS1jQBrN0PPa6Y3XRMfwtoE",
  authDomain: "sysbraile.firebaseapp.com",
  projectId: "sysbraile",
  storageBucket: "sysbraile.appspot.com",
  messagingSenderId: "304303299631",
  appId: "1:304303299631:web:c88f612015779bf8b23ada",
};

let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;
