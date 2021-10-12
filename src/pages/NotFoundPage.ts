import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

export const litNotFoundPageSelector = "lit-not-found"

@customElement(litNotFoundPageSelector)
export class LitNotFoundPage extends LitElement {
    render() {
        return html`
            <h1>404 Page Not Found!</h1>
        `;
    }
}