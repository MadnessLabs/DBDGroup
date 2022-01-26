import { Component, h, Listen, State } from '@stencil/core';
import { toastController } from '@ionic/core';

@Component({
    tag: 'app-signup',
    styleUrl: 'app-signup.css'
})
export class AppSignup {

    @State() email: string;
    @State() password: string;

    async presentToast(_event) {
        const toast = await toastController.create({
            message: 'Help yourself you fuck!',
            duration: 2000
        });
        toast.present();
    }

    @Listen("ionInput")
    onInput(event) {
        if (event.target.name === "email") {
            this.email = event.target.value;
        } else if (event.target.name === "password") {
            this.password = event.target.value;
        }
    }

    @Listen("submit")
    onSubmit(event) {
        event.preventDefault();
        console.log(this.email, this.password);
    }

    render() {
        return (
            <ion-content>
                <form>
                    <ion-input type="email" name="email" value="" />
                    <ion-input type="password" name="password" value="" />
                    <ion-button type="submit" color="tertiary">Submit</ion-button>
                </form>
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <ion-card>
                                <ion-grid>
                                    <ion-row>
                                        <ion-col><ion-text color="tertiary">Survivor</ion-text></ion-col>
                                        <ion-col>Killer</ion-col>
                                    </ion-row>
                                </ion-grid>
                            </ion-card>
                        </ion-col>
                    </ion-row>
                    {/* <ion-row>
                        <ion-col>
                            <ion-list>
                                <ion-item-divider>
                                    C
                                </ion-item-divider>
                                <ion-item detail>CJ</ion-item>
                                <ion-item-divider>
                                    S
                                </ion-item-divider>
                                <ion-item detail>Stickman</ion-item>
                            </ion-list>
                        </ion-col>
                    </ion-row> */}
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <ion-button
                                    color="medium"
                                    expand="block"
                                    href=""
                                    target="_blank"
                                >
                                    <ion-icon slot="start" name="logo-steam" />
                                    Steam
                                </ion-button>
                            </ion-col>
                            <ion-col>
                                <ion-button
                                    color="medium"
                                    expand="block"
                                    href="https://discord.com/channels/933969468227481690/933970601230618634"
                                    target="_blank"
                                >
                                    <ion-icon slot="start" name="logo-discord" />
                                    Discord
                                </ion-button>
                            </ion-col>
                            <ion-col>
                                <ion-button
                                    expand="block"
                                    onClick={(event) => this.presentToast(event)}
                                    target="_blank"
                                >
                                    <ion-icon slot="start" name="help-circle" />
                                    Help
                                </ion-button>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </ion-grid>
            </ion-content>
        );
    }
}