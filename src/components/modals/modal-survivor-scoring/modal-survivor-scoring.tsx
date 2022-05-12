import { Component, h, Listen, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "modal-survivor-scoring",
})
export class ModalSurvivorScoring {
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
          <ion-title>Survivor Scoring</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-row
          style={{
            "justify-content": "center",
          }}
        >
          <ion-col size="12" size-md="8">
            <fireenjin-form
              style={{
                "text-align": "center",
              }}
              documentId={this.tournamentId}
              endpoint="tournaments"
              beforeSubmit={async (data) => {
                const matches = this.tournament?.matches || [];
                matches.push({
                  timestamp: new Date(),
                  scoring: {
                    survivor: data?.survivor || {},
                    killer: data?.killer || {},
                  },
                });
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

                  this.tournament.matches = matches;
                  for (const [userId, score] of Object.entries(
                    survivorScores
                  )) {
                    const survivorIndex = (
                      this.tournament?.survivors || []
                    ).findIndex((survivor) => survivor?.user?.id === userId);
                    this.tournament.survivors[survivorIndex].scoring = score;
                  }

                  return this.tournament;
              }}
            >
              {(this.tournament?.survivors || []).map((survivor) => (
                <ion-card>
                  {survivor?.name || "No Name"}
                  <fireenjin-input
                    min="0"
                    type="number"
                    label="Bloodpoints"
                    labelPosition="stacked"
                    name={`survivor.${survivor?.user?.id}.bloodpoints`}
                  />
                </ion-card>
              ))}
            </fireenjin-form>
          </ion-col>
        </ion-row>
      </ion-content>
    ];
  }
}
