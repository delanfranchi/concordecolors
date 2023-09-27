import { LitElement } from "lit";
import chroma from "chroma-js";
declare type paletteOptions = {
    shade: boolean;
    input: boolean;
};
export declare class ThemeGenerator extends LitElement {
    static styles: any[];
    primary: chroma.Color;
    neutral: string;
    base: string;
    maxContrastNeutral: string;
    contrastLuminance: number;
    themeCSS: string;
    tailwindClosestPrimary: string;
    theme: any;
    shadesHtml(colorName: string): import("lit-html").TemplateResult<1>;
    paletteHtml(colorName: string, options: paletteOptions): import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    _randomTheme(): void;
    private _commitValue;
    private _getStatusColor;
    private _generateTheme;
    private _generateShades;
    private _setThemeCSS;
}
declare global {
    interface HTMLElementTagNameMap {
        "sonic-theme-generator": ThemeGenerator;
    }
}
export {};
