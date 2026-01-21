import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-storage.js";

// Your Firebase config (this is correct and safe)
const firebaseConfig = {
  apiKey: "AIzaSyCTz-6hEYsYob0e-TNiuVYeNJBTjeWkWfk",
  authDomain: "sunshine-client-a176e.firebaseapp.com",
  projectId: "sunshine-client-a176e",
  storageBucket: "sunshine-client-a176e.firebasestorage.app",
  appId: "1:999825746320:web:5606afe6807ac5497aab15"
};

// Initialize Firebase ONCE
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
