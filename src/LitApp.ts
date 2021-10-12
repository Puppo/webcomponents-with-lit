import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

export const litAppSelector = "lit-app";

@customElement(litAppSelector)
export class LitApp extends LitElement {
  async connectedCallback() {
    super.connectedCallback();
    const { mount } = await import("./LitApp.route");
    mount(this.shadowRoot!.querySelector("#app")!);
  }

  render() {
    return html`<div>
      <lit-navbar></lit-navbar>
      <div id="app"></div>
    </div>`;
  }
}
