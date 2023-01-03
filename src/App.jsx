import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import SideMenu from './components/SideMenu/SideMenu';
import MainContainer from './components/MainContainer/MainContainer';
import './App.css';

const firebaseConfig = {
  apiKey: "AIzaSyByA0qiXSqDij8YyIeObBs4Bk141ADFcpk",
  authDomain: "chatapp-7770f.firebaseapp.com",
  projectId: "chatapp-7770f",
  storageBucket: "chatapp-7770f.appspot.com",
  messagingSenderId: "427830416889",
  appId: "1:427830416889:web:95ff441a7160ae9b511928",
  measurementId: "G-PPSTVQPNC7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className='app-container'>
      <SideMenu />
      <MainContainer />
    </div>
  );
}

export default App;