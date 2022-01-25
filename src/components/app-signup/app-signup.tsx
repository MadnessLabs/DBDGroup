import { Component, h } from '@stencil/core';

@Component({
    tag: 'app-signup',
    styleUrl: 'app-signup.css'
})
export class AppSignup {

    render() {
        return (
            <ion-content>Signup<ion-button href="/">Go Home</ion-button></ion-content>
        );
    }
}