import { createStore } from "@stencil/store";
import { GlobalState } from "./interfaces";

const { state, onChange } = createStore({
  session: null,
  profile: null,
} as GlobalState);

onChange("session", (value) => {
  console.log(value);
});

onChange("profile", (value) => {
  console.log(value);
});

export default state;
