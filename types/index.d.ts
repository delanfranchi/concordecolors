import '@supersoniks/concorde/core';
import { LitElement } from 'lit';
import './js/pages/configuration/form.ts';
import './js/pages/configuration/generator.ts';
export declare class SonicComponent extends LitElement {
    static styles: any[];
    themeCss?: string;
    modalIsVisible: boolean;
    _code: HTMLPreElement | undefined;
    handleNewTheme(e: CustomEvent): void;
    showModal(): void;
    handleHideModal(): void;
    copyCode(e: Event): void;
    randomise(): void;
    render(): import("lit-html").TemplateResult<1>;
}
