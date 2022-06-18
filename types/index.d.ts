import "@supersoniks/concorde/ui";
import { LitElement } from "lit";
import "./js/theme-generator.js";
import "./js/theme-preview/theme-preview.ts";
export declare class SonicComponent extends LitElement {
    static styles: import("lit").CSSResult[];
    hasPressedSpace: boolean;
    themeGenerator: any;
    themePreview: any;
    render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    _handleNewTheme(): void;
}
