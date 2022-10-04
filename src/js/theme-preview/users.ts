import '@supersoniks/concorde/core';
import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {tailwind} from '../tailwind/sonic-tailwind.js';
import Subscriber from '@supersoniks/concorde/core/mixins/Subscriber';

@customElement('concorde-preview-users')
export class users extends Subscriber(LitElement) {
  static styles = [tailwind];
  render() {
    return html`
  <sonic-card>
  <sonic-list  fetch serviceurl="https://reqres.in" dataprovider="api/users" key="data" class="grid grid-cols-1 gap-4  ">
      <template><concorde-preview-user-item></sonic-preview-user-item></template>
  </sonic-list>
  </sonic-card>`;
  }
}

@customElement('concorde-preview-user-item')
export class user extends Subscriber(LitElement) {
  static styles = [tailwind];

  @property({type: String}) avatar = '';
  @property({type: String}) first_name = '';
  @property({type: String}) email = '';
  @property({type: String}) last_name = '';

  render() {
    console.log(this.props);
    return html`<div class="flex items-center gap-2">
      <sonic-image
        data-bind=""
        src=${this.avatar}
        rounded="md"
        ratio="1/1"
        class="w-16 block"
      ></sonic-image>
      <div >
        <div class="text-bold">
          ${this.first_name} <span class="font-bold">${this.last_name}</span>
        </div>
        <span class="text-sm">
          ${this.email}
        </span>
      </div>
      <div class="ml-auto">
        <sonic-button
        data-bind=""
        href="mailto:${this.email}"
        size="sm"
        variant="outline"
        shape="circle"
        icon
        >
        <sonic-icon
        library="iconoir"
        name="mail"
        ></sonic-icon>
      </sonic-button>
    </div>
    </div>`;
  }
}
