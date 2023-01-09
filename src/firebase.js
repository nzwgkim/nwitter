// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCmbKLL6ONeEAOZEbhK1AsJKt3OO_pCAhE",
//   authDomain: "nwitter-531c5.firebaseapp.com",
//   projectId: "nwitter-531c5",
//   storageBucket: "nwitter-531c5.appspot.com",
//   messagingSenderId: "179057114226",
//   appId: "1:179057114226:web:923aeacdb7f519883396eb",
// };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
