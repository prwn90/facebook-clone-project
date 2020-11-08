import firebase from "firebase";

const firebaseConfing = {

  //YOUR API KEY HERE
  
  };

  const firebaseApp = firebase.initializeApp(firebaseConfing);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db; 