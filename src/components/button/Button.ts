import { html, LitElement, unsafeCSS } from "lit";
import { classMap } from "lit-html/directives/class-map.js";
import { customElement, property } from "lit/decorators.js";
import style from "./Button.scss";

export const LitButtonSelector = "lit-button";

@customElement(LitButtonSelector)
export class LitButton extends LitElement {
  static styles = [unsafeCSS(style)];

  @property({
    reflect: true,
    converter: {
      fromAttribute: (value: string) => {
        console.log(`LitButton -> converter -> fromAttribute`, value);
        if (["button", "submit", "reset"].includes(value)) {
          return value;
        }
        throw new Error(`LitButton -> Invalid type: ${value}`);
      },
      toAttribute: (value: string) => {
        console.log(`LitButton -> converter -> toAttribute`, value);
        if (["button", "submit", "reset"].includes(value)) {
          return value;
        }
        throw new Error(`LitButton -> Invalid type: ${value}`);
      },
    },
  })
  type: "button" | "submit" | "reset" = "button";

  @property({
    type: String,
    attribute: "style-type",
  })
  styleType?: "primary" | "link" | "info" | "success" | "warning" | "danger";

  onMouseOver(ev: MouseEvent): void {
    ev.preventDefault();
    ev.stopPropagation();
    this.dispatchEvent(
      new CustomEvent("mouseover", { bubbles: true, detail: this })
    );
  }

  onFocus(ev: FocusEvent): void {
    ev.preventDefault();
    ev.stopPropagation();
    this.dispatchEvent(new CustomFocusEvent({ bubbles: true }));
  }

  render() {
    const cssClass = classMap({
      button: true,
      [`is-${this.styleType}`]: !!this.styleType,
    });

    return html`
      <button
        type=${this.type}
        class=${cssClass}
        @mouseover=${this.onMouseOver}
        @focus=${this.onFocus}
      >
        <slot></slot>
      </button>
    `;
  }
}

export class CustomFocusEvent extends Event {
  constructor(eventInitDict?: EventInit) {
    super("custom-focus", eventInitDict || {});
  }
}
