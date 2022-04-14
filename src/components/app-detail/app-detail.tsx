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
        <ion-grid>
          <ion-row style="flex-wrap: wrap-reverse">
            <ion-col size="12" size-md="6">
              <p>test</p>
              <p>test</p>
              <p>test</p>
              <p>test</p>
              {/* <fireenjin-pagination
              ref={(el) => (this.paginationEl = el)}
              listEl={(result) => <ion-item>{result?.id}</ion-item>}
              endpoint={this.endpoint}
              limit={this.limit}
              query={this.query}
            /> */}
            </ion-col>
            <ion-col size="12" size-md="6">
              <p>test</p>
              {/* <fireenjin-pagination
              ref={(el) => (this.paginationEl = el)}
              listEl={(result) => <ion-item>{result?.id}</ion-item>}
              endpoint={this.endpoint}
              limit={this.limit}
              query={this.query}
            /> */}
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    );
  }
}
