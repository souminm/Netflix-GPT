import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTX6EJNO4wg_YWpnhTo93wEPj1c_is5bk",
  authDomain: "netflixgpt-aefa7.firebaseapp.com",
  projectId: "netflixgpt-aefa7",
  storageBucket: "netflixgpt-aefa7.appspot.com",
  messagingSenderId: "932724086322",
  appId: "1:932724086322:web:2df9d3c4ef7ef712284e2b",
  measurementId: "G-VT95QLZH74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
