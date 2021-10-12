import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { NoShadowDomLitElement } from "../shared/components/base/NoShadowDomLitElement";

export const LitHomePageSelector = "lit-home-page";

@customElement(LitHomePageSelector)
export class LitHomePage extends NoShadowDomLitElement {
  render() {
    return html`
      <lit-hero
        type="primary"
        is-full="true"
        title="Hello to WebComponents with Lit"
        sub-title="Lit is a library for building user interfaces with web components."
      ></lit-hero>
    `;
  }
}
