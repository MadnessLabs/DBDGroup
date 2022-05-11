import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "modal-scoring",
})
export class ModalScoring {
  @Prop() tournamentId: string;
  @Prop() tournament: Tournament;

  render() {
    return (
      <ion-content>
        <fireenjin-form
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
          {(this.tournament?.killers || []).map((killer) => (
            <ion-card>
              {killer?.name || "No Name"}
              <fireenjin-input
                min="0"
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
                type="number"
                label="Escapes"
                labelPosition="stacked"
                name={`killer.${killer?.user?.id}.escapes`}
              />
            </ion-card>
          ))}
        </fireenjin-form>
      </ion-content>
    );
  }
}
