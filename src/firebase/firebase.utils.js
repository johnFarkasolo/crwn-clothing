import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAl0w0JkbdwdSVwyZ2EQoMuB7DL9FJBtAs",
    authDomain: "crwn-db-4c6b3.firebaseapp.com",
    databaseURL: "https://crwn-db-4c6b3.firebaseio.com",
    projectId: "crwn-db-4c6b3",
    storageBucket: "",
    messagingSenderId: "190211374396",
    appId: "1:190211374396:web:5975cb06d362831c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
