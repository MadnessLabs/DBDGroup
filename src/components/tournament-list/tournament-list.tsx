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
