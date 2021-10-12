import {
  LitButtonWithLifeCycle,
  LitButtonWithLifeCycleSelector,
} from "../components/button-with-life-cycle/ButtonWithLifeCycle";
import { LitButton, LitButtonSelector } from "../components/button/Button";
import { LitHero, LitHeroSelector } from "../components/hero/Hero";
import { LitBox, LitBoxSelector } from "./box/Box";
import { LitFormField, LitFormFieldSelector } from "./form-field/FormField";
import { LitNavbar, LitNavbarSelector } from "./navbar/Navbar";
import { LitTable, LitTableSelector } from "./table/Table";

declare global {
  interface HTMLElementTagNameMap {
    [LitNavbarSelector]: LitNavbar;
    [LitButtonSelector]: LitButton;
    [LitHeroSelector]: LitHero;
    [LitBoxSelector]: LitBox;
    [LitFormFieldSelector]: LitFormField;
    [LitTableSelector]: LitTable;
    [LitButtonWithLifeCycleSelector]: LitButtonWithLifeCycle;
  }
}
