import '@supersoniks/concorde/core';
import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {tailwind} from '../../tailwind/sonic-tailwind.js';

import './form.ts';
import './generator.ts';

@customElement('concorde-configuration')
export class configuration extends LitElement {
  static styles = [tailwind];

  render() {
    return html`
      <div class="grid grid-cols-[18rem,_auto] gap-10">
        <concorde-configuration-form></concorde-configuration-form>
        <div dataProvider="themeSettings">
          <concorde-theme-generator>
            <sonic-theme color>
              <sonic-theme-preview
              class="block bg-neutral-50 p-10 rounded-lg"
              ></sonic-theme-preview>
            </sonic-theme>
          </concorde-theme-generator>
        </div>
      </div>
    `;
  }
}
// this.dispatchEvent(new Event("myClick"));
