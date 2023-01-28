import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, getAuth, signOut, sendPasswordResetEmail} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyA0D67FW5VdE7BUKRPvTx4ezBCG7d2JlF8",
    authDomain: "fir-auth-12499.firebaseapp.com",
    projectId: "fir-auth-12499",
    storageBucket: "fir-auth-12499.appspot.com",
    messagingSenderId: "911979622028",
    appId: "1:911979622028:web:607177d36fdea9e8cb15a9",
    measurementId: "G-QRQWJF1Y4C"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const auth = getAuth()

export const signup=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

export const login=(email,password)=>{
    return signInWithEmailAndPassword
    (auth,email,password)
}

export const resetpassword=(email)=>{
    return sendPasswordResetEmail(auth,email)
}

export const logout=(email)=>{
    return signOut(auth)
}