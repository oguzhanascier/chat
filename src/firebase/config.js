import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDFVqNoH3zchuEHkAbdqdVpgQLuheBE-CQ",

    authDomain: "blog-app-7cc8a.firebaseapp.com",

    databaseURL: "https://blog-app-7cc8a-default-rtdb.firebaseio.com",

    projectId: "blog-app-7cc8a",

    storageBucket: "blog-app-7cc8a.appspot.com",

    messagingSenderId: "291121184274",

    appId: "1:291121184274:web:25a9b801728438ecd122cb",

    measurementId: "G-THQ5DM78F7",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const tarih = firebase.firestore.FieldValue.serverTimestamp;
const auth = firebase.auth();

export { db, tarih, auth };
