import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyA5SGafhFEvmc_qhrOq3EbhaxszsEY1loA",
  authDomain: "todoist-64dd2.firebaseapp.com",
  databaseURL: "https://todoist-64dd2-default-rtdb.firebaseio.com",
  projectId: "todoist-64dd2",
  storageBucket: "todoist-64dd2.appspot.com",
  messagingSenderId: "977694296118",
  appId: "1:977694296118:web:7deeab8e2d9a3519ac7097",
  measurementId: "G-CD31NLQRVN",
});

export { firebaseConfig as firebase };
