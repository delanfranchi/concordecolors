import '@supersoniks/concorde/core';
import {html, LitElement, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import {tailwind} from '@concorde-app/tailwind';
import {defaultColors} from './generator';
import chroma from 'chroma-js';
import '../../theme-preview/theme-preview';

@customElement('concorde-configuration-form')
export class configurationForm extends LitElement {
  static styles = [tailwind, css``];

  //select all the current text input on click from outside
  handleColorClick(e: MouseEvent) {
    const input = e.target as HTMLInputElement;
    input.shadowRoot?.querySelector('input')?.select();
  }
  render() {
    return html`
      <div formDataProvider="themeSettings">
        <div class="flex items-center gap-2 font-bold text-xl mb-2">colors</div>
        <div class="grid grid-cols-2 gap-4 gap-x-6 mb-6">
          <div class="flex gap-1 items-end">
            <sonic-input
              size="sm"
              type="text"
              class="font-monospace"
              @click=${(e: MouseEvent) => {
                this.handleColorClick(e);
              }}
              name="primary"
              label="primary"
            ></sonic-input>
            <sonic-input
              size="2xs"
              type="color"
              class="overflow-hidden rounded-full shrink-0 mb-1 shadow-[0_0_0_1px_rgba(0,0,0,.1)]"
              name="primary"
              value=${chroma.random().hex()}
            ></sonic-input>
          </div>
          <div class="flex gap-1 items-end hidden">
            <sonic-input
              size="sm"
              type="text"
              class="font-monospace "
              @click=${(e: MouseEvent) => {
                this.handleColorClick(e);
              }}
              name="secondary"
              label="secondary"
            ></sonic-input>
            <sonic-input
              size="2xs"
              type="color"
              class="overflow-hidden rounded-full shrink-0 mb-1 shadow-[0_0_0_1px_rgba(0,0,0,.1)] "
              name="secondary"
              value=${chroma.random().hex()}
            ></sonic-input>
          </div>
          <div class="flex gap-1 items-end">
            <sonic-input
              size="sm"
              type="text"
              class="font-monospace"
              @click=${(e: MouseEvent) => {
                this.handleColorClick(e);
              }}
              name="neutral"
              label="neutral/text"
            ></sonic-input>
            <sonic-input
              size="2xs"
              value=${defaultColors.neutral}
              type="color"
              class="overflow-hidden rounded-full shrink-0 mb-1 shadow-[0_0_0_1px_rgba(0,0,0,.1)]"
              name="neutral"
            ></sonic-input>
          </div>
          <div class="flex gap-1 items-end">
            <sonic-input
              size="sm"
              type="text"
              class="font-monospace"
              @click=${(e: MouseEvent) => {
                this.handleColorClick(e);
              }}
              name="base"
              label="base/bg"
            ></sonic-input>
            <sonic-input
              value=${defaultColors.base}
              size="2xs"
              type="color"
              class="overflow-hidden rounded-full shrink-0 mb-1 shadow-[0_0_0_1px_rgba(0,0,0,.1)]"
              name="base"
            ></sonic-input>
          </div>

          <div class="flex gap-1 items-end">
            <sonic-input
              size="sm"
              type="text"
              class="font-monospace"
              name="maxContrastNeutral"
              label="max contrast "
            ></sonic-input>
            <sonic-input
              value=${defaultColors.maxContrastNeutral}
              size="2xs"
              type="color"
              class="overflow-hidden rounded-full shrink-0 mb-1 shadow-[0_0_0_1px_rgba(0,0,0,.1)]"
              name="maxContrastNeutral"
            ></sonic-input>
          </div>
        </div>
        <div class="mb-4">
          <div class="flex items-center gap-2  font-bold text-xl mb-2">
            radius
          </div>
          <div class="flex  gap-4">
            <sonic-radio
              checked
              class="min-w-[4rem]"
              name="rounded"
              value="none"
              label="none"
            ></sonic-radio>
            <sonic-radio
              class="min-w-[4rem]"
              name="rounded"
              value="md"
              label="medium"
              checked
            ></sonic-radio>
            <sonic-radio
              class="min-w-[4rem]"
              name="rounded"
              value="lg"
              label="large"
            ></sonic-radio>
          </div>
        </div>
        <div class="mb-4">
          <div class="flex items-center gap-2 font-bold text-xl mb-2">
            border
          </div>
          <div class="flex gap-4">
            <sonic-radio
              checked
              class="min-w-[4rem]"
              name="border"
              value="sm"
              label="thin"
            ></sonic-radio>
            <sonic-radio
              class="min-w-[4rem]"
              name="border"
              value="md"
              label="medium"
            ></sonic-radio>
          </div>
        </div>
        <div class="flex items-center gap-2 font-bold text-xl mb-2">extras</div>
        <div class="mb-2">
          <div>
            <div class="grid grid-cols-2 gap-2 gap-x-4">
              <sonic-checkbox
                name="flat"
                value="true"
                unique
                label="flat design"
              ></sonic-checkbox>
              <sonic-checkbox
                name="inputBordered"
                value="true"
                unique
                label="input bordered"
              ></sonic-checkbox>
              <sonic-checkbox
                name="buttonPills"
                value="true"
                unique
                label="button pills"
              ></sonic-checkbox>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
