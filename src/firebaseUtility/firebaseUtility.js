import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyB5tLetZKtmsRx1S8o4BHY66XKWTvOFMvo",
    authDomain: "crown-db-4416c.firebaseapp.com",
    projectId: "crown-db-4416c",
    storageBucket: "crown-db-4416c.appspot.com",
    messagingSenderId: "335172298715",
    appId: "1:335172298715:web:b7904595b3896637e329fe",
    measurementId: "G-7HHC8HZWDN"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
}

export default firebase