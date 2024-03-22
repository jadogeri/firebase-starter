import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import {initializeApp} from "firebase/app"
import {getFirestore ,  collection, getDocs} from "firebase/firestore"
import React, {useState} from 'react';

let books = [];

let count = 0

//new branch


//id:"0f5QqyXRTDawqAfp52ZW"



export default function App() {
  const [data, setData] = useState([])
  const [author,setAuthor] = useState("");
  const [title,setTitle] = useState("");



  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! 123</Text>

      <Text style={{fontSize:20}}>Add Book </Text>
      <TextInput style={{borderWidth:4}} value={author} //onChangeText={onChangeAuthorHandler} 
      placeholder='enter author'></TextInput>
      <TextInput style={{borderWidth:4}} value={title} //onChangeText={onChangeTitleHandler} 
      placeholder='enter title'></TextInput>
      <Button title='ADD BOOK' onPress={()=>{
      }}/>

      <Text style={{fontSize:20}}>delete </Text>
      <Text style={{fontSize:20}}>update book </Text>
      <Text style={{fontSize:20}}>get book </Text>

      <Text style={{fontSize:20}}>List of Books and Authors </Text>
      <FlatList 
      
      data={books}
      keyExtractor={(key)=>{ return key.id +   Math.floor(Math.random() * 1000);
      }}
      renderItem={({item})=>{
        return <View>
        <Text> ({count++}) id == {item.id}, author ={item.author} title={item.title} </Text>
        </View>
      }}
      />
      


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

  // const onChangeAuthorHandler =(e)=>{
  //   setAuthor(e.target.value)
  
  // }
  
  // const onChangeTitleHandler =(e)=>{
  //   setTitle(e.target.value)
  
    
  // }
  


  // const firebaseConfig = {
  //   apiKey: "AIzaSyDvs3KOLNrj2n8CUYOfefwy-GYM1gJ77IQ",
  //   authDomain: "fir-starter-3d301.firebaseapp.com",
  //   projectId: "fir-starter-3d301",
  //   storageBucket: "fir-starter-3d301.appspot.com",
  //   messagingSenderId: "14154497156",
  //   appId: "1:14154497156:web:092f10a56ad24d5cfe96d1"
  // };


  // // init firebase app
  // initializeApp(firebaseConfig);

  // // init services
  // const db = getFirestore();

  // // collection ref
  // const colRef = collection(db, "books");

  // // get collection data

  // getDocs(colRef).then((snapshot) => {
  //   snapshot.docs.forEach((doc)=>{
  //     books.push({...doc.data(), id :doc.id})
  //   })
  //   console.log(books)

  //   setData(books)
  //   JSON.stringify(snapshot.docs)
  // }).catch((err)=>{
  //   console.log(err)
  // })

  // const addbook = (author,title)=>{

    
  // }