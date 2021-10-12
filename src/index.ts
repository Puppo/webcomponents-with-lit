import { html, render } from "lit";
import "./components";
import "./index.scss";

export { LitApp } from "./LitApp";

const app = () =>
  render(
    html`<lit-app></lit-app>`,
    document.querySelector<HTMLElement>("#app")!
  );
app();
