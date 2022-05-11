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
        <ion-row style={{
          "justify-content":"center"
        }}>
          <ion-col size="12" size-md="8">
        <fireenjin-form style={{
          "text-align":"center"
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
              this.tournament.killers[killerIndex].scoring = score;
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
                name={`survivor.${survivor?.user?.id}.bloodpoint`}
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