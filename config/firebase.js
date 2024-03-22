import {initializeApp} from "firebase/app"
import {getFirestore ,  collection, getDocs} from "firebase/firebase"


const firebaseConfig = {
    apiKey: "AIzaSyDvs3KOLNrj2n8CUYOfefwy-GYM1gJ77IQ",
    authDomain: "fir-starter-3d301.firebaseapp.com",
    projectId: "fir-starter-3d301",
    storageBucket: "fir-starter-3d301.appspot.com",
    messagingSenderId: "14154497156",
    appId: "1:14154497156:web:092f10a56ad24d5cfe96d1"
  };


  // init firebase app
  initializeApp(firebaseConfig);

  // init services
  const db = getFirestore();

  // collection ref
  const colRef = collection(db, "books");

  // get collection data

  getDocs(colRef).then((snapshot) => {
    console.log(snapshot.docs)
  })

//new branch