import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDnkz2Q2jj8fY5BUHOFk9kmfPL_xsijIAY",
    authDomain: "quick-team-notes.firebaseapp.com",
    databaseURL: "https://quick-team-notes-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "quick-team-notes",
    storageBucket: "quick-team-notes.appspot.com",
    messagingSenderId: "837147557986",
    appId: "1:837147557986:web:9ec3a3a637f0c3eb71513b"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;