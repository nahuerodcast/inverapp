import firebase from "firebase/compat/app"
import "firebase/compat/auth"

export const app = firebase.initializeApp({
    "projectId": "inverapp-v2",
    "appId": "1:302265352014:web:65aa26b641be8a2046e81f",
    "storageBucket": "inverapp-v2.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyAFoYFpPtwujuMoLOMwwIv3ydb-fku5dDI",
    "authDomain": "inverapp-v2.firebaseapp.com",
    "messagingSenderId": "302265352014"
  });