import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

//Here we are storing the firebase config, including our API key.
//It's usually a good practice NOT TO store your API key on git for security
//But GitGuardians acknowledged that this is not an issue for the firebase case.
const config = {
  apiKey: "AIzaSyDblkHVhbyJzp4I5dl0KC1NxgW8M2AR5YE",
  authDomain: "noio-db.firebaseapp.com",
  projectId: "noio-db",
  storageBucket: "noio-db.appspot.com",
  messagingSenderId: "562836749073",
  appId: "1:562836749073:web:aadca87b886bb3cd42aab0",
  measurementId: "G-7L04QVZQW5",
};

//Function that allows us to take use's auth object and store it inside of our firestore database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  //Getting user id from auth and querying firestore for a reference in firestore
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  //Check if a document corresponding to a profile exists in firestore's user collection
  if (!snapShot.exists) {
    //Create user's profile
    let { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
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
  auth.signInWithPopup(provider);
};
//in case we want the whole library
export default firebase;
