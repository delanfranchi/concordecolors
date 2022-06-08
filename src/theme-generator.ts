import { html, css, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { tailwindColors } from "./tailwind-colors.js";

import chroma from "chroma-js";

const defaultColors = {
  primary: "#0070f3",
  danger: "#f43f5e",
  success: "#10b981",
  warning: "#f97316",
  info: "#3b82f6",
  base: "#fff",
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

    .palette {
      display: grid;
      inset: 1.8rem;
      gap: 2.25rem;
      grid-template-columns: repeat(1, minmax(0, 1fr));
      grid-template-rows: repeat(6, minmax(0, 1fr));
      position: absolute;
    }

    @media (min-width: 768px) {
      .palette {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-template-rows: repeat(2, minmax(0, 1fr));
      }
    }
    @media (min-width: 1600px) {
      .palette {
        padding: 3rem;

        /* grid-template-rows: repeat(1, minmax(0, 1fr));
        grid-template-columns: repeat(6, minmax(0, 1fr)); */
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
      border-radius: 1.8rem;
      width: 100%;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
      position: relative;
    }

    .text,
    input {
      padding: 1rem;
      all: unset;
      text-align: center;
      mix-blend-mode: difference;
      appearance: none;
      color: #666;
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
      line-height: 1;
      padding-top: 0.5rem;
    }

    .text {
      opacity: 0.5;
    }

    .hidden {
      display: none;
    }

    .shades {
      width: 100%;
      display: flex;
      gap: 0.8rem;
      margin-top: auto;
      flex-shrink: 0;
    }
    .shades div {
      border-radius: 0.3rem;
      aspect-ratio: 1;
      flex-grow: 1;
      background: red;
    }
  `;

  @property({ type: String }) primary = chroma.random();
  @property({ type: String }) tailwindClosestPrimary = "";

  @property({ type: String }) neutral = defaultColors.gray;

  @state() primaryShades: any = {};
  @state() neutralShades: any = {};

  @state() statusColors: any = {
    info: {
      color: defaultColors.info,
      shades: {},
    },
    success: {
      color: defaultColors.success,
      shades: {},
    },
    warning: {
      color: defaultColors.warning,
      shades: {},
    },
    danger: {
      color: defaultColors.danger,
      shades: {},
    },
  };

  render() {
    const shadesTemplates: any = [];
    for (let i = 0; i < 10; i++) {
      shadesTemplates.push(html`<div class="shade-${i}00"></li>`);
    }

    return html`<div class="palette">
      <div class="palette-item">
        <div class="palette-main" style="background-color:${this.primary}">
          <input
            id="primary"
            value="${this.primary}"
            @input=${this._commitValue}
            @blur=${this._cleanInputValue}
          />
        </div>
        <div class="shades">
          ${Object.keys(this.primaryShades).map(
            (shade: any, index) => html` <div
              class="shade-${index}00"
              style="background-color:${this.primaryShades[shade]}"
            ></div>`
          )}
        </div>
      </div>

      <div class="palette-item ">
        <div class="palette-main" style="background-color:${this.neutral}">
          <input
            id="neutral"
            value="${this.neutral}"
            @input=${this._commitValue}
          />
        </div>
        <div class="shades">
          ${Object.keys(this.neutralShades).map(
            (shade: any, index) => html` <div
              class="shade-${index}00"
              style="background-color:${this.neutralShades[shade]}"
            ></div>`
          )}
        </div>
      </div>
      ${Object.keys(this.statusColors).map(
        (status: any) => html`
          <div class="palette-item">
            <div
              class="palette-main"
              style="background-color:${this.statusColors[status].color}"
            >
              <div class="text">${this.statusColors[status].color}</div>
            </div>
            <div class="shades">
              ${Object.keys(this.statusColors[status].shades).map(
                (shade: any, index) => html` <div
                  class="shade-${index}00"
                  style="background-color:${this.statusColors[status].shades[
                    shade
                  ]}"
                ></div>`
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

    // on key press space, generate a new color and update the input
    window.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.keyCode === 32) {
        e.preventDefault();
        this.primary = chroma.random();
        this._generateTheme();
      }
    });
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

    const primaryHsl = primaryColor.hsl();
    const twindHsl = chroma(tailwindColorsByDelta[0]["color"]).hsl();
    const deltaH = primaryHsl[0] - twindHsl[0];
    const deltaS = primaryHsl[1] - twindHsl[1];
    const deltaL = primaryHsl[2] - twindHsl[2];

    Object.entries(this.statusColors).forEach((statusColor) => {
      const [colorKey] = statusColor;
      const color = chroma((defaultColors as any)[colorKey]);
      const hsl = color.hsl();
      const h = Math.max(1, Math.min(hsl[0] + deltaH /1.5, 359));
      const s = hsl[1] + deltaS / 2.5;
      const l = Math.max(hsl[2] + deltaL /1.5, 0.3);
      const newColor = chroma.hsl(h, s, l);

      // update the status colors
      this.statusColors[colorKey]["color"] = newColor.hex();

      const shades: string[] = this._generateShades(newColor) ;
      this._setShades(shades, this.statusColors[colorKey]["shades"]);
    });

    // update the primary shades
    const primaryShades = this._generateShades(primaryColor) ;
    this._setShades(primaryShades, this.primaryShades);

    // update the neutral shades
    const neutralShades = this._generateShades(chroma(this.neutral)) ;
    this._setShades(neutralShades, this.neutralShades);
  }

  private _generateShades(color: any): string[] {
    const [lighest, darkest] = [
      chroma(color).set("hsl.l", 0.95),
      chroma(color).set("hsl.l", 0.2),
    ];

    return chroma
      .scale([lighest, color, darkest])
      .correctLightness()
      .colors(10) ;
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
