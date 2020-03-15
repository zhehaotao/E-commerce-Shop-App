import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDisFQFO0MayzciGMv3p_9LhPjfvB7PRdY",
  authDomain: "crwn-db-29c33.firebaseapp.com",
  databaseURL: "https://crwn-db-29c33.firebaseio.com",
  projectId: "crwn-db-29c33",
  storageBucket: "crwn-db-29c33.appspot.com",
  messagingSenderId: "1097924401516",
  appId: "1:1097924401516:web:354323c120fc0aecebbb49",
  measurementId: "G-Y5D1R2HX7D"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if (!userAuth) return;

  // get Doc reference
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get()

  // add new user in database
  if (!snapShot.exists){
    const {displayName, email} = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch(error){
      console.log('error', error.message);
    }
  }
  return userRef;
}
firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;