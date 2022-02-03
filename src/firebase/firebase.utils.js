import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

//Here we are storing the firebase config, including our API key.
//It's usually a good practice NOT TO store your API key on git for security
//But GitGuardians acknowledged that this is not an issue for the firebase case.
const config = {
  apiKey: "AIzaSyDbrMH2LE0x49Kx2Y8Vzk-PvWlg2fhH8KY",
  authDomain: "crwn-db-befdc.firebaseapp.com",
  projectId: "crwn-db-befdc",
  storageBucket: "crwn-db-befdc.appspot.com",
  messagingSenderId: "721514152392",
  appId: "1:721514152392:web:6dc34529bc37836bfbc0fd",
};

firebase.initializeApp(config);

//Exporting our auth/firestore to use it anywhere we need in our application
//Firestore = firebase's asset hosting
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//GoogleAuthProvider = Google's auth popup
//We also set a parameter to our provider to select-account wich is self explainatory
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
//Exporting firebase's method to connect via google as signInWithGoogle
export const signInWithGoogle = () => {
  console.log(provider);
  auth.signInWithPopup(provider);
};
//in case we want the whole library
export default firebase;
