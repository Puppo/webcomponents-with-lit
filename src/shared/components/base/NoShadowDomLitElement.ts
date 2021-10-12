import { LitElement } from "lit";

export class NoShadowDomLitElement extends LitElement {
  createRenderRoot() {
    return this;
  }
}
