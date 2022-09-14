import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
 
// Initialize Firebase
const app = initializeApp ({
  apiKey: "AIzaSyB1PFhA3zC8RWnuI2-JrpGsFx8qAht9VqI",
  authDomain: "fir-upload-64088.firebaseapp.com",
  projectId: "fir-upload-64088",
  storageBucket: "fir-upload-64088.appspot.com",
  messagingSenderId: "839493914868",
  appId: "1:839493914868:web:4d2091788129bc9445cea1"
});
 
// Firebase storage reference
export const storage = getStorage(app);