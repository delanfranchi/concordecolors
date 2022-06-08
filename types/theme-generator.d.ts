import { LitElement } from "lit";
import chroma from "chroma-js";
export declare class ThemeGenerator extends LitElement {
    static styles: import("lit").CSSResult;
    primary: chroma.Color;
    tailwindClosestPrimary: string;
    neutral: string;
    primaryShades: any;
    neutralShades: any;
    statusColors: any;
    render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    private _commitValue;
    private _cleanInputValue;
    private _generateTheme;
    private _generateShades;
    private _setShades;
}
declare global {
    interface HTMLElementTagNameMap {
        "sonic-theme-generator": ThemeGenerator;
    }
}
