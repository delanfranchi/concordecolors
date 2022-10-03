import "@supersoniks/concorde/core";
import { html, LitElement, css } from "lit";
import { customElement } from "lit/decorators.js";
import { tailwind } from "./js/tailwind/sonic-tailwind.js";
import "./js/pages/configuration";


@customElement("concorde-app")
export class SonicComponent extends LitElement {
  static styles = [
    tailwind,
    css`
      sonic-theme{
        --sc-font-family-base:'Inter Tight', sans-serif;
        --sc-border-width:max(2px, 0.15rem);
      }`
  ];

  render() {
    return html`
      <sonic-theme theme="auto" background color class="py-4 px-5">
        <div class="border-b flex gap-8 py-3 mb-8">
          <div class="text-4xl font-bold">
            <sonic-link href="/" variant="unstyled">
              concorde
            </sonic-link>
          </div>
          <div class="ml-auto flex gap-6 text-xl">
            <sonic-link href="#documentation" variant="unstyled">
              documentation
            </sonic-link>
            <sonic-link href="#configuration" variant="unstyled">
              configuration
            </sonic-link>
            <sonic-link href="#search" variant="unstyled" icon>
              <sonic-icon library="iconoir" name="search" ></sonic-icon>
            </sonic-link>
          </div>
        </div>
        <sonic-router>
          <template data-route="/$" >
            <concorde-configuration></concorde-configuration>
            Hello world
          </template>
          <template data-route="/#documentation" >
            Coming soon
          </template>
          <template data-route="/#configuration" >
          </template>
        </sonic-router>
      </sonic-theme>
        
    `;
  }
}