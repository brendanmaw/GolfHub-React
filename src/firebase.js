import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA6-63XDJ309S8bAglIPyXa5wOuXnBhwFQ",
    authDomain: "golfhub-15149.firebaseapp.com",
    databaseURL: "https://golfhub-15149.firebaseio.com",
    projectId: "golfhub-15149",
    storageBucket: "golfhub-15149.appspot.com",
    messagingSenderId: "916259146990",
    appId: "1:916259146990:web:b378f2bde5ee6a7abaf7ff",
    measurementId: "G-8BEQDZN280"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
