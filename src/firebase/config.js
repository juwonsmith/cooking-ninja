import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCgR9RyzvEWjsfYhSenmhJLzR715dX_6Ew",
    authDomain: "cooking-ninja-ffb89.firebaseapp.com",
    projectId: "cooking-ninja-ffb89",
    storageBucket: "cooking-ninja-ffb89.appspot.com",
    messagingSenderId: "830683923741",
    appId: "1:830683923741:web:0c667c8ed3598341e40df4"
  };



//initialize firebase
firebase.initializeApp(firebaseConfig)


//init services
const projectFirestore = firebase.firestore()

export {projectFirestore }