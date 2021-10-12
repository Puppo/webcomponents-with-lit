import { html, LitElement, unsafeCSS } from "lit";
import { customElement, state } from "lit/decorators.js";
import { TableFooter, TableHeader } from "../../components/table/Table";
import styles from "./ExampleThree.scss";

export const LitExampleThreeSelector = "lit-example-three";

@customElement(LitExampleThreeSelector)
export class LitExampleThree extends LitElement {
  static styles = [unsafeCSS(styles)];

  @state()
  public header: TableHeader[] = [
    { title: "Position", label: "Pos" },
    "Team",
    { title: "Played", label: "Pld" },
    { title: "Won", label: "W" },
    { title: "Drawn", label: "D" },
    { title: "Lost", label: "L" },
    { title: "Goals", label: "or" },
    { title: "Goals", label: "gainst" },
    { title: "Goal", label: "difference" },
    { title: "Points", label: "Pts" },
    "Qualification or relegation",
  ];

  @state()
  public footer: TableFooter[] = [
    { title: "Position", label: "Pos" },
    "Team",
    { title: "Played", label: "Pld" },
    { title: "Won", label: "W" },
    { title: "Drawn", label: "D" },
    { title: "Lost", label: "L" },
    { title: "Goals", label: "or" },
    { title: "Goals", label: "gainst" },
    { title: "Goal", label: "difference" },
    { title: "Points", label: "Pts" },
    "Qualification or relegation",
  ];

  @state()
  public rows: string[][] = [
    [
      "1",
      "Leicester City",
      "38",
      "23",
      "12",
      "3",
      "68",
      "36",
      "+32",
      "81",
      "Qualification for the Champions League group stage",
    ],
    [
      "2",
      "Arsenal",
      "38",
      "20",
      "11",
      "7",
      "65",
      "36",
      "+29",
      "71",
      "Qualification for the Champions League group stage",
    ],
    [
      "3",
      "Tottenham Hotspur",
      "38",
      "19",
      "13",
      "6",
      "69",
      "35",
      "+34",
      "70",
      "Qualification for the Champions League group stage",
    ],
    [
      "4",
      "Manchester City",
      "38",
      "19",
      "9",
      "10",
      "71",
      "41",
      "+30",
      "66",
      "Qualification for the Champions League play-off round",
    ],
  ];

  render() {
    return html`
      <lit-hero
        type="info"
        title="Example Three"
        sub-title="Directive"
      ></lit-hero>
      <div class="columns is-centered">
        <lit-table
          .header=${this.header}
          .footer=${this.footer}
          .data=${this.rows}
        ></lit-table>
      </div>
    `;
  }
}
