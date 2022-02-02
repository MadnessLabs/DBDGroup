import { Component, h, Listen, Prop, State } from '@stencil/core';
import { Auth } from 'firebase/auth';
import { setDoc, doc, Firestore } from 'firebase/firestore';


@Component({
    tag: 'app-admin',
    styleUrl: 'app-admin.css'
})

export class AppAdmin {
    @Prop() db: Firestore;
    @Prop() auth: Auth;

    @State() formData: Tournament = {
        survivors: [],
        killers: []
    };

    @Listen("ionInput")
    onInput(event) {
        this.formData[event.target.name] = event.target.value;
    }

    @Listen("submit")
    onSubmit() {
        const timestamp = new Date();
        const id = this.formData?.id || `${timestamp.getFullYear()}-${timestamp.getMonth() + 1}`;
        setDoc(doc(this.db, `tournaments/${id}`), { ...this.formData, id }, {
            merge: true
        });
    }

    render() {
        return (
            <ion-content>
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <ion-card>
                                <ion-list class="ion-no-padding">
                                    <ion-item-divider>Survivors</ion-item-divider>
                                    {this.formData?.survivors?.map(survivor =>
                                        <ion-item>
                                            BP: {survivor.bloodpoints}
                                        </ion-item>
                                    )}
                                </ion-list>
                            </ion-card>
                        </ion-col>
                        <ion-col>
                            <ion-card>
                                <ion-list class="ion-no-padding">
                                    <ion-item-divider>Killers</ion-item-divider>
                                    {this.formData?.killers?.map(killer =>
                                        <ion-item>
                                            KP: {killer.killerpoints}
                                        </ion-item>
                                    )}
                                </ion-list>
                            </ion-card>
                        </ion-col>
                    </ion-row>
                </ion-grid>
                <ion-card>
                    <form>
                        <ion-list>
                            <ion-item>
                                <ion-label position="stacked">Tournament Name</ion-label>
                                <ion-input name="id" />
                            </ion-item>
                            <ion-button type="submit">Save</ion-button>
                        </ion-list>
                    </form>
                </ion-card>
            </ion-content>
        );
    }
}