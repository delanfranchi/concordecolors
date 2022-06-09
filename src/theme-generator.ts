import { html, css, LitElement } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import { customElement, property, state } from "lit/decorators.js";
import { tailwindColors } from "./tailwind-colors.js";

import chroma from "chroma-js";

const defaultColors = {
  primary: "#0070f3",
  danger: "#e11d48",
  success: "#10b981",
  warning: "#fb923c",
  info: "#3b82f6",
  base: "#fff",
  dark: "#000",
  gray: "#6b7280",
};

@customElement("sonic-theme-generator")
export class ThemeGenerator extends LitElement {
  static styles = css`
    * {
      box-sizing: border-box;
    }

    :host {
      display: block;
      position: absolute;
      inset: 0 !important;
    }
    .app-header-container {
      display: flex;
      flex-direction: column;
    }
    /**/
    .title {
      font-size: 4rem;
      line-height: 0.8;
      font-weight: bold;
    }
    .intro {
      font-size: 1.25rem;
    }
    .app {
      display: grid;
      inset: 4.5rem 4rem;
      gap: 4rem;
      position: absolute;
      grid-template-columns: minmax(0, 1fr) minmax(0, 3.5fr);
    }

    .palette {
      display: grid;
      align-self: center;
      position: relative;
      gap: 2rem;
      grid-template-columns: repeat(1, minmax(0, 1fr));
      grid-template-rows: repeat(6, minmax(0, 1fr));
    }

    @media (min-width: 768px) {
      .palette {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-template-rows: repeat(2, minmax(0, 1fr));
      }
    }

    .palette-item {
      flex-shrink: 0;
      display: flex;
      position: relative;
      flex-direction: column;
      gap: 0.8rem;
    }

    .palette-main {
      display: flex;
      border-radius: 1rem;
      aspect-ratio: 4/3;
      width: 100%;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
      position: relative;
    }

    .text,
    .palette-input {
      padding: 1rem;
      all: unset;
      text-align: center;
      appearance: none;
      color: #666;
      border-radius: 1rem;
      font-family: monospace;
      font-size: 2rem;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 0.85;
      z-index: 2;
      overflow: hidden;
    }

    .palette-input:focus,
    .palette-input:hover {
      cursor: pointer;
      box-shadow: 0 0 0 0.4rem inset #000;
    }

    input::selection {
      opacity: 1;
      background-color: #ccc;
    }

    .hidden {
      display: none;
    }

    .shades {
      width: calc(100% - 2.8rem);
      display: flex;
      gap: 0.6rem;
      margin: 0 1.4rem;
      flex-shrink: 0;
    }
    .shades div {
      border-radius: 99px;
      aspect-ratio: 1;
      flex-grow: 1;
    }

    textarea {
      background-color: #f5f5f5;
      border-radius: 0.5rem;
      padding: 0.8rem;
      width: 100%;
      border: 0;
      font-family: monospace;
      font-size: 12px;
      margin-top: 4rem;
      height: 15rem;
      resize: vertical;
      flex-grow: 1;
    }

    textarea::-webkit-scrollbar {
      width: 0.4rem;
    }
    textarea::-webkit-scrollbar-track {
      width: 0.4rem;
    }
    textarea::-webkit-scrollbar-thumb {
      background-color: #ccc;
      width: 5px;
      border-radius: 10px;
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
    .btn-help {
      color: #999;
      font-size: 0.9rem;
      white-space: nowrap;
      margin: 0.5rem 0 0.5rem 1rem;
    }
  `;
  // e298a3
  @property({ type: String }) primary = "#bab96e";
  @property({ type: String }) neutral = defaultColors.gray;
  @state() hasPressedSpace: boolean = false;

  @state() primaryShades: any = {};
  @state() neutralShades: any = {};

  @state() tailwindClosestPrimary = "";

  @state() statusColors: any = {
    info: {
      DEFAULT: defaultColors.info,
      content: defaultColors.base,
    },
    success: {
      DEFAULT: defaultColors.success,
      content: defaultColors.base,
    },
    warning: {
      DEFAULT: defaultColors.warning,
      content: defaultColors.base,
    },
    danger: {
      DEFAULT: defaultColors.danger,
      content: defaultColors.base,
    },
  };

  @state() theme: object = {};

  render() {
    const shadesTemplates: any = [];
    for (let i = 0; i < 10; i++) {
      shadesTemplates.push(html`<div class="shade-${i}00"></li>`);
    }

    return html`<div class="app">
      <div class="app-header-container">
        <header>
          <div class="title">concorde colors</div>
          <p class="intro">
            Semantic colors for Concorde Design System, based on your primary
            color and Tailwind color scheme.
          </p>
          <div class="btn-container">
            <button class="btn-generation" @click=${this._randomTheme}>
              ${unsafeHTML(
                `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M327.5 85.19L384 64L405.2 7.491C406.9 2.985 411.2 0 416 0C420.8 0 425.1 2.985 426.8 7.491L448 64L504.5 85.19C509 86.88 512 91.19 512 96C512 100.8 509 105.1 504.5 106.8L448 128L426.8 184.5C425.1 189 420.8 192 416 192C411.2 192 406.9 189 405.2 184.5L384 128L327.5 106.8C322.1 105.1 320 100.8 320 96C320 91.19 322.1 86.88 327.5 85.19V85.19zM257.8 187.3L371.8 240C377.5 242.6 381.1 248.3 381.1 254.6C381.1 260.8 377.5 266.5 371.8 269.1L257.8 321.8L205.1 435.8C202.5 441.5 196.8 445.1 190.6 445.1C184.3 445.1 178.6 441.5 176 435.8L123.3 321.8L9.292 269.1C3.627 266.5 0 260.8 0 254.6C0 248.3 3.627 242.6 9.292 240L123.3 187.3L176 73.29C178.6 67.63 184.3 64 190.6 64C196.8 64 202.5 67.63 205.1 73.29L257.8 187.3zM405.2 327.5C406.9 322.1 411.2 320 416 320C420.8 320 425.1 322.1 426.8 327.5L448 384L504.5 405.2C509 406.9 512 411.2 512 416C512 420.8 509 425.1 504.5 426.8L448 448L426.8 504.5C425.1 509 420.8 512 416 512C411.2 512 406.9 509 405.2 504.5L384 448L327.5 426.8C322.1 425.1 320 420.8 320 416C320 411.2 322.1 406.9 327.5 405.2L384 384L405.2 327.5z"/></svg>`
              )}
              Random color
            </button>
            ${!this.hasPressedSpace
              ? html` <div class="btn-help">Or press space</div>`
              : ""}
          </div>
        </header>
        <textarea>${JSON.stringify(this.statusColors, null, 2)}</textarea>
      </div>
      <div class="palette">
        <div class="palette-item">
          <div class="palette-main" style="background-color:${this.primary}">
            <input
              id="primary"
              class="palette-input"
              .value="${this.primary}"
              style="color:${this.primaryShades["content"]}"
              @input=${this._commitValue}
              @blur=${this._cleanInputValue}
              @focus=${this._handleFocus}
            />
          </div>
          <div class="shades">
            ${Object.keys(this.primaryShades).map((shade: any, index) => {
              if (shade != "DEFAULT" && shade != "content") {
                return html` <div
                  class="shade-${index}00"
                  style="background-color:${this.primaryShades[shade]}"
                ></div>`;
              } else {
                return "";
              }
            })}
          </div>
        </div>

        <div class="palette-item ">
          <div class="palette-main" style="background-color:${this.neutral}">
            <input
              id="neutral"
              class="palette-input"
              .value="${this.neutral}"
              style="color:${this.neutralShades["content"]}"
              @input=${this._commitValue}
              @focus=${this._handleFocus}
            />
          </div>
          <div class="shades">
            ${Object.keys(this.neutralShades).map((shade: any, index) => {
              if (shade != "DEFAULT" && shade != "content") {
                return html` <div
                  class="shade-${index}00"
                  style="background-color:${this.neutralShades[shade]}"
                ></div>`;
              } else {
                return "";
              }
            })}
          </div>
        </div>
        ${Object.keys(this.statusColors).map(
          (status: any) => html`
            <div class="palette-item">
              <div
                class="palette-main"
                style="background-color:${this.statusColors[status].DEFAULT}"
              >
                <div
                  class="text"
                  style="color:${this.statusColors[status].content}"
                >
                  ${this.statusColors[status].DEFAULT}
                </div>
              </div>
              <div class="shades">
                ${Object.keys(this.statusColors[status]).map(
                  (shade: any, index) => {
                    if (shade != "DEFAULT" && shade != "content") {
                      return html` <div
                        class="shade-${index}00"
                        style="background-color:${this.statusColors[status][
                          shade
                        ]}"
                      ></div>`;
                    } else {
                      return "";
                    }
                  }
                )}
              </div>
            </div>
          `
        )}
      </div>
    </div>`;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._generateTheme();

    // on key press space, generate a new color and update the input
    window.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.keyCode === 32) {
        e.preventDefault();
        this._randomTheme();

        if (this.hasPressedSpace == false) {
          this.hasPressedSpace = true;
        }
      }
    });
  }

  private _randomTheme(): void {
    this.primary = chroma.random().hex();
    this._generateTheme();
  }

  private _commitValue(e: Event): void {
    const input = e.target as HTMLInputElement;
    const id = input.id;
    const value = input.value.trim();

    const previousValue = (this as any)[id];
    (this as any)[id] = value;
    if (previousValue != value) {
      this._generateTheme();
    }
  }

  private _cleanInputValue(e: Event): void {
    const input = e.target as HTMLInputElement;
    input.value = input.value.trim();
  }

  private _handleFocus(e: Event): void {
    const input = e.target as HTMLInputElement;
    input.select();
  }

  private _generateTheme() {
    /**
     * For primary and neutral colors
     * get the closest color for tailwind object theme
     * with deltaE function
     */

    if (!(chroma.valid(this.primary) && chroma.valid(this.neutral))) return;
    const primaryColor = chroma(this.primary);

    let colorInfos = [];
    for (const colorName of Object.entries(tailwindColors)) {
      if (typeof colorName[1] == "object") {
        Object.entries(colorName[1]).forEach((colorShade) => {
          colorInfos.push({
            key: colorName[0] + "-" + colorShade[0],
            delta: chroma.deltaE(colorShade[1], primaryColor),
            color: colorShade[1],
          });
        });
      } else {
        colorInfos.push({
          key: colorName[0],
          delta: chroma.deltaE(colorName[1], primaryColor),
          color: colorName[1],
        });
      }
    }

    // ORDER By delta all colors from tailwindColors
    var tailwindColorsByDelta = colorInfos.slice(0);
    tailwindColorsByDelta.sort(function (a, b) {
      return a.delta - b.delta;
    });

    // set the closest primary color
    this.tailwindClosestPrimary = tailwindColorsByDelta[0]["color"];
    const primaryColorHsl = primaryColor.hsl();
    const twindColorHsl = chroma(tailwindColorsByDelta[0]["color"]).hsl();
    const deltaH =
      isNaN(primaryColorHsl[0]) || isNaN(twindColorHsl[0])
        ? 0
        : primaryColorHsl[0] - twindColorHsl[0];
    const deltaS = primaryColorHsl[1] - twindColorHsl[1];

    // Status colors
    Object.entries(this.statusColors).forEach((statusColor) => {
      const [colorKey] = statusColor;
      const color = chroma((defaultColors as any)[colorKey]);
      const hsl = color.hsl();
      const threshold = 0.5;

      // Modification de la hue. On ne modifie pas plus X
      // et on ne dépasse jamais 1 ou 360degrés.
      const maxHrotation =
        deltaH < 0 ? Math.max(-15, deltaH) : Math.min(15, deltaH);

      const h = Math.min(hsl[0] + maxHrotation);
      const s = hsl[1] + deltaS * threshold;
      const l = hsl[2];

      const newStatusColor = chroma.hsl(h, s, l).hex();
      // update the status colors
      this.statusColors[colorKey]["DEFAULT"] = newStatusColor;

      const shades: string[] = this._generateShades(newStatusColor);
      this._setShades(shades, this.statusColors[colorKey]);
      this._setContentColor(newStatusColor, this.statusColors[colorKey]);
    });

    // update the primary shades
    const primaryShades = this._generateShades(primaryColor);
    this._setShades(primaryShades, this.primaryShades);
    this._setContentColor(this.primary, this.primaryShades);

    // update the neutral shades
    const neutralShades = this._generateShades(chroma(this.neutral));
    this._setShades(neutralShades, this.neutralShades);
    this._setContentColor(this.neutral, this.neutralShades);
  }

  private _setContentColor(color: string, targetObject: any): void {
    // Get contrast color for text from the new color
    if (chroma(color).luminance() < 0.2) {
      targetObject["content"] = defaultColors.base;
    } else {
      targetObject["content"] = defaultColors.dark;
    }
  }

  private _generateShades(color: any): string[] {
    const [lighest, darkest] = [
      chroma(color).set("hsl.l", 0.95),
      chroma(color).set("hsl.l", 0.2),
    ];

    return chroma
      .scale([lighest, color, darkest])
      .correctLightness()
      .colors(10);
  }

  private _setShades(shades: any, targetObject: any): void {
    if (shades.length > 0) {
      shades.forEach((shade: string, index: number) => {
        const keyName = index == 0 ? "50" : index + "00";
        targetObject[keyName] = shade;
      });
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sonic-theme-generator": ThemeGenerator;
  }
}
