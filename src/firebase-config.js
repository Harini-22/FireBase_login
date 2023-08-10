import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyDrY9UjqwaWSTHMqdF6-kpcpRi5HufPhVw",

  authDomain: "fir-app-8350f.firebaseapp.com",

  projectId: "fir-app-8350f",

  storageBucket: "fir-app-8350f.appspot.com",

  messagingSenderId: "841975376828",

  appId: "1:841975376828:web:c16a1cddfa6007631919b9",

  measurementId: "G-BX91DJ00GW"

};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
