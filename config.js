import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
  apiKey: "AIzaSyBi4x4DyIQuJI6yUeDYg1Ho0Q9I1fgxkxE",
  authDomain: "let-s-ride-fae98.firebaseapp.com",
  projectId: "let-s-ride-fae98",
  storageBucket: "let-s-ride-fae98.appspot.com",
  messagingSenderId: "1057292711245",
  appId: "1:1057292711245:web:7776bc3ccf0bfeea5af304"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

