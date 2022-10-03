import '@supersoniks/concorde/core';
import {html, LitElement, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import {tailwind} from '../../tailwind/sonic-tailwind.js';

import '../../theme-preview/theme-preview.ts';

@customElement('concorde-configuration-form')
export class configurationForm extends LitElement {
  static styles = [tailwind, css``];

  render() {
    return html`
      <div formDataProvider="themeSettings" class="">
        <div class="flex items-center gap-2 font-bold text-xl mb-2">
          colors
        </div>
        <div class="grid grid-cols-2 gap-4 gap-x-6 mb-6">
          <sonic-group>
            <sonic-input
              size="sm"
              type="text"
              name="primary"
              label="primary"
              value="#ff0000"
            ></sonic-input>
            <sonic-input size="sm" type="color" name="primary"></sonic-input>
          </sonic-group>
          <sonic-group>
            <sonic-input
              size="sm"
              type="text"
              name="secondary"
              label="secondary"
              value="#ff44aa"
            ></sonic-input>
            <sonic-input size="sm" type="color" name="secondary"></sonic-input>
          </sonic-group>
          <sonic-group>
            <sonic-input
              size="sm"
              type="text"
              name="base"
              label="base"
              value="#ff0000"
            ></sonic-input>
            <sonic-input size="sm" type="color" name="base"></sonic-input>
          </sonic-group>
          <sonic-group>
            <sonic-input
              size="sm"
              type="text"
              name="neutral"
              label="neutral"
              value="#ff0000"
            ></sonic-input>
            <sonic-input size="sm" type="color" name="neutral"></sonic-input>
          </sonic-group>
          <sonic-group>
            <sonic-input
              size="sm"
              type="text"
              name="maxContrast"
              label="maxContrast"
              value="#ff44aa"
            ></sonic-input>
            <sonic-input
              size="sm"
              type="color"
              name="maxContrast"
            ></sonic-input>
          </sonic-group>
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
              value="medium"
              label="medium"
            ></sonic-radio>
            <sonic-radio
              class="min-w-[4rem]"
              name="rounded"
              value="large"
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
              value="thin"
              label="thin"
            ></sonic-radio>
            <sonic-radio
              class="min-w-[4rem]"
              name="border"
              value="medium"
              label="medium"
            ></sonic-radio>
            <sonic-radio
              class="min-w-[4rem]"
              name="border"
              value="large"
              label="large"
            ></sonic-radio>
          </div>
        </div>
        <div class="flex items-center gap-2 font-bold text-xl mb-2">
            extras
          </div>
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
                name="buttonPils"
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
