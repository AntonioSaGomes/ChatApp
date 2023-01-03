import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByA0qiXSqDij8YyIeObBs4Bk141ADFcpk",
  authDomain: "chatapp-7770f.firebaseapp.com",
  projectId: "chatapp-7770f",
  storageBucket: "chatapp-7770f.appspot.com",
  messagingSenderId: "427830416889",
  appId: "1:427830416889:web:95ff441a7160ae9b511928",
  measurementId: "G-PPSTVQPNC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

