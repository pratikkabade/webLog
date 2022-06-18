import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfIlgXLsBxnl8wio_R4K3J7yMPAP4fRdM",
  authDomain: "notes-demoapp.firebaseapp.com",
  projectId: "notes-demoapp",
  storageBucket: "notes-demoapp.appspot.com",
  messagingSenderId: "590614364641",
  appId: "1:590614364641:web:c771a820a55df2b76d52a0",
  measurementId: "G-ZS7JRV3ND2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
