import { initializeApp } from "firebase/app";
// Step 2
import  {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyArrV8-ICrfu24FksBhsu4eBJsgQkraZ58",
  authDomain: "chat-app-edd4b.firebaseapp.com",
  projectId: "chat-app-edd4b",
  storageBucket: "chat-app-edd4b.appspot.com",
  messagingSenderId: "26231544539",
  appId: "1:26231544539:web:692c2d7c38a6405cf38afe"
};

// Initialize Firebase
// Step 1
export const app = initializeApp(firebaseConfig);
// Step 2
export const auth = getAuth();