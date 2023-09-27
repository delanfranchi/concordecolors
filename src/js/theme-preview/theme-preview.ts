import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {tailwind} from '@concorde-app/tailwind';
import './movie/movie-card';
import './users/users';
import './form/login';

@customElement('sonic-theme-preview')
export class SonicComponent extends LitElement {
  static styles = [tailwind];
  render() {
    return html`
      <div
        class="grid lg:grid-cols-[repeat(auto-fill,minmax(25rem,_1fr))] gap-8 items-start"
      >
        <div class="grid grid-cols-1 gap-6">
          <concorde-movie-card></concorde-movie-card>
        </div>
        <div class="grid grid-cols-1 gap-6">
          <concorde-preview-users></concorde-preview-users>
          <sonic-card>
            <sonic-alert class="mb-2" background label="Lorem ipsum dolor">
              This address is already in use.
            </sonic-alert>
            <sonic-alert
              status="success"
              class="mb-2"
              background
              label="Lorem ipsum dolor"
            >
              This address is already in use.
            </sonic-alert>
            <sonic-alert
              status="error"
              class="mb-2"
              background
              label="Lorem ipsum dolor"
            >
              This address is already in use.
            </sonic-alert>
            <sonic-alert
              status="warning"
              class="mb-2"
              background
              label="Lorem ipsum dolor"
            >
              This address is already in use.
            </sonic-alert>
            <sonic-alert
              status="info"
              class="mb-2"
              background
              label="Lorem ipsum dolor"
            >
              This address is already in use.
            </sonic-alert>
          </sonic-card>
        </div>
        <div class="grid grid-cols-1 gap-6">
          <sonic-card>
            <div class="grid grid-cols-2 gap-x-3 gap-2 ">
              <sonic-button>Default</sonic-button>
              <sonic-button type="primary">Primary</sonic-button>
              <sonic-button type="neutral">Neutral</sonic-button>
              <sonic-button type="warning">Warning</sonic-button>
              <sonic-button type="info">Info</sonic-button>
              <sonic-button type="success">Success</sonic-button>
              <sonic-button type="danger">Danger</sonic-button>
            </div>
          </sonic-card>
          <concorde-preview-user-form></concorde-preview-user-form>
        </div>
      </div>
    `;
  }
}
