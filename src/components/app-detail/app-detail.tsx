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
          <ion-row>
            <ion-col size="4" size-md="1">
              <ion-item>
                <ion-thumbnail
                  slot="start"
                  style={{
                    height: "90px",
                    width: "110px",
                  }}
                >
                  <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                </ion-thumbnail>
              </ion-item>
            </ion-col>
            <ion-col size="8" size-md="11">
              <ion-card-title>TOURNAMENT NAME</ion-card-title>
              <ion-card-subtitle>DATE</ion-card-subtitle>
              <ion-button size="cover" id="trigger-button">Tournament Details</ion-button>
              <ion-popover trigger="trigger-button">
                <ion-content>
                  <ul>
                  <p><li>Don't Be Cringe, Don't Be Cringe, Don't Be Cringe, Don't Be Cringe</li></p>
                  <p><li>Don't Be Cringe</li></p>
                  <p><li>Don't Be Cringe</li></p>
                  <p><li>Don't Be Cringe</li></p>
                  <p><li>Don't Be Cringe</li></p>
                  <p><li>Don't Be Cringe</li></p>
                  <p><li>Don't Be Cringe</li></p>
                  </ul>
                </ion-content>
              </ion-popover>
            </ion-col>
          </ion-row>
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
