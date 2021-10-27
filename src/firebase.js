import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAYAPSNEp3MhhiDgcd2hSG8x0kVqMYPX0M",
  authDomain: "disneyplus-clone-4e66b.firebaseapp.com",
  projectId: "disneyplus-clone-4e66b",
  storageBucket: "disneyplus-clone-4e66b.appspot.com",
  messagingSenderId: "712581549424",
  appId: "1:712581549424:web:2b5a14d997a50458bf53b5",
  measurementId: "G-YP1WR998SE"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

  