import { html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import style from "./FormField.scss";

export const LitFormFieldSelector = "lit-form-field";

@customElement(LitFormFieldSelector)
export class LitFormField extends LitElement {
  static styles = [unsafeCSS(style)];

  @property({ type: String })
  label!: string;

  @property({ type: String })
  type: "text" | "password" | "email" | "tel" = "text";

  @property({ type: String })
  placeholder?: string;

  render() {
    return html`
      <div class="field">
        <label class="label">${this.label}</label>
        <div class="control">
          <input
            class="input"
            type=${this.type}
            placeholder="${ifDefined(this.placeholder)}"
          />
        </div>
      </div>
    `;
  }
}
