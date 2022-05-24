import { Component, h, Listen, Prop, Event, EventEmitter } from "@stencil/core";
import { KillerScores, SurvivorScores, Tournament } from "../../../interfaces";

@Component({
  tag: "modal-scoring",
})
export class ModalScoring {
  @Prop() tournamentId: string;
  @Prop() tournament: Tournament;

  @Event() dbdModalClose: EventEmitter;

  @Listen("fireenjinSuccess")
  onSucess() {
    this.dbdModalClose.emit();
  }

  closeModal(event: MouseEvent) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.dbdModalClose.emit();
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="light">
          <ion-buttons slot="start">
            <ion-button
              color="primary"
              href="/"
              onClick={(event) => this.closeModal(event)}
            >
              <ion-icon name="arrow-back" color="primary" />
            </ion-button>
          </ion-buttons>
          <ion-title>Scoring</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <fireenjin-form
          style={{
            "text-align": "center",
          }}
          documentId={this.tournamentId}
          endpoint="tournaments"
          beforeSubmit={async (data) => {
            const matches = this.tournament?.matches || [];
            if (matches.length > parseInt(this.tournament?.matchCount as any))
              return;
            matches.push({
              timestamp: new Date() as any,
              scoring: {
                survivor: data?.survivor || {},
                killer: data?.killer || {},
              },
            });
            const killerScores: {
              [userId: string]: KillerScores;
            } = {};
            for (const match of matches) {
              for (const [userId, scores] of Object.entries(
                match?.scoring?.killer || {}
              )) {
                if (!killerScores[userId])
                  killerScores[userId] = {
                    escapes: 0,
                    generatorsLeft: 0,
                    kills: 0,
                  };
                killerScores[userId].escapes =
                  killerScores[userId].escapes +
                  parseInt((scores?.escapes as any) || "0");
                killerScores[userId].generatorsLeft =
                  killerScores[userId].generatorsLeft +
                  parseInt((scores?.generatorsLeft as any) || "0");
                killerScores[userId].kills =
                  killerScores[userId].kills +
                  parseInt((scores?.kills as any) || "0");
              }
            }

            this.tournament.matches = matches;
            for (const [userId, score] of Object.entries(killerScores)) {
              const killerIndex = (this.tournament?.killers || []).findIndex(
                (killer) => killer?.user?.id === userId
              );
              if (killerIndex || !this.tournament?.killers[killerIndex])
                continue;
              if (!this.tournament?.killers[killerIndex]?.scoring)
                this.tournament.killers[killerIndex].scoring = {};
              this.tournament.killers[killerIndex].scoring = score;
            }

            const survivorScores: {
              [userId: string]: SurvivorScores;
            } = {};
            for (const match of matches) {
              for (const [userId, scores] of Object.entries(
                match?.scoring?.survivor || {}
              )) {
                if (!survivorScores[userId])
                  survivorScores[userId] = {
                    bloodpoints: 0,
                  };
                survivorScores[userId].bloodpoints =
                  survivorScores[userId].bloodpoints +
                  parseInt((scores?.bloodpoints as any) || "0");
              }
            }

            for (const [userId, score] of Object.entries(survivorScores)) {
              const survivorIndex = (
                this.tournament?.survivors || []
              ).findIndex((survivor) => survivor?.user?.id === userId);
              this.tournament.survivors[survivorIndex].scoring = score;
            }

            return this.tournament;
          }}
        >
          <ion-grid>
            <ion-row
              style={{
                "justify-content": "center",
              }}
            >
              <ion-col size="12" sizeMd="6">
                <ion-card>
                  <ion-title>
                    <b>Survivors</b>
                  </ion-title>
                  {(this.tournament?.survivors || []).map((survivor) => (
                    <div>
                      {survivor?.name || "No Name"}
                      <fireenjin-input
                        min="0"
                        type="number"
                        label="Bloodpoints"
                        labelPosition="stacked"
                        name={`survivor.${survivor?.user?.id}.bloodpoints`}
                      />
                    </div>
                  ))}
                </ion-card>
              </ion-col>
              <ion-col size="12" sizeMd="6">
                <ion-card>
                  <ion-title>
                    <b>Killer</b>
                  </ion-title>
                  {(this.tournament?.killers || []).map((killer) => (
                    <div>
                      {killer?.name || "No Name"}
                      <fireenjin-input
                        min="0"
                        max="4"
                        type="number"
                        label="Kills"
                        labelPosition="stacked"
                        name={`killer.${killer?.user?.id}.kills`}
                      />
                      <fireenjin-input
                        min="0"
                        max="5"
                        type="number"
                        label="Generators Left"
                        labelPosition="stacked"
                        name={`killer.${killer?.user?.id}.generatorsLeft`}
                      />
                      <fireenjin-input
                        min="0"
                        max="4"
                        type="number"
                        label="Escapes"
                        labelPosition="stacked"
                        name={`killer.${killer?.user?.id}.escapes`}
                      />
                    </div>
                  ))}
                </ion-card>
              </ion-col>
            </ion-row>
          </ion-grid>
        </fireenjin-form>
      </ion-content>,
    ];
  }
}
