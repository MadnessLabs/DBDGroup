import "@ionic/core";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  // addDoc,
  // updateDoc,
  getFirestore,
  // collection,
  // getDocs,
  // doc,
} from "firebase/firestore";

window.onload = async () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDBJ3MJ0T0pWqWWGVlnGJ6g97cR8axU5ak",
    authDomain: "dead-by-daylight-group.firebaseapp.com",
    projectId: "dead-by-daylight-group",
    storageBucket: "dead-by-daylight-group.appspot.com",
    messagingSenderId: "974124897552",
    appId: "1:974124897552:web:48ea2eadb5021f58d3c195",
    measurementId: "G-4KQFEEYLJS",
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore();

  // try {
  //   const docRef = await addDoc(collection(db, "users"), {
  //     name: "CJ",
  //   });
  //   await updateDoc(doc(db, "users", docRef.id), {
  //     name: "WAP",
  //     email: "test@wap.com",
  //   });

  //   console.log("Document written with ID: ", docRef.id);
  // } catch (e) {
  //   console.log(e);
  // }

  // const querySnapshot = await getDocs(collection(db, "users"));
  // querySnapshot.forEach((doc) => {
  //   console.log(`${doc.id}`, doc.data());
  // });

  console.log(app, analytics, db);
};
