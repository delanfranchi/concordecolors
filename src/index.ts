import { html, LitElement, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { tailwind } from "./js/sonic-tailwind.js";
import { query } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import "./js/theme-generator.js";
import "./js/theme-preview/theme-preview.ts";

@customElement("sonic-app-theme")
export class SonicComponent extends LitElement {
  static styles = [
    tailwind,
    css`
      :host {
        display: block;
        padding: 4.5rem 4rem;
        min-height: 100vh;
      }

      .btn-container {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
      }

      .btn-generation {
        all: unset;
        font-size: 1.2rem;
        padding: 0.5em 1.2em;
        background-color: #000;
        color: #f5f5f5;
        border-radius: 999px;
        font-weight: bold;
        border: 2px solid;
        cursor: pointer;
      }

      .btn-generation:focus,
      .btn-generation:hover {
        background: #fff;
        color: #000;
      }
      button svg {
        display: inline-block;
        width: 1.1em;
        height: 1.1em;
        vertical-align: middle;
        margin-right: 0.2em;
      }
    `,
  ];

  @state() hasPressedSpace: boolean = false;
  @query("sonic-theme-generator") themeGenerator: any;

  render() {
    return html`
      <div class="contents"></div>
      <sonic-theme theme="auto">
        <div class="grid grid-cols-[minmax(0,1fr)_minmax(0,3.5fr)] gap-16">
          <div>
            <header class="sticky top-0">
              <div class="font-bold mb-3 leading-[.8em] text-7xl gap-2">
                concorde colors
              </div>
              <p class="text-lg leading-tight mb-4">
                Semantic colors for Concorde Design System, based on your
                primary color and Tailwind color scheme.
              </p>
              <div class="flex gap-3 items-center">
                <sonic-button
                  type="primary"
                  variant="outline"
                  size="lg"
                  @click=${() => {
                    this.themeGenerator?._randomTheme();
                  }}
                >
                  <span slot="prefix">
                    ${unsafeHTML(
                      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="w-5 h-5 inline-block"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M327.5 85.19L384 64L405.2 7.491C406.9 2.985 411.2 0 416 0C420.8 0 425.1 2.985 426.8 7.491L448 64L504.5 85.19C509 86.88 512 91.19 512 96C512 100.8 509 105.1 504.5 106.8L448 128L426.8 184.5C425.1 189 420.8 192 416 192C411.2 192 406.9 189 405.2 184.5L384 128L327.5 106.8C322.1 105.1 320 100.8 320 96C320 91.19 322.1 86.88 327.5 85.19V85.19zM257.8 187.3L371.8 240C377.5 242.6 381.1 248.3 381.1 254.6C381.1 260.8 377.5 266.5 371.8 269.1L257.8 321.8L205.1 435.8C202.5 441.5 196.8 445.1 190.6 445.1C184.3 445.1 178.6 441.5 176 435.8L123.3 321.8L9.292 269.1C3.627 266.5 0 260.8 0 254.6C0 248.3 3.627 242.6 9.292 240L123.3 187.3L176 73.29C178.6 67.63 184.3 64 190.6 64C196.8 64 202.5 67.63 205.1 73.29L257.8 187.3zM405.2 327.5C406.9 322.1 411.2 320 416 320C420.8 320 425.1 322.1 426.8 327.5L448 384L504.5 405.2C509 406.9 512 411.2 512 416C512 420.8 509 425.1 504.5 426.8L448 448L426.8 504.5C425.1 509 420.8 512 416 512C411.2 512 406.9 509 405.2 504.5L384 448L327.5 426.8C322.1 425.1 320 420.8 320 416C320 411.2 322.1 406.9 327.5 405.2L384 384L405.2 327.5z"/></svg>`
                    )}
                  </span>
                  <span class="font-bold">Random color</span>
                </sonic-button>
                ${!this.hasPressedSpace
                  ? html` <div class="text-sm text-neutral-400">
                      Or press space
                    </div>`
                  : ""}
              </div>

              <sonic-divider label="More options"></sonic-divider>
              <sonic-div
                formDataProvider="customSettings"
                class="grid grid-cols-2 gap-4"
              >
                <sonic-select size="sm" label="Background ">
                  <option value="base">base</option>
                  <option value="neutral-50">neutral-50</option>
                  <option value="neutral-100">neutral-100</option>
                  <option value="neutral-200">neutral-200</option>
                  <option value="neutral-300">neutral-300</option>
                  <option value="neutral-400">neutral-400</option>
                  <option value="neutral-500">neutral-500</option>
                  <option value="neutral-600">neutral-600</option>
                  <option value="neutral-700">neutral-700</option>
                  <option value="neutral-800">neutral-800</option>
                  <option value="neutral-900">neutral-900</option>
                </sonic-select>
                <sonic-select size="sm" label="Content color">
                  <option value="base">base</option>
                  <option value="neutral-50">neutral-50</option>
                  <option value="neutral-100">neutral-100</option>
                  <option value="neutral-200">neutral-200</option>
                  <option value="neutral-300">neutral-300</option>
                  <option value="neutral-400">neutral-400</option>
                  <option value="neutral-500">neutral-500</option>
                  <option value="neutral-600">neutral-600</option>
                  <option value="neutral-700">neutral-700</option>
                  <option value="neutral-800">neutral-800</option>
                  <option value="neutral-900" selected>neutral-900</option>
                </sonic-select>
              </sonic-div>
              <sonic-divider label="Export"></sonic-divider>

              <div class="mt-6">
                <sonic-div formDataProvider="themeSettings" class="mb-3 block">
                  <sonic-button
                    radio
                    name="export"
                    value="concorde"
                    variant="ghost"
                    >Concorde</sonic-button
                  >
                  <sonic-button
                    radio
                    name="export"
                    value="tailwind"
                    variant="ghost"
                  >
                    Tailwind</sonic-button
                  >
                </sonic-div>
                <sonic-textarea
                  .value="${JSON.stringify(
                    this.themeGenerator?.statusColors,
                    null,
                    2
                  )}"
                ></sonic-textarea>
              </div>
            </header>
          </div>
          <div>
            <sonic-theme-generator></sonic-theme-generator>
            <sonic-theme-preview class="mt-12 block"></sonic-theme-preview>
          </div>
        </div>
      </sonic-theme>
    `;
  }

  connectedCallback(): void {
    super.connectedCallback();
    // on key press space, generate a new color and update the input
    window.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.keyCode === 32) {
        e.preventDefault();
        this.themeGenerator?._randomTheme();
        if (this.hasPressedSpace == false) {
          this.hasPressedSpace = true;
        }
      }
    });
  }
}
