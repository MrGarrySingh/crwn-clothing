import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBtCPMykZNApIwk0HwHCUMxZIVV-9uMVyI",
    authDomain: "crwn-db-915d6.firebaseapp.com",
    databaseURL: "https://crwn-db-915d6.firebaseio.com",
    projectId: "crwn-db-915d6",
    storageBucket: "crwn-db-915d6.appspot.com",
    messagingSenderId: "112995909902",
    appId: "1:112995909902:web:d2bec1b83de737a4cbd75f"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;