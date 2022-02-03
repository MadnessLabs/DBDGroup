import { Component, Listen, h } from '@stencil/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, } from "firebase/auth";
import { doc, 
// addDoc,
// updateDoc,
getFirestore, setDoc,
// collection,
// getDocs,
// doc,
 } from "firebase/firestore";
export class AppRoot {
  constructor() {
    this.componentProps = {};
  }
  async onUpdate() {
    const registration = await navigator.serviceWorker.getRegistration();
    if (!registration || !registration.waiting) {
      // If there is no registration, this is the first service
      // worker to be installed. registration.waiting is the one
      // waiting to be activiated.
      return;
    }
    if (confirm("There is an update, would you like to reload now?")) {
      window.location.reload();
    }
  }
  async componentWillLoad() {
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
    const auth = getAuth(app);
    this.componentProps = { app, analytics, db, auth };
    onAuthStateChanged(auth, async (session) => {
      if (session === null || session === void 0 ? void 0 : session.uid) {
        // IF LOGGED IN
        console.log(session.uid);
        await setDoc(doc(db, `users/${session.uid}`), {
          id: session.uid,
        }, {
          merge: true,
        });
      }
      else {
        // IF LOGGED OUT
      }
    });
    await signInWithEmailAndPassword(auth, "bobby@madnesslabs.net", "password123");
    document.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log(event);
    });
    // signOut(auth);
    //console.log(res);
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
  }
  render() {
    return (h("ion-router", { useHash: false },
      h("ion-route", { url: "/", component: "app-home", componentProps: this.componentProps }),
      h("ion-route", { url: "/signup", component: "app-signup", componentProps: this.componentProps }),
      h("ion-route", { url: "/admin", component: 'app-admin', componentProps: this.componentProps }),
      h("ion-route", { url: "/tournament/:tournamentId", component: 'app-tournament', componentProps: this.componentProps })));
  }
  static get is() { return "dbdgroup-router"; }
  static get listeners() { return [{
      "name": "swUpdate",
      "method": "onUpdate",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
