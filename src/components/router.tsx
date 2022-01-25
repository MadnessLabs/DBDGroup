import "@ionic/core";
import { Component, ComponentInterface, Listen, h } from '@stencil/core';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

@Component({
    tag: 'dbdgroup-router',
})
export class AppRoot implements ComponentInterface {

    @Listen("swUpdate", { target: "window" })
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

    componentDidLoad() {
        const firebaseConfig = {
            apiKey: "AIzaSyDBJ3MJ0T0pWqWWGVlnGJ6g97cR8axU5ak",
            authDomain: "dead-by-daylight-group.firebaseapp.com",
            projectId: "dead-by-daylight-group",
            storageBucket: "dead-by-daylight-group.appspot.com",
            messagingSenderId: "974124897552",
            appId: "1:974124897552:web:48ea2eadb5021f58d3c195",
            measurementId: "G-4KQFEEYLJS"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);

        console.log(app, analytics);
    }

    render() {
        return (
            <ion-router>
                <ion-route url="/" component="app-home" />
                <ion-route url="/signup" component="app-signup" />
            </ion-router>
        );
    }
}