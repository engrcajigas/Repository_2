/**
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
**/
import firebase from 'firebase';

const config = {
    apiKey: "****************************",
    authDomain: "*****************************",
    databaseURL: "**********************",
    projectId: "***************************",
    storageBucket: "***************************",
    messagingSenderId: "***************************",
};
/**
class Firebase {
    constructor() {
        app.initializeApp(config);

        this.serverValue = app.database.ServerValue;
        this.emailAuthProvider = app.auth.emailAuthProvider;

        this.auth = app.auth();
        this.db = app.firebase.firestore();

        this.googleProvider = new app.auth.GoogleAuthProvider();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password)

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password)

    doSignOut = () => this.auth.signOut()

}
**/
firebase.initializeApp(config);

export const database = firebase.database();
export default firebase;
