import { Component, h } from '@stencil/core';


@Component({
    tag: 'app-home',
    styleUrl: 'app-home.css'
})
export class AppHome {

    render() {
        return (
            <ion-conten>Home Page<ion-button href="/signup">Sign up</ion-button></ion-conten>
        );
    }
}