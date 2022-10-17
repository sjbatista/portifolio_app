import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDJqfyXySDnpmWm12nkqgiAIsCZDXZOCO4",
  authDomain: "portifolio-ap.firebaseapp.com",
  projectId: "portifolio-ap",
  storageBucket: "portifolio-ap.appspot.com",
  messagingSenderId: "115231978414",
  appId: "1:115231978414:web:7ee19ec1a7a7bb31620e3f"
    });
  
  
  const db = firebase.firestore();

  
  export {db};