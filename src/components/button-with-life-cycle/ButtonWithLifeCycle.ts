import { unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { LitButton } from "../button/Button";
import style from "./ButtonWithLifeCycle.scss";

export const LitButtonWithLifeCycleSelector = "lit-button-with-life-cycle";

@customElement(LitButtonWithLifeCycleSelector)
export class LitButtonWithLifeCycle extends LitButton {
  static styles = [unsafeCSS(style)];

  constructor() {
    super();
    console.log("Button constructor");
  }

  connectedCallback() {
    super.connectedCallback();
    console.log("Button connectedCallback");
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    console.log("Button disconnectedCallback");
  }

  attributeChangedCallback(
    name: string,
    _old: string | null,
    value: string | null
  ) {
    super.attributeChangedCallback(name, _old, value);
    console.log("Button attributeChangedCallback", { name, _old, value });
  }
}
