import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyASMbYX5jDUOJPwwggTNFKV1Gq7YPRUCXI",
  authDomain: "food-97faa.firebaseapp.com",
  databaseURL: "https://food-97faa-default-rtdb.firebaseio.com",
  projectId: "food-97faa",
  storageBucket: "food-97faa.appspot.com",
  messagingSenderId: "222860360310",
  appId: "1:222860360310:web:e570b7f596a39bcd857d57",
  
};

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage}