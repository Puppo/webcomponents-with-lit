import { html, LitElement, unsafeCSS } from "lit";
import { customElement, query } from "lit/decorators.js";
import styles from "./ExampleOne.scss";

export const LitExampleOneSelector = "lit-example-one";

@customElement(LitExampleOneSelector)
export class LitExampleOne extends LitElement {
  static styles = [unsafeCSS(styles)];

  @query(".message")
  message!: HTMLDivElement;

  onEvent(content: string): (ev: Event) => void {
    return (ev: Event) => {
      console.log(content, ev.target);
      const newEl = document.createElement("lit-box");
      newEl.textContent = content;
      this.message.innerHTML = "";
      this.message.appendChild(newEl);
    };
  }

  render() {
    return html`
      <lit-hero
        type="info"
        title="Example One"
        sub-title="Component"
      ></lit-hero>
      <div class="columns is-centered">
        <div class="column has-text-centered">
          <lit-button
            type="button"
            style-type="primary"
            @click=${this.onEvent("Button onClicked")}
            @mouseover=${this.onEvent("Button onMouseOver")}
            @custom-focus=${this.onEvent("Button onCustomFocus")}
          >
            Confirm
          </lit-button>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="message"></div>
        </div>
      </div>
    `;
  }
}
