import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBgz6iX_LV1_AkzAqr1LFs77RNKdnaFD9s",
    authDomain: "beerfinder-18873.firebaseapp.com",
    databaseURL: "https://beerfinder-18873.firebaseio.com",
    storageBucket: "beerfinder-18873.appspot.com",
    messagingSenderId: "845486740273"
};

firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
