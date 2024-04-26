import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDxT3TRXL-GoxS-ySdJGm-hMMl5zGCClc8",
    authDomain: "dashboard-4c17a.firebaseapp.com",
    projectId: "dashboard-4c17a",
    storageBucket: "dashboard-4c17a.appspot.com",
    messagingSenderId: "804768932662",
    appId: "1:804768932662:web:8ef4517a7129a38a5b0997",
    measurementId: "G-S2Y36GZTS5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

export default firestore
