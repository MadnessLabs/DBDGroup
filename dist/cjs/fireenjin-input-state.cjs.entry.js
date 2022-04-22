'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-faf70b2e.js');

const inputStateCss = "fireenjin-input-state ion-select{color:var(--ion-color-dark);font-family:var(--ion-font-family);--padding-start:0;max-width:auto}";

const InputState = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.stateList = {
      AK: "Alaska",
      AL: "Alabama",
      AR: "Arkansas",
      AS: "American Samoa",
      AZ: "Arizona",
      CA: "California",
      CO: "Colorado",
      CT: "Connecticut",
      DC: "District of Columbia",
      DE: "Delaware",
      FL: "Florida",
      GA: "Georgia",
      GU: "Guam",
      HI: "Hawaii",
      IA: "Iowa",
      ID: "Idaho",
      IL: "Illinois",
      IN: "Indiana",
      KS: "Kansas",
      KY: "Kentucky",
      LA: "Louisiana",
      MA: "Massachusetts",
      MD: "Maryland",
      ME: "Maine",
      MI: "Michigan",
      MN: "Minnesota",
      MO: "Missouri",
      MS: "Mississippi",
      MT: "Montana",
      NC: "North Carolina",
      ND: " North Dakota",
      NE: "Nebraska",
      NH: "New Hampshire",
      NJ: "New Jersey",
      NM: "New Mexico",
      NV: "Nevada",
      NY: "New York",
      OH: "Ohio",
      OK: "Oklahoma",
      OR: "Oregon",
      PA: "Pennsylvania",
      PR: "Puerto Rico",
      RI: "Rhode Island",
      SC: "South Carolina",
      SD: "South Dakota",
      TN: "Tennessee",
      TX: "Texas",
      UT: "Utah",
      VA: "Virginia",
      VI: "Virgin Islands",
      VT: "Vermont",
      WA: "Washington",
      WI: "Wisconsin",
      WV: "West Virginia",
      WY: "Wyoming",
    };
  }
  componentDidLoad() {
    if (!(index.Build === null || index.Build === void 0 ? void 0 : index.Build.isBrowser))
      return;
    const ionSelectEl = this.stateAutocompleteEl.querySelector("ion-select");
    ionSelectEl.interfaceOptions = { header: "State" };
  }
  render() {
    return (index.h("ion-select", { color: "primary", name: this.name, value: this.value, "ok-text": "Select", "cancel-text": "Cancel", placeholder: this.placeholder }, Object.keys(this.stateList).map((abbrev) => (index.h("ion-select-option", { value: abbrev }, this.stateList[abbrev])))));
  }
  get stateAutocompleteEl() { return index.getElement(this); }
};
InputState.style = inputStateCss;

exports.fireenjin_input_state = InputState;
