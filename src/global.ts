import "@ionic/core";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDBJ3MJ0T0pWqWWGVlnGJ6g97cR8axU5ak",
  authDomain: "dead-by-daylight-group.firebaseapp.com",
  projectId: "dead-by-daylight-group",
  storageBucket: "dead-by-daylight-group.appspot.com",
  messagingSenderId: "974124897552",
  appId: "1:974124897552:web:48ea2eadb5021f58d3c195",
  measurementId: "G-4KQFEEYLJS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(app, analytics);
