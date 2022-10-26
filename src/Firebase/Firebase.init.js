// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// apiKey: "AIzaSyCT6vYWX0ATi2Ju0sA6AiNO6pwSCOm6POI",
// authDomain: "e-learning-a10.firebaseapp.com",
// projectId: "e-learning-a10",
// storageBucket: "e-learning-a10.appspot.com",
// messagingSenderId: "303880109919",
// appId: "1:303880109919:web:03e54e81864d231559c0ea",
