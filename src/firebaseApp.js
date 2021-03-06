import firebase from 'firebase';
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB4vx2DkKyMLnvQINsdPbAUaM2FdIP753M",
    authDomain: "jobber-95ff3.firebaseapp.com",
    projectId: "jobber-95ff3",
    storageBucket: "jobber-95ff3.appspot.com",
    messagingSenderId: "295387123365",
    appId: "1:295387123365:web:466e7ab8b2b6258ebdc74c",
    measurementId: "G-HCR87GFV05"
  };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  // App.initializeApp()

export const firebaseApp =  firebase.initializeApp(firebaseConfig);
export const eventsRef = firebaseApp.database().ref().child('events')