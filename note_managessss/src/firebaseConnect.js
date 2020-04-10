import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAKbAxHSUbSQNWSum_0c9zgNiJamcszM30",
  authDomain: "notereact99.firebaseapp.com",
  databaseURL: "https://notereact99.firebaseio.com",
  projectId: "notereact99",
  storageBucket: "notereact99.appspot.com",
  messagingSenderId: "497677191317",
  appId: "1:497677191317:web:e16a60c95f0947e795339c",
  measurementId: "G-S06W4HW3L1",
};
// Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

firebase.initializeApp(firebaseConfig);
// khai bao data snapshot  ref ten bang du lieu
export const noteData = firebase.database().ref("dataNote");
//sua du lieu
// db.set({
//   id: 2,
//   title: " Title thu 2",
//   content: "Noi dung thu 2"
// });
//khi lay 1 lan thi in ra bang du lieu
// db.once("value").then(function (snapshot) {
//   console.log(snapshot.val());
// });
