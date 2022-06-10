import { LitElement } from "lit";
export declare class ThemeGenerator extends LitElement {
    static styles: import("lit").CSSResult;
    primary: string;
    neutral: string;
    hasPressedSpace: boolean;
    primaryShades: any;
    neutralShades: any;
    tailwindClosestPrimary: string;
    statusColors: any;
    theme: object;
    render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    private _randomTheme;
    private _commitValue;
    private _cleanInputValue;
    private _handleFocus;
    private _generateTheme;
    private _setContentColor;
    private _generateShades;
    private _setShades;
}
declare global {
    interface HTMLElementTagNameMap {
        "sonic-theme-generator": ThemeGenerator;
    }
}
