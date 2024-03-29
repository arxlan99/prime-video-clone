import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "prime-video-7edd6.firebaseapp.com",
  projectId: "prime-video-7edd6",
  storageBucket: "prime-video-7edd6.appspot.com",
  messagingSenderId: "145193688929",
  appId: "1:145193688929:web:460aae0f55fa77121c2f20",
  measurementId: "G-LSZKY92PLR",
};

initializeApp(firebaseConfig);

const storage = getStorage();
export default storage;
