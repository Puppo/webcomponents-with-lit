import { html, LitElement, unsafeCSS } from "lit";
import { customElement, query } from "lit/decorators.js";
import { LitButtonWithLifeCycle } from "../../components";
import styles from "./ExampleTwo.scss";

export const LitExampleTwoSelector = "lit-example-tow";

@customElement(LitExampleTwoSelector)
export class LitExampleTwo extends LitElement {
  static styles = [unsafeCSS(styles)];

  @query("#my-button")
  button!: LitButtonWithLifeCycle;

  @query("#box-one")
  boxOne!: HTMLElement;

  @query("#box-two")
  boxTwo!: HTMLElement;

  private onClick() {
    if (this.boxOne.contains(this.button)) {
      this.boxTwo.appendChild(this.button);
    } else {
      this.boxOne.appendChild(this.button);
    }
  }

  private onChangeColorClick() {
    this.button.setAttribute(
      "style-type",
      this.button.styleType === "primary" ? "warning" : "primary"
    );
  }

  render() {
    return html`
      <lit-hero
        type="info"
        title="Example Two"
        sub-title="Lifecycle"
      ></lit-hero>
      <div class="columns is-centered">
        <div id="box-one" class="column is-three-quarters">
          <lit-button-with-life-cycle
            id="my-button"
            type="button"
            style-type="primary"
            @click=${() => this.onClick()}
          >
            Life Cycle
          </lit-button-with-life-cycle>
        </div>
      </div>
      <div class="columns is-centered">
        <div id="box-two" class="column is-three-quarters"></div>
      </div>

      <div class="columns is-centered">
        <div class="column is-three-quarters">
          <lit-button
            id="my-button"
            type="button"
            style-type="info"
            @click=${this.onChangeColorClick}
          >
            Change Color
          </lit-button>
        </div>
      </div>
    `;
  }
}
