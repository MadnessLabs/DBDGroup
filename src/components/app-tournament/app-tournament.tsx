import { Component, h, Prop, State } from '@stencil/core';
import { getDoc, doc, Firestore } from 'firebase/firestore';


@Component({
    tag: 'app-tournament'
})
export class AppTournament {
    @Prop() db: Firestore;
    @Prop() tournamentId: string;

    @State() tournament: Tournament;

    async componentDidLoad() {
        const query = await getDoc(doc(this.db, `tournaments/${this.tournamentId}`));
        this.tournament = query.data() as Tournament;
    }

    render() {
        return (
            <ion-content>
                The tournament is on {this.tournamentId}
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <ion-card>
                                <ion-list class="ion-no-padding">
                                    <ion-item-divider>Survivors</ion-item-divider>
                                    {this.tournament?.survivors?.map(survivor =>
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
                                    {this.tournament?.killers?.map(killer =>
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
                        <h1>Tournament Signup</h1>
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