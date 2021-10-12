import { LitButton } from "../components/button/Button";

declare global {
  interface ElementEventMap {
    ["custom-focus"]: LitButton;
  }
}
