import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCDuQ4UTiDcgBYOxkQY9FiKlF_VHZ7nvGg",
    authDomain: "react-store-fd61c.firebaseapp.com",
    databaseURL: "https://react-store-fd61c-default-rtdb.firebaseio.com",
    projectId: "react-store-fd61c",
    storageBucket: "react-store-fd61c.appspot.com",
    messagingSenderId: "763916362558",
    appId: "1:763916362558:web:25dcea2efa5646ddec026f",

  };


  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage}