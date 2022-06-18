import { html, css, LitElement } from "lit";

import { customElement, property, state } from "lit/decorators.js";
import { tailwindColors } from "./tailwind-colors.js";
import { tailwind } from "./sonic-tailwind.js";

import chroma, { Color } from "chroma-js";

const defaultColors = {
  primary: "#0070f3",
  danger: "#dc2626",
  success: "#10b981",
  warning: "#fb923c",
  info: "#3b82f6",
  base: "#fff",
  maxNeutral: "#111827",
  neutral: "#1f2937",
};

type paletteOptions = {
  shade: boolean;
  input: boolean;
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
        border-radius: 0.8rem;
        width: 100%;
        flex-grow: 1;
        position: relative;
        box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.1);
      }

      .palette-main:focus-within {
        box-shadow: 0 0 0 0.2rem #000;
      }

      .text,
      .palette-input {
        all: unset;
        padding: 2rem 1rem;
        text-align: center;
        appearance: none;
        color: #666;
        border-radius: 1rem;
        font-family: monospace;
        font-size: 2rem;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        line-height: 0.85;
        z-index: 2;
        color: inherit;
        overflow: hidden;
      }

      input[type="color"] {
        all: unset;
        opacity: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        appearance: none;
        z-index: 100;
        cursor: pointer;
      }

      input::selection {
        opacity: 1;
        background-color: #ccc;
      }
      .legend {
        font-size: 0.85rem;
        font-family: consolas;
        position: absolute;
        bottom: 0.65rem;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0.5;
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
  @property({ type: String }) primary = chroma.random();
  @property({ type: String }) neutral = defaultColors.neutral;
  @property({ type: String }) base = defaultColors.base;
  @property({ type: String }) maxContrastNeutral = defaultColors.maxNeutral;
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

  shadesHtml(colorName: string) {
    return html`<div class="shades">
      ${Object.keys(this.theme[colorName])?.map((shade: any, index) => {
        const keyName = index == 0 ? "50" : index + "00";

        if (shade != "DEFAULT" && shade != "content") {
          return html`<div
            class="shade-${keyName}"
            style="background-color:${this.theme[colorName][shade]}"
          ></div>`;
        } else {
          return "";
        }
      })}
    </div>`;
  }

  paletteHtml(colorName: string, options: paletteOptions) {
    const backgroundColor =
      (this as any)[colorName] || this.theme[colorName].DEFAULT;

    let contentColor = this.theme[colorName]?.content || "#ffffff";
    if (colorName == "base") {
      contentColor = this.neutral;
    } else if (colorName == "maxContrastNeutral") {
      contentColor = this.base;
    } else if (colorName == "neutral") {
      contentColor = this.base;
    }

    const text = this.theme[colorName]?.DEFAULT || (this as any)[colorName];

    return html`<div class="palette-item">
      <div
        class="palette-main"
        style="background-color:${backgroundColor};color:${contentColor}"
      >
        ${options.input
          ? html`<input
              data-color=${colorName}
              .value=${(this as any)[colorName]}
              type="color"
              @input=${this._commitValue}
            />`
          : ""}
        <div class="text">${text}</div>
        <span class="legend">${colorName}</span>
      </div>
      ${options.shade ? this.shadesHtml(colorName) : ""}
    </div>`;
  }

  render() {
    const statusColor = this._getStatusColor();
    return html`
      <div class="palette grid grid-cols-4 gap-8 items-start">
        ${this.paletteHtml("primary", { shade: true, input: true })}
        ${this.paletteHtml("base", { shade: false, input: true })}
        ${this.paletteHtml("neutral", { shade: true, input: true })}
        ${this.paletteHtml("maxContrastNeutral", { shade: false, input: true })}
      </div>
      <div class="grid grid-cols-4 gap-8 mt-8 items-start">
        ${Object.keys(statusColor).map(
          (status: any) => html` ${this.paletteHtml(status, {
            shade: true,
            input: false,
          })}`
        )}
      </div>
    `;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._generateTheme();
  }

  _randomTheme(): void {
    this.primary = chroma.random();
    this._generateTheme();
  }

  // set property value from input value based on id
  private _commitValue(e: Event): void {
    const input = e.target as HTMLInputElement;
    const id = input.getAttribute("data-color") as string;
    const value = input.value.trim();

    const previousValue = (this as any)[id];
    (this as any)[id] = value;
    if (previousValue != value) {
      this._generateTheme();
    }
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
    const neutralColor = chroma(this.neutral);

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
      const threshold = 0.6;

      // Modification de la hue. On ne modifie pas plus de ...
      const maxHrotation =
        deltaH < 0 ? Math.max(-15, deltaH) : Math.min(15, deltaH);

      const h = Math.min(hsl[0] + maxHrotation);
      const s = hsl[1] + deltaS * threshold;
      const l = hsl[2];

      const newStatusColor: Color = chroma.hsl(h, s, l);

      // update the status colors
      this.theme[colorKey]["DEFAULT"] = newStatusColor.hex();
      const shades: string[] = this._generateShades(newStatusColor);
      this._setShades(shades, this.theme[colorKey]);
      this._setContentColor(chroma(newStatusColor), this.theme[colorKey]);
    });

    // update the primary shades
    const primaryShades = this._generateShades(primaryColor);
    this._setShades(primaryShades, this.theme["primary"]);
    this._setContentColor(primaryColor, this.theme["primary"]);
    this.theme["primary"]["DEFAULT"] = this.primary;

    // update the neutral shades
    const neutralShades = this._generateShades(chroma(neutralColor), true);
    this._setShades(neutralShades, this.theme["neutral"]);
    this._setContentColor(neutralColor, this.theme["neutral"]);

    this.theme["neutral"]["DEFAULT"] = this.neutral;
    this.theme["base-content"] = this.neutral;
    this.theme["base"] = this.base;

    // Generate and set css
    this._setThemeCSS(this.theme);

    this.dispatchEvent(
      new CustomEvent("newTheme", { bubbles: true, composed: true })
    );
  }

  private _setContentColor(color: Color, targetObject: any): void {
    // Get contrast color for text from the new color
    if (chroma(color).luminance() < 0.4) {
      targetObject["content"] = defaultColors.base;
    } else {
      targetObject["content"] = defaultColors.maxNeutral;
    }
  }

  private _generateShades(color: Color, isNeutral: boolean = false): string[] {
    const baseLuminance = chroma(this.base).luminance();
    let minPadding = Math.min(0.3, 0.15 * (1 + (1 - baseLuminance)));
    let maxPadding = 0.2;

    if (isNeutral == true) {
      maxPadding = 0;
      minPadding = Math.min(0.08, 0.04 * (1 + (1 - baseLuminance)));
    }

    const shades = chroma
      .scale([this.base, color, this.maxContrastNeutral])
      .mode("lab")
      .correctLightness()
      .padding([minPadding, maxPadding])
      .colors(9);

    const fiftyShade = chroma.mix(this.base, shades[0], 0.6).hex();
    shades.unshift(fiftyShade);

    return shades;
  }

  private _setShades(shades: any, targetObject: any): void {
    if (shades.length > 0) {
      shades.forEach((shade: string, index: number) => {
        const keyName = index == 0 ? "50" : index + "00";
        // const keyName = index + 1 + "00";
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
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sonic-theme-generator": ThemeGenerator;
  }
}
