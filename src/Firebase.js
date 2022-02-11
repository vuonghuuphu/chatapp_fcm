import React,{useState,useEffect}from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA_2yRFC5xxtECRHTw74VssUT6WmrLK8kg",
    authDomain: "chatapp-f428f.firebaseapp.com",
    projectId: "chatapp-f428f",
    storageBucket: "chatapp-f428f.appspot.com",
    messagingSenderId: "1056393935529",
    appId: "1:1056393935529:web:2df7c2b1eff31fd6bdc7b8",
    measurementId: "G-XXKWBCG4H0"
  };
  let app ;
  if (firebase.apps.length === 0 ) {
      app = firebase.initializeApp(firebaseConfig);
      firebase.firestore().settings({ experimentalForceLongPolling: true,timestampsInSnapshot: true, merge: true  });
  }else{
      app = firebase.apps;
  }

  const auth = firebase.auth();
  const db = firebase.firestore();

  export {db,auth};