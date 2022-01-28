import { toastController } from '@ionic/core';
import { Component, State,h, Listen } from '@stencil/core';

@Component({
    tag: 'app-signup',
    styleUrl: 'app-signup.css'
})
export class AppSignup {
    @State() email: string;
    @State() password: string;

    async presentToast(event) {
        const toast = await toastController.create({
            message: 'Get help',
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
        console.log(this.email, this.password);
    }

    render() {
        return (
            <ion-content>  
                <form>
                    <ion-input type="email" name="email" value=" " />
                    <ion-input type="password" name="password" value=" " />
                    <ion-button type="submit" color="tertiary">Submit</ion-button>
                </form>
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <ion-card>
                                <ion-grid>
                                    <ion-row>
                                        <ion-col>Survivor</ion-col>
                                        <ion-col>Killer</ion-col>
                                    </ion-row>
                                </ion-grid>
                            </ion-card>
                        </ion-col>
                    </ion-row>
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <ion-button expand="block" 
                                href="https://discord.gg/7VsNGcwAr6" 
                                target="_blank">
                                    <ion-icon 
                                name="logo-discord" 
                                slot="start"
                                />
                                Discord
                                </ion-button>
                            </ion-col>
                            <ion-col>
                                <ion-button expand="block" 
                                href="https://steamcommunity.com/profiles/76561198073470151/" 
                                target="_blank">
                                    <ion-icon 
                                name="logo-steam" 
                                slot="start"
                                />
                                Steam
                                </ion-button>
                            </ion-col>
                            <ion-col>
                                <ion-button 
                                expand="block" 
                                onClick={(event) => this.presentToast(event)}
                                target="_blank"
                                >
                                    <ion-icon 
                                    name="help-circle" 
                                    slot="start"
                                    />
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