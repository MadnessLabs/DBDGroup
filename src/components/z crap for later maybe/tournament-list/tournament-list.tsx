import { Build, Component, ComponentInterface, Listen, State, h } from "@stencil/core";

@Component({
  tag: "app-tournament-list",
  styleUrl: "tournament-list.css"
})
export class PageTournamentList implements ComponentInterface {
  filterBarEl: any;
  paginationEl: any;

  @State() query: string;
  @State() filters: any = {};
  @State() endpoint = "tournaments";
  @State() limit = 24;

  @Listen("ionInput")
  onSearchInput(event) {
    this.query = event.target.value;
  }

  componentDidLoad() {
    if (!Build?.isBrowser) return;
    // Get Data
  }

  render() {
    return (
        <ion-content>
        <ion-grid>
          <ion-row
            style={{
              "justify-content": "center",
            }}
          >
            <ion-col size="8" size-md="2">
              <ion-accordion-group>
                <ion-accordion toggle-icon="arrow-down-circle">
                  <ion-item
                    style={{
                      "text-align": "center",
                    }}
                    slot="header"
                  >
                    <ion-label>Links</ion-label>
                  </ion-item>
                  <ion-list slot="content">
                    <ion-item>
                      <a href="https://deadbydaylight.group/tournament">
                        Tournament sign-up
                      </a>
                    </ion-item>
                    <ion-item>
                      <a href="https://deadbydaylight.group/list">
                        Tournament List
                      </a>
                    </ion-item>
                    <ion-item>
                      <a href="https://deadbydaylight.group/profile">
                        Profile
                      </a>
                    </ion-item>
                    <ion-item>
                      <a href="https://deadbydaylight.group/admin">Admin</a>
                    </ion-item>
                    <ion-item>
                      <a href="https://deadbydaylight.group">Home</a>
                    </ion-item>
                  </ion-list>
                </ion-accordion>
              </ion-accordion-group>
            </ion-col>
          </ion-row>
          </ion-grid>
        <fireenjin-search-bar
          ref={(el) => (this.filterBarEl = el)}
          paginationEl={this.paginationEl}
          filters={
            this.filters
          }
        />
        <fireenjin-pagination
          ref={(el) => (this.paginationEl = el)}
          listEl={(result) => (
            <ion-item>{result?.id}</ion-item>
          )}
          endpoint={this.endpoint}
          limit={this.limit}
          query={this.query}
        />  
      </ion-content>
    );
  }
}
