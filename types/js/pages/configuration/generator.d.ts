import { LitElement, PropertyValueMap } from "lit";
export declare const defaultColors: {
    primary: string;
    secondary: string;
    danger: string;
    success: string;
    warning: string;
    info: string;
    base: string;
    maxContrastNeutral: string;
    neutral: string;
};
declare const ThemeGenerator_base: (new (...args: any[]) => import("@supersoniks/concorde/core/mixins/Subscriber").SubscriberInterface<import("@supersoniks/concorde/core/_types/types.js").CoreJSType>) & typeof LitElement;
export declare class ThemeGenerator extends ThemeGenerator_base {
    static styles: import("lit").CSSResult;
    primary: string;
    secondary: string;
    neutral: string;
    base: string;
    maxContrastNeutral: string;
    rounded: "none" | 'md' | 'lg';
    border: "sm" | 'md';
    flat: boolean;
    inputBordered: boolean;
    buttonPills: boolean;
    tailwindClosestPrimary: string;
    settings: any;
    theme: any;
    themeCSS?: string;
    sonicTheme: Array<HTMLElement>;
    render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    randomTheme(): void;
    mainSlotChange(): void;
    protected willUpdate(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    private _getStatusColor;
    generateTheme(): void;
    private _generateShades;
    private generateCss;
}
declare global {
    interface HTMLElementTagNameMap {
        "concorde-theme-generator": ThemeGenerator;
    }
}
export {};
