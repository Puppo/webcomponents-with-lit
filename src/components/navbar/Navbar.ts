import { html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import style from "./Navbar.scss";

export const LitNavbarSelector = "lit-navbar";

@customElement(LitNavbarSelector)
export class LitNavbar extends LitElement {
  static styles = [unsafeCSS(style)];

  render() {
    return html`
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="#/">
            <img
              src="https://lit.dev/images/logo.svg"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="#/">Home</a>

            <a class="navbar-item" href="#/example-one">One</a>
            <a class="navbar-item" href="#/example-two">Two</a>
            <a class="navbar-item" href="#/example-three">Three</a>
          </div>
        </div>
      </nav>
    `;
  }
}
