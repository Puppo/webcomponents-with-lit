import { html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import style from "./Hero.scss";

export const LitHeroSelector = "lit-hero";

@customElement(LitHeroSelector)
export class LitHero extends LitElement {
  static styles = [unsafeCSS(style)];

  @property({
    type: String,
    attribute: "title",
  })
  public title!: string;

  @property({
    type: String,
    attribute: "sub-title",
  })
  public subTitle?: string;

  @property({
    type: String,
  })
  public type?: "primary" | "link" | "info" | "success" | "warning" | "danger";

  render() {
    const cssClass = classMap({
      hero: true,
      [`is-${this.type}`]: !!this.type,
    });
    return html` <section class=${cssClass}>
      <div class="hero-body">
        <p class="title">${this.title}</p>
        ${this.subTitle && html`<p class="subtitle">${this.subTitle}</p>`}
      </div>
    </section>`;
  }
}
