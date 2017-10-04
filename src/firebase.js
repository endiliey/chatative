import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAXAy_smMPRqnHYe1G552yMk_gv1t3igiA",
  authDomain: "chatative-4e0dd.firebaseapp.com",
  databaseURL: "https://chatative-4e0dd.firebaseio.com",
  projectId: "chatative-4e0dd",
  storageBucket: "",
  messagingSenderId: "883914354235" 
};
firebase.initializeApp(config);

export default firebase;

