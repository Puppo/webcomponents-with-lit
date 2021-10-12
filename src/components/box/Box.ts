import { html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import style from "./Box.scss";

export const LitBoxSelector = "lit-box";

@customElement(LitBoxSelector)
export class LitBox extends LitElement {
  static styles = [unsafeCSS(style)];

  render() {
    return html`<div class="box"><slot></slot></div>`;
  }
}
