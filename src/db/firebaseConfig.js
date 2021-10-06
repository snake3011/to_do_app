import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzzvQ_yGjGArM7K364OElxs7GxF4PScVM",
  authDomain: "to-do-app-678b3.firebaseapp.com",
  databaseURL: "https://to-do-app-678b3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "to-do-app-678b3",
  storageBucket: "to-do-app-678b3.appspot.com",
  messagingSenderId: "147694814016",
  appId: "1:147694814016:web:5f743d8e81a985e3c670a5"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;