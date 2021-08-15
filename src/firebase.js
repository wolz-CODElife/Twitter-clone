import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiRu9LGnqIyZUaqPm3sdFSOZOdkBTh3G0",
  authDomain: "twitter-clone-wc.firebaseapp.com",
  projectId: "twitter-clone-wc",
  storageBucket: "twitter-clone-wc.appspot.com",
  messagingSenderId: "966513563296",
  appId: "1:966513563296:web:20b897f03e57bde7bb9bc5",
  measurementId: "G-HWSLTD6T8Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()


export { auth, provider }
export default db