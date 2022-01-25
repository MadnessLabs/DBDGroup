import { Component, h } from '@stencil/core';

@Component({
    tag: 'app-signup',
    styleUrl: 'app-signup.css'
})
export class AppSignup {

    render() {
        return (
            <ion-content>
                <form>
                    <ion-input type="email" name="email" value="" />
                    <ion-input type="password" name="password" value="" />
                    <ion-button type="submit">Submit</ion-button>
                </form>
            </ion-content>
        );
    }
}