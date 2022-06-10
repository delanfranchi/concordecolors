import { html, css, LitElement } from "lit";

import { customElement, property, state } from "lit/decorators.js";
import { tailwindColors } from "./tailwind-colors.js";
import { tailwind } from "./sonic-tailwind.js";
import "@supersoniks/concorde/core";

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
  static styles = [
    tailwind,
    css`
      * {
        box-sizing: border-box;
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
    `,
  ];
  // e298a3
  @property({ type: String }) primary = "#bab96e";
  @property({ type: String }) neutral = defaultColors.gray;

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

    return html` <div class="palette">
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
    </div>`;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._generateTheme();
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
