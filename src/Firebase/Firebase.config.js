// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMIw659NKZamd0EDng8q7e38SCib5A0k4",
  authDomain: "task-management-system-8c466.firebaseapp.com",
  projectId: "task-management-system-8c466",
  storageBucket: "task-management-system-8c466.appspot.com",
  messagingSenderId: "437867835140",
  appId: "1:437867835140:web:e0288d723352a969542a51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;