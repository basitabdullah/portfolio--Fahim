import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyC-l5hjxBzyh-CYOT1yzO2o1545VRIRnVc",
  authDomain: "fahim-abdullah-portfolio.firebaseapp.com",
  projectId: "fahim-abdullah-portfolio",
  storageBucket: "fahim-abdullah-portfolio.appspot.com",
  messagingSenderId: "866607336783",
  appId: "1:866607336783:web:6bed8cd0fdc279dfeac93a"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore()