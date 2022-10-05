import '@supersoniks/concorde/core';
import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {tailwind} from '@concorde-app/tailwind';
import Subscriber from '@supersoniks/concorde/core/mixins/Subscriber';

@customElement('concorde-preview-user-form')
export class Login extends Subscriber(LitElement) {
  static styles = [tailwind];

  render() {
    // const isOdd = this.props._key_ % 2;

    return html`<sonic-card formDataProvider="creation_compte">
      <sonic-fieldset>
        <sonic-legend iconLibrary="iconoir" label="My account"  iconName="user" ></sonic-legend>
        <sonic-form-layout>
          <sonic-input
            autocomplete="login"
            label="Login"
            name="login"
          ></sonic-input>
          <sonic-input
            autocomplete="new-password"
            label="Mot de passe"
            name="password"
            type="password"
          ></sonic-input>
          <sonic-form-actions class="flex-wrap gap-y-2 w-full">
            <sonic-submit>
              <sonic-button
                href="#my-account"
                type="success"
                class="w-full"
              >
                <sonic-icon
                  library="iconoir"
                  name="arrow-right"
                  slot="prefix"
                ></sonic-icon>
                Login</sonic-button
              >
            </sonic-submit>
            <sonic-button href="#missing-password" variant="link">
              <sonic-icon
                library="iconoir"
                name="question-mark-circle"
                slot="prefix"
              ></sonic-icon>
              Forgotten password
            </sonic-button>
          </sonic-form-actions>
        </sonic-form-layout>
      </sonic-fieldset>

      <sonic-fieldset>
        <sonic-legend iconLibrary="iconoir" iconName="add-user" label="New user ?" ></sonic-legend>

        <div class="-mt-4 mb-4">Lorem ipsum dolor sit amet consectur !</div>
        <div class="flex gap-2 flex-wrap">
          <sonic-button
            href="#create"
            type="primary"
            class="mr-2"
            ><sonic-icon
              library="iconoir"
              name="plus"
              slot="prefix"
            ></sonic-icon>
            Create an account</sonic-button
          >
          </div>   
      </sonic-fieldset>
    </sonic-card>`;
  }
}
