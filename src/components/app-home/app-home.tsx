import { Component, h, Listen, Prop, State } from '@stencil/core';
import { Auth } from 'firebase/auth';
import { doc, Firestore, getDoc, setDoc } from 'firebase/firestore';


@Component({
    tag: 'app-home',
    styleUrl: 'app-home.css'
})
export class AppHome {
    @State() formData: {
        name?: string;
        type?: string;
    } = {};

    @Prop() db: Firestore;
    @Prop() auth: Auth;

    @Listen("submit")
    onSubmit() {
        setDoc(doc(this.db, `users/${this.auth.currentUser.uid}`), this.formData, {
            merge: true
        });
    }

    @Listen("ionInput")
    onInput(event) {
        this.formData[event.target.name] = event.target.value;
    }

    async componentDidLoad() {
        const query = await getDoc(doc(this.db, `users/${this.auth.currentUser.uid}`));
        this.formData = query.data();
    }

    render() {
        return (
            <ion-conten>
                <ion-card>
                    <form>
                        <ion-list>
                            <ion-item>
                                <ion-input name="name" value={this.formData?.name} />
                                <ion-input name="type" value={this.formData?.type} />
                            </ion-item>
                        </ion-list>
                        <ion-button type="submit">Save</ion-button>
                    </form>
                </ion-card>
            </ion-conten>
        );
    }
}