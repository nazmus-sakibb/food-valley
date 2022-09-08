import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCwVjLdhOHKZwnH5iTtIS8HFgfydFEsBJY",
    authDomain: "foodvalleyapp.firebaseapp.com",
    databaseURL: "https://foodvalleyapp-default-rtdb.firebaseio.com",
    projectId: "foodvalleyapp",
    storageBucket: "foodvalleyapp.appspot.com",
    messagingSenderId: "625662342283",
    appId: "1:625662342283:web:e86aa624918817cdac108e"
};


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);


export { app, firestore, storage };