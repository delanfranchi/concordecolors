import '@supersoniks/concorde/core';
import {html, LitElement, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import {tailwind} from '../../tailwind/sonic-tailwind.js';

import './form.ts';

@customElement('concorde-configuration')
export class configuration extends LitElement {
  static styles = [tailwind, css``];

  render() {
    return html`
      <div class="grid grid-cols-[18rem,_auto] gap-10">
        <concorde-configuration-form></concorde-configuration-form>
        <div>
          <sonic-theme-generator></sonic-theme-generator>
          <sonic-theme-preview
            class="block bg-neutral-50 p-10 rounded-lg"
          ></sonic-theme-preview>
        </div>
      </div>
    `;
  }
}
// this.dispatchEvent(new Event("myClick"));
