import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFoYFpPtwujuMoLOMwwIv3ydb-fku5dDI",
  authDomain: "inverapp-v2.firebaseapp.com",
  projectId: "inverapp-v2",
  storageBucket: "inverapp-v2.appspot.com",
  messagingSenderId: "302265352014",
  appId: "1:302265352014:web:65aa26b641be8a2046e81f",
}; 

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
