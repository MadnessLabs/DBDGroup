import { Component, h } from "@stencil/core";

@Component({
  tag: "app-detail",
  styleUrl: "app-detail.css",
})
export class AppDetail {
  component: string;
  componentProps?: any;
  cssClass?: string;
  paginationEl: HTMLFireenjinPaginationElement;
  endpoint: string;
  limit: number;
  query: string;

  render() {
    return (
      <ion-content>
        <ion-card>
          {/* <ion-thumbnail>
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
          </ion-thumbnail> */}
          <ion-card-title>TOURNAMENT NAME</ion-card-title>
          <ion-card-subtitle>DATE</ion-card-subtitle>
          <ion-card-content>Tournament rules (details)</ion-card-content>
        </ion-card>
        <ion-grid>
          <ion-row
            style={{
              "flex-wrap": "wrap-reverse",
            }}
          >
            {/* <fireenjin-pagination
              ref={(el) => (this.paginationEl = el)}
              listEl={(result) => <ion-item>{result?.id}</ion-item>}
              endpoint={this.endpoint}
              limit={this.limit}
              query={this.query}
            /> */}
            <ion-col size="12" size-md="6">
              <ion-card>
                <ion-item>
                  <ion-avatar slot="start">
                    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                  </ion-avatar>
                  <p>SURVIVOR</p>
                </ion-item>
              </ion-card>
              <ion-card>
                <ion-item>
                  <ion-avatar slot="start">
                    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                  </ion-avatar>
                  <p>SURVIVOR</p>
                </ion-item>
              </ion-card>
            </ion-col>
            {/* <fireenjin-pagination
              ref={(el) => (this.paginationEl = el)}
              listEl={(result) => <ion-item>{result?.id}</ion-item>}
              endpoint={this.endpoint}
              limit={this.limit}
              query={this.query}
            /> */}
            <ion-col size="12" size-md="6">
            <ion-card>
                <ion-item>
                  <ion-avatar slot="start">
                    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                  </ion-avatar>
                  <p>KILLER</p>
                </ion-item>
              </ion-card>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="12" size-md="6">
              <ion-card>
                <p>SIGNUP HERE</p>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    );
  }
}
