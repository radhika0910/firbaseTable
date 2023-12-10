import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6iwjkKZiXBZ6u_E9nP1IjXcKD5WhODy0",
    authDomain: "jaladhyayn.firebaseapp.com",
    databaseURL: "https://jaladhyayn-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "jaladhyayn",
    storageBucket: "jaladhyayn.appspot.com",
    messagingSenderId: "881212351663",
    appId: "1:881212351663:web:395ef5ad96a94cbfa3205a",
    measurementId: "G-7NNHD2KZW0"
  };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  export { database };
