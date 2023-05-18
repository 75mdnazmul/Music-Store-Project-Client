// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1RYaoNnsViXTeAhse_MtUJx-IeV_oi08",
  authDomain: "music-store-project-a83fd.firebaseapp.com",
  projectId: "music-store-project-a83fd",
  storageBucket: "music-store-project-a83fd.appspot.com",
  messagingSenderId: "346880073701",
  appId: "1:346880073701:web:b6625baac06a61f968590c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app