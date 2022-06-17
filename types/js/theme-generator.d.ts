import { LitElement } from "lit";
export declare class ThemeGenerator extends LitElement {
    static styles: import("lit").CSSResult[];
    primary: string;
    neutral: string;
    base: string;
    maxContrastNeutral: string;
    contrastLuminance: number;
    themeCSS: string;
    tailwindClosestPrimary: string;
    theme: any;
    shadesHtml(colorName: string): import("lit-html").TemplateResult<1>;
    paletteHtml(colorName: string, shade?: boolean): import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    _randomTheme(): void;
    private _commitValue;
    private _cleanInputValue;
    private _handleFocus;
    private _getStatusColor;
    private _generateTheme;
    private _setContentColor;
    private _generateShades;
    private _setShades;
    private _setThemeCSS;
}
declare global {
    interface HTMLElementTagNameMap {
        "sonic-theme-generator": ThemeGenerator;
    }
}
