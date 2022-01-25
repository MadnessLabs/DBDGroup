import { Component, ComponentInterface, Listen, h } from '@stencil/core';

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

    render() {
        return (
            <ion-router useHash={false}>
                <ion-route url="/" component="app-home" />
                <ion-route url="/signup" component="app-signup" />
            </ion-router>
        );
    }
}