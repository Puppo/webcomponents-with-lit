import { LitApp, litAppSelector } from "./LitApp";

declare global {
  interface HTMLElementTagNameMap {
    [litAppSelector]: LitApp;
  }
}
