import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAurp5e-R_bbrsiMrrILUnpK7CFFTDT7qg",
  authDomain: "swapify-54f86.firebaseapp.com",
  projectId: "swapify-54f86",
  storageBucket: "swapify-54f86.firebasestorage.app",
  messagingSenderId: "801508865736",
  appId: "1:801508865736:web:3599f47e52df3fe5d517fd",
  measurementId: "G-F8Y4MY6BN3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
