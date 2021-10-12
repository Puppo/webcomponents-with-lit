import { html, LitElement, TemplateResult, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import style from "./Table.scss";

export const LitTableSelector = "lit-table";

export type TableHeader =
  | string
  | {
      title: string;
      label: string;
    };

export type TableFooter = TableHeader;

@customElement(LitTableSelector)
export class LitTable extends LitElement {
  static styles = [unsafeCSS(style)];

  @property({ type: Array })
  header?: TableHeader[];

  @property({ type: Array })
  footer?: TableFooter[];

  @property({
    type: Array,
  })
  data!: string[][];

  private renderHeadOrFoot(row: TableHeader | TableFooter): TemplateResult {
    if (typeof row === "string") {
      return html`<th>${row}</th>`;
    }
    return html`<th><abbr title="${row.title}">${row.label}</abbr></th>`;
  }

  private renderRow(row: string[]): TemplateResult[] {
    return repeat(row, column => html`<td>${column}</td>`) as TemplateResult[];
  }

  render() {
    return html`<table class="table">
      ${this.header
        ? html`<thead>
            <tr>
              ${repeat(this.header, this.renderHeadOrFoot)}
            </tr>
          </thead>`
        : null}
      ${this.footer
        ? html`<tfoot>
            <tr>
              ${repeat(this.footer, this.renderHeadOrFoot)}
            </tr>
          </tfoot>`
        : null}
      <tbody>
        ${repeat(
          this.data,
          row =>
            html`<tr>
              ${this.renderRow(row)}
            </tr>`
        )}
      </tbody>
    </table>`;
  }
}
