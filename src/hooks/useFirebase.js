import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, getDocs,
  addDoc, deleteDoc, doc
} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDvs3KOLNrj2n8CUYOfefwy-GYM1gJ77IQ",
  authDomain: "fir-starter-3d301.firebaseapp.com",
  projectId: "fir-starter-3d301",
  storageBucket: "fir-starter-3d301.appspot.com",
  messagingSenderId: "14154497156",
  appId: "1:14154497156:web:092f10a56ad24d5cfe96d1"
};


// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'books')

// get collection data
// getDocs(colRef)
//   .then(snapshot => {
//     // console.log(snapshot.docs)
//     let books = []
//     snapshot.docs.forEach(doc => {
//       books.push({ ...doc.data(), id: doc.id })
//     })
//     console.log(books)
//   })
//   .catch(err => {
//     console.log(err.message)
//   })

// // adding docs
// const addBookForm = document.querySelector('.add')
// addBookForm.addEventListener('submit', (e) => {
//   e.preventDefault()

//   addDoc(colRef, {
//     title: addBookForm.title.value,
//     author: addBookForm.author.value,
//   })
//   .then(() => {
//     addBookForm.reset()
//   })
// })

// // deleting docs
// const deleteBookForm = document.querySelector('.delete')
// deleteBookForm.addEventListener('submit', (e) => {
//   e.preventDefault()

//   const docRef = doc(db, 'books', deleteBookForm.id.value)

//   deleteDoc(docRef)
//     .then(() => {
//       deleteBookForm.reset()
//     })
// })

export {db,colRef,getFirestore,collection,deleteDoc,getDocs,addDoc,doc}