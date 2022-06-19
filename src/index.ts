import "@supersoniks/concorde/ui";

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
        min-height: 100vh;
      }

      sonic-theme {
        padding: 1rem clamp(4vw, 4vw, 4rem);
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
  @query("sonic-theme") themePreview: any;
  @query("#modalCode") modalCode: any;
  @query("#textarea-css") textareaCSS!: HTMLTextAreaElement;
  @query("#textarea-tailwind-concorde") textareaTailwindConcorde!: HTMLTextAreaElement;
  @query("#textarea-tailwind") textareaTailwind!: HTMLTextAreaElement;

  render() {
    return html`
      <sonic-theme theme="auto" background color>
        <div class="grid gap-12">
          <header class="lg:my-10 flex  flex-wrap gap-5  items-end">
            <div>
              <div
                class="text-5xl  lg:text-6xl xl:text-7xl gap-4 leading-none"
              >
                <span class="font-extrabold">concorde</span>
                <span>colors</span>
              </div>
              <div class="text-xl xl:text-5xl ">
                Semantic colors for concorde design system.
              </div>
            </div>
            <div class="flex gap-3 items-end lg:ml-auto">
              <div>
                <div class="text-center">
                  ${
                    !this.hasPressedSpace
                      ? html` <div class="text-sm text-neutral-400 mb-1">
                          Or press space
                        </div>`
                      : ""
                  }
                  <sonic-button
                    type="neutral"
                    variant="outline"
                    size="sm"
                    minWidth="8.5rem"
                    @click=${() => {
                      this.themeGenerator?._randomTheme();
                    }}
                  >
                    <span slot="prefix">
                      ${unsafeHTML(
                        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="w-5 h-5 inline-block"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M327.5 85.19L384 64L405.2 7.491C406.9 2.985 411.2 0 416 0C420.8 0 425.1 2.985 426.8 7.491L448 64L504.5 85.19C509 86.88 512 91.19 512 96C512 100.8 509 105.1 504.5 106.8L448 128L426.8 184.5C425.1 189 420.8 192 416 192C411.2 192 406.9 189 405.2 184.5L384 128L327.5 106.8C322.1 105.1 320 100.8 320 96C320 91.19 322.1 86.88 327.5 85.19V85.19zM257.8 187.3L371.8 240C377.5 242.6 381.1 248.3 381.1 254.6C381.1 260.8 377.5 266.5 371.8 269.1L257.8 321.8L205.1 435.8C202.5 441.5 196.8 445.1 190.6 445.1C184.3 445.1 178.6 441.5 176 435.8L123.3 321.8L9.292 269.1C3.627 266.5 0 260.8 0 254.6C0 248.3 3.627 242.6 9.292 240L123.3 187.3L176 73.29C178.6 67.63 184.3 64 190.6 64C196.8 64 202.5 67.63 205.1 73.29L257.8 187.3zM405.2 327.5C406.9 322.1 411.2 320 416 320C420.8 320 425.1 322.1 426.8 327.5L448 384L504.5 405.2C509 406.9 512 411.2 512 416C512 420.8 509 425.1 504.5 426.8L448 448L426.8 504.5C425.1 509 420.8 512 416 512C411.2 512 406.9 509 405.2 504.5L384 448L327.5 426.8C322.1 425.1 320 420.8 320 416C320 411.2 322.1 406.9 327.5 405.2L384 384L405.2 327.5z"/></svg>`
                      )}
                    </span>
                    <span class="font-bold uppercase">Random</span>
                  </sonic-button>
                </div>
              </div>
                <sonic-button
                
                minWidth="8.5rem"
                  @click=${
                  this.openModalCode
                } size="sm"> <span class="font-bold uppercase">Export code</span></sonic-button>
                <sonic-modal
                  id="modalCode"
                  maxWidth="80rem"
                  width="90%"
                >
                  <sonic-modal-close></sonic-modal-close>
                  <sonic-modal-content class="grid grid-cols-3 gap-8 w-full">
                    <div>
                      <div class="text-3xl leading-none mb-3 "><span class="font-bold">CSS</span><br> properties</div>

                      <sonic-textarea
                        rows="28"
                        class="text-[length:12px] "
                        size="xs"
                        id="textarea-css"
                      >
                      </sonic-textarea>
                    </div>
                    <div>
                      <div class="text-3xl leading-none  mb-3">
                          <span class="font-bold">Tailwind</span><br> with concorde 
                          </div>

                        <sonic-textarea rows="28" id="textarea-tailwind-concorde" class="font-monospace" size="xs">
                        </sonic-textarea>
                    </div>
                    <div>
                      <div class="text-3xl  leading-none mb-3">
                        <span class="font-bold">Tailwind</span><br>without concorde</div>
                        <sonic-textarea rows="28" id="textarea-tailwind" class="font-monospace" size="xs">
                        </sonic-textarea>
                    </div>
                  </sonic-modal-content>
                </sonic-modal>
              </div>
            </div>
          </header>
          <sonic-theme-generator
            @newTheme=${this._handleNewTheme}
          ></sonic-theme-generator>
          <sonic-theme-preview class="mt-24 block"></sonic-theme-preview>
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

  openModalCode(): void {
    console.log(this.modalCode);
    this.modalCode.show();
  }

  _handleNewTheme(): void {
    if (this.themeGenerator?.themeCSS != null) {
      this.themePreview.setAttribute("style", this.themeGenerator?.themeCSS);

      this.textareaCSS.value = `sonic-theme {\n${this.themeGenerator?.themeCSS
        .replaceAll(";", ";\n")
        .replaceAll("--sc", "  --sc")}\n}`;

      if (this.themeGenerator?.theme) {
        const tailwindConfig = {
          colors: {
            ...this.themeGenerator?.theme,
          },
        };
        this.textareaTailwind.value = JSON.stringify(tailwindConfig, null, 2);
      }

     const tailwindConcordeConf =  {
      colors : {
        transparent: "transparent",
        current: "currentColor",
        neutral: {
          0: "var(--sc-base)",
          50: "var(--sc-base-50)",
          100: "var(--sc-base-100)",
          200: "var(--sc-base-200)",
          300: "var(--sc-base-300)",
          400: "var(--sc-base-400)",
          500: "var(--sc-base-500)",
          600: "var(--sc-base-600)",
          700: "var(--sc-base-700)",
          800: "var(--sc-base-800)",
          900: "var(--sc-base-900)",
          content: "var(--sc-base-content)",
        },
        primary: {
          50: "var(--sc-primary-50)",
          100: "var(--sc-primary-100)",
          200: "var(--sc-primary-200)",
          300: "var(--sc-primary-300)",
          400: "var(--sc-primary-400)",
          500: "var(--sc-primary-500)",
          600: "var(--sc-primary-600)",
          700: "var(--sc-primary-700)",
          800: "var(--sc-primary-800)",
          900: "var(--sc-primary-900)",
          DEFAULT: "var(--sc-primary)",
          content: "var(--sc-primary-content)",
        },
        success: {
          50: "var(--sc-success-50)",
          100: "var(--sc-success-100)",
          200: "var(--sc-success-200)",
          300: "var(--sc-success-300)",
          400: "var(--sc-success-400)",
          500: "var(--sc-success-500)",
          600: "var(--sc-success-600)",
          700: "var(--sc-success-700)",
          800: "var(--sc-success-800)",
          900: "var(--sc-success-900)",
          DEFAULT: "var(--sc-success)",
          content: "var(--sc-success-content)",
        },
        danger: {
          50: "var(--sc-danger-50)",
          200: "var(--sc-danger-200)",
          300: "var(--sc-danger-300)",
          400: "var(--sc-danger-400)",
          500: "var(--sc-danger-500)",
          600: "var(--sc-danger-600)",
          700: "var(--sc-danger-700)",
          800: "var(--sc-danger-800)",
          900: "var(--sc-danger-900)",
          DEFAULT: "var(--sc-danger)",
          content: "var(--sc-danger-content)",
        },
        warning: {
          50: "var(--sc-warning-50)",
          200: "var(--sc-warning-200)",
          300: "var(--sc-warning-300)",
          400: "var(--sc-warning-400)",
          500: "var(--sc-warning-500)",
          600: "var(--sc-warning-600)",
          700: "var(--sc-warning-700)",
          800: "var(--sc-warning-800)",
          900: "var(--sc-warning-900)",
          DEFAULT: "var(--sc-warning)",
          content: "var(--sc-warning-content)",
        },
        info: {
          50: "var(--sc-info-50)",
          200: "var(--sc-info-200)",
          300: "var(--sc-info-300)",
          400: "var(--sc-info-400)",
          500: "var(--sc-info-500)",
          600: "var(--sc-info-600)",
          700: "var(--sc-info-700)",
          800: "var(--sc-info-800)",
          900: "var(--sc-info-900)",
          DEFAULT: "var(--sc-info)",
          content: "var(--sc-info-content)",
        },
        contrast: {
          DEFAULT: "var(--sc-contrast)",
          content: "var(--sc-contrast-content)",
        }
      }
      }

      this.textareaTailwindConcorde.value = JSON.stringify(tailwindConcordeConf, null, 2);



    }
  }
}
// this.dispatchEvent(new Event("myClick"));
