import { html, LitElement, PropertyValueMap , css} from "lit";
import { customElement, property, state, queryAssignedElements } from "lit/decorators.js";
import { tailwindColors } from "./tailwind-colors.js";
import chroma, { Color } from "chroma-js";
import Subscriber from "@supersoniks/concorde/core/mixins/Subscriber";

export const defaultColors = {
  primary: "#0070f3",
  secondary: "#facc15",
  danger: "#dc2626",
  success: "#10b981",
  warning: "#fb923c",
  info: "#3b82f6",
  base: "#ffffff",
  maxContrastNeutral: "#111827",
  neutral: "#1f2937",
};


@customElement("concorde-theme-generator")
export class ThemeGenerator extends Subscriber(LitElement) {

  static styles = css`
    :host{
      display:contents!important;
    }
  `;

  @property({ type: String }) primary = defaultColors.primary;
  @property({ type: String }) secondary = defaultColors.secondary;
  @property({ type: String }) neutral = defaultColors.neutral;
  @property({ type: String }) base = defaultColors.base;
  @property({ type: String }) maxContrastNeutral = defaultColors.maxContrastNeutral;
  @property({ type: String }) rounded : "none" | 'md' | 'lg' = "md";
  @property({ type: String }) border : "sm" | 'md' = "sm";
  @property({ type: Boolean }) flat = false;
  @property({ type: Boolean }) inputBordered = false;
  @property({ type: Boolean }) buttonPills = false;


  @state() tailwindClosestPrimary = "";

  @state() settings: any = {}
  @state() theme: any = {}
  @property({ type: String }) themeCSS ?:string;
  
  @queryAssignedElements({selector: "sonic-theme"})
  sonicTheme!:Array<HTMLElement>;

  render() {
    return html`<slot @slotchange=${this.mainSlotChange}></slot>`;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.generateTheme();
  }
  
  protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.updated(_changedProperties);
    this.sonicTheme?.forEach(themeElement => {
      themeElement.setAttribute('style', this.themeCSS || '');
    });
  }

  randomTheme(): void {
    this.primary = chroma.random().hex();
    this.generateTheme();
  }

  mainSlotChange(){
    this.requestUpdate()
  }

  protected willUpdate(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.willUpdate(_changedProperties);
    this.generateTheme();
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

  generateTheme() {
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
      this._generateShades(newStatusColor, colorKey);
    });

    // update the primary shades
    this._generateShades(primaryColor, "primary");
    // update the neutral shades
    this._generateShades(chroma(neutralColor), "neutral");
    this.theme["base-content"] = this.neutral;
    this.theme["base"] = this.base;

    // Generate and set css
    this.generateCss(this.theme);

    this.dispatchEvent(
      new CustomEvent("newTheme", { bubbles: true, composed: true })
    );
  }

  private _generateShades(color: Color, colorKey: string): void {
    const isDarkColor = chroma(color).luminance() < 0.4;
    const maxPadding = colorKey == "neutral" ? 0 : 0.15;

    const scale = chroma
      .scale([this.base, color, this.maxContrastNeutral])
      .mode("lab")
      .correctLightness()
      .padding([0, maxPadding]);

    let shades = {
      50: scale(0.04).hex(),
      100: scale(0.08).hex(),
      200: scale(0.18).hex(),
      300: scale(0.25).hex(),
      400: scale(0.40).hex(),
      500: scale(0.5).hex(),
      600: scale(0.65).hex(),
      700: scale(0.8).hex(),
      800: scale(0.9).hex(),
      900: scale(1).hex(),
      DEFAULT: color.hex(),
      content: isDarkColor ? defaultColors.base : defaultColors.maxContrastNeutral,
    };

    this.theme[colorKey] = shades;
  }

  private generateCss(theme: any): void {
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
        cssRules.push(`--sc-${colorName[0]}: ${colorName[1]}`);
      }
    }
    // rounded
    if(this.rounded == 'none'){
      cssRules.push(`--sc-rounded: 0;`);
    }else if(this.rounded == 'lg'){
      cssRules.push(`--sc-rounded: 0.5rem`);
      cssRules.push(`--sc-btn-rounded-intensity:1.6`);
      cssRules.push(`--sc-btn-input-intensity:1.6`);
    } else {
      cssRules.push(`--sc-rounded: 0.375rem`);
    }

    // buttonPills
    if(this.buttonPills){
      cssRules.push(`--sc-btn-rounded:9999px`);
    }

    // border
    if(this.border == 'md'){
      cssRules.push(`--sc-border-width:max(2px, .125rem)`);
    } else {
      cssRules.push(`--sc-border-width:max(1px, .1rem)`);
    }
    

    // inputBordered
    if(this.inputBordered){
      cssRules.push(`--sc-input-bg:transparent`);
      cssRules.push(`--sc-input-border-color:var(--sc-base-content)`);
    }
    // inputBordered
    if(this.flat){
      cssRules.push(`--sc-shadow-xs:none;`);
      cssRules.push(`--sc-shadow-sm:none;`);
      cssRules.push(`--sc-shadow-lg:none;`);
      cssRules.push(`--sc-shadow-xm:none;`);
      cssRules.push(`--sc-shadow:none;`);
    }
    
    this.themeCSS = cssRules.join(";");
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "concorde-theme-generator": ThemeGenerator;
  }
}
