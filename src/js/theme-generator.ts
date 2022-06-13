import { html, css, LitElement } from "lit";

import { customElement, property, state } from "lit/decorators.js";
import { tailwindColors } from "./tailwind-colors.js";
import { tailwind } from "./sonic-tailwind.js";

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

      .palette-item {
        flex-shrink: 0;
        display: flex;
        position: relative;
        flex-direction: column;
        gap: 0.55rem;
      }

      .palette-main {
        display: flex;
        border-radius: 1rem;
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        position: relative;
        aspect-ratio: 4/3;
      }
      .palette-main-xs {
        aspect-ratio: 11/4;
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
  @property({ type: String }) base = "#ffffff";
  @property({ type: String }) maxContrastNeutral = "#111111";
  @property({ type: Number }) contrastLuminance = 0.002;
  @property({ type: String }) themeCSS = "";

  @state() tailwindClosestPrimary = "";

  @state() theme: any = {
    base: this.base,
    "base-content": this.neutral,
    primary: {
      DEFAULT: this.primary,
      content: defaultColors.base,
    },
    neutral: {
      DEFAULT: this.neutral,
      content: defaultColors.base,
    },
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

  render() {
    const statusColor = this._getStatusColor();
    return html`
      <div class="palette grid grid-cols-3 gap-8 items-start">
        <div class="palette-item">
          <div
            class="palette-main palette-main-xs"
            style="background-color:${this.base}"
          >
            <input
              id="base"
              class="palette-input"
              .value="${this.base}"
              @input=${this._commitValue}
              @blur=${this._cleanInputValue}
              @focus=${this._handleFocus}
            />
            <span class="legend">base</span>
          </div>

          <div
            class="palette-main palette-main-xs"
            style="background-color:${this.maxContrastNeutral}"
          >
            <input
              id="maxContrastNeutral"
              class="palette-input"
              .value="${this.maxContrastNeutral}"
              @input=${this._commitValue}
              @blur=${this._cleanInputValue}
              @focus=${this._handleFocus}
            />
            <span class="legend">Maximum contrast neutral</span>
          </div>
        </div>

        <div class="palette-item">
          <div class="palette-main" style="background-color:${this.primary}">
            <input
              id="primary"
              class="palette-input"
              .value="${this.primary}"
              style="color:${this.theme["primary"]["content"]}"
              @input=${this._commitValue}
              @blur=${this._cleanInputValue}
              @focus=${this._handleFocus}
            />
          </div>

          <div class="shades">
            ${Object.keys(this.theme["primary"]).map((shade: any, index) => {
              if (shade != "DEFAULT" && shade != "content") {
                return html` <div
                  class="shade-${index + 1}00"
                  style="background-color:${this.theme["primary"][shade]}"
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
              style="color:${this.theme["neutral"]["content"]}"
              @input=${this._commitValue}
              @focus=${this._handleFocus}
            />
          </div>
          <div class="shades">
            ${Object.keys(this.theme["neutral"]).map((shade: any, index) => {
              if (shade != "DEFAULT" && shade != "content") {
                return html` <div
                  class="shade-${index + 1}00"
                  style="background-color:${this.theme["neutral"][shade]}"
                ></div>`;
              } else {
                return "";
              }
            })}
          </div>
        </div>
      </div>

      <div class="grid grid-cols-4 gap-8 mt-8">
        ${Object.keys(statusColor).map(
          (status: any) => html`
            <div class="palette-item">
              <div
                class="palette-main"
                style="background-color:${this.theme[status].DEFAULT}"
              >
                <div class="text" style="color:${this.theme[status].content}">
                  ${this.theme[status].DEFAULT}
                </div>
              </div>
              <div class="shades">
                ${Object.keys(this.theme[status]).map((shade: any, index) => {
                  if (shade != "DEFAULT" && shade != "content") {
                    return html` <div
                      class="shade-${index + 1}00"
                      style="background-color:${this.theme[status][shade]}"
                    ></div>`;
                  } else {
                    return "";
                  }
                })}
              </div>
            </div>
          `
        )}
      </div>
    `;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._generateTheme();
  }

  private _randomTheme(): void {
    this.primary = chroma.random().hex();
    this._generateTheme();
  }

  // set property value from input value based on id
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

  // clean input value
  private _cleanInputValue(e: Event): void {
    const input = e.target as HTMLInputElement;
    input.value = input.value.trim();
  }

  // Select all text on focus
  private _handleFocus(e: Event): void {
    const input = e.target as HTMLInputElement;
    input.select();
  }

  private _getStatusColor() {
    return Object.keys(this.theme)
      .filter((key) => ["success", "info", "danger", "warning"].includes(key))
      .reduce((obj, key) => {
        return Object.assign(obj, {
          [key]: this.theme[key],
        });
      }, {});
  }
  private _generateTheme() {
    /**
     * For primary and neutral colors
     * get the closest color for tailwind object theme
     * with deltaE function
     */

    if (
      !(
        chroma.valid(this.primary) &&
        chroma.valid(this.neutral) &&
        chroma.valid(this.base) &&
        chroma.valid(this.maxContrastNeutral)
      )
    )
      return;

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

    const statusColor = this._getStatusColor();

    // Status colors
    // D'après des couleurs prédéfinies de tailwind
    Object.entries(statusColor).forEach((statusColor) => {
      const [colorKey] = statusColor;
      const color = chroma((defaultColors as any)[colorKey]);
      const hsl = color.hsl();
      const threshold = 0.5;

      // Modification de la hue. On ne modifie pas plus de X
      const maxHrotation =
        deltaH < 0 ? Math.max(-15, deltaH) : Math.min(15, deltaH);

      const h = Math.min(hsl[0] + maxHrotation);
      const s = hsl[1] + deltaS * threshold;
      const l = hsl[2];

      const newStatusColor = chroma.hsl(h, s, l).hex();

      // update the status colors
      this.theme[colorKey]["DEFAULT"] = newStatusColor;

      const shades: string[] = this._generateShades(newStatusColor);
      this._setShades(shades, this.theme[colorKey]);
      this._setContentColor(newStatusColor, this.theme[colorKey]);
    });

    // update the primary shades
    const primaryShades = this._generateShades(primaryColor);
    this._setShades(primaryShades, this.theme["primary"]);
    this._setContentColor(this.primary, this.theme["primary"]);
    this.theme["primary"]["DEFAULT"] = this.primary;

    // update the neutral shades
    const neutralShades = this._generateShades(chroma(this.neutral));
    this._setShades(neutralShades, this.theme["neutral"]);
    this._setContentColor(this.neutral, this.theme["neutral"]);

    // this.theme["neutral"]["DEFAULT"] = this.neutral;
    this.theme["base-content"] = this.neutral;
    this.theme["base"] = this.base;
    console.log(this.base);

    // Generate and set css
    this._setThemeCSS(this.theme);

    this.dispatchEvent(
      new CustomEvent("newTheme", { bubbles: true, composed: true })
    );
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
    // const [lighest, darkest] = [
    //   chroma(color).set("hsl.l", 0.95),
    //   chroma(color).set("hsl.l", 0.2),
    // ];

    return chroma
      .scale([this.base, color, this.maxContrastNeutral])
      .mode("lab")
      .padding([0.05, 0.2])
      .correctLightness()
      .colors(9);
  }

  private _setShades(shades: any, targetObject: any): void {
    if (shades.length > 0) {
      shades.forEach((shade: string, index: number) => {
        // const keyName = index == 0 ? "50" : index + "00";
        const keyName = index + 1 + "00";
        targetObject[keyName] = shade;
      });
    }
  }

  private _setThemeCSS(theme: any): void {
    // for each entry of theme object
    // generate css key and value
    const cssRules: String[] = [];

    for (const colorName of Object.entries(theme)) {
      if (typeof colorName[1] == "object" && colorName[1] != null) {
        Object.entries(colorName[1]).forEach((colorShade) => {
          if (
            !(colorName[0] == "neutral" && colorShade[0] == "DEFAULT") &&
            !(colorName[0] == "neutral" && colorShade[0] == "content")
          ) {
            const prefix = colorName[0] == "neutral" ? "base" : colorName[0];
            const suffix =
              colorShade[0] == "DEFAULT" ? "" : `-${colorShade[0]}`;
            cssRules.push(`--sc-${prefix + suffix} : ${colorShade[1]}`);
          }
        });
      } else {
        cssRules.push(`--sc-${colorName[0]}: ${colorName[1]};`);
      }
    }

    this.themeCSS = cssRules.join(";");

    // console.log(cssRules);
    // console.log(css);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sonic-theme-generator": ThemeGenerator;
  }
}
