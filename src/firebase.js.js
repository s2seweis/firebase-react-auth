// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCidd0wKykBdfoeuDrX9Mlxw52cpkuWa7Y",
  authDomain: "sw-react-auth.firebaseapp.com",
  projectId: "sw-react-auth",
  storageBucket: "sw-react-auth.appspot.com",
  messagingSenderId: "673080515827",
  appId: "1:673080515827:web:fd576f130049697c6d6b86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;