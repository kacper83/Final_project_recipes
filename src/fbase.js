import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCeihPRJTY_hTgMY9ySkpGpuOIQWIeaPGo",
    authDomain: "recipes-19d9c.firebaseapp.com",
    databaseURL: "https://recipes-19d9c.firebaseio.com",
    projectId: "recipes-19d9c",
    storageBucket: "recipes-19d9c.appspot.com",
    messagingSenderId: "385875290383",
    appId: "1:385875290383:web:99afa5509b264292b8f67a",
    measurementId: "G-3JF3ZM3MZB"
});

const fbase = Rebase.createClass(firebaseApp.database());

export {fbase, firebaseApp};