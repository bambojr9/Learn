import * as firebase from "firebase";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAk1LGxVcaE6OVnEwpEGZ17vo2os2o_IqE",
  authDomain: "projectreact9999.firebaseapp.com",
  databaseURL: "https://projectreact9999.firebaseio.com",
  projectId: "projectreact9999",
  storageBucket: "projectreact9999.appspot.com",
  messagingSenderId: "110198288986",
  appId: "1:110198288986:web:87897315cc7964227c1e63",
  measurementId: "G-E9LW1QW89C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// khai bao data snapshot  ref ten bang du lieu
export const firebaseData = firebase.database().ref("Database99");
