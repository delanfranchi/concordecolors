import '@supersoniks/concorde/core';
import { LitElement } from 'lit';
import './theme-preview/theme-preview.ts';
export declare class SonicComponent extends LitElement {
    static styles: any[];
    hasPressedSpace: boolean;
    themeGenerator: any;
    themePreview: any;
    modalCode: any;
    textareaCSS: HTMLTextAreaElement;
    textareaTailwindConcorde: HTMLTextAreaElement;
    textareaTailwind: HTMLTextAreaElement;
    render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    openModalCode(): void;
    _handleNewTheme(): void;
}
