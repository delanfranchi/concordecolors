import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {tailwind} from '../tailwind/sonic-tailwind.js';
import  './movie-card.js';
import  './users.js';


@customElement('sonic-theme-preview')
export class SonicComponent extends LitElement {
  static styles = [tailwind];
  render() {
    return html`
      <div class="grid lg:grid-cols-4 gap-8 items-start">
        <div class="grid grid-cols-1 gap-8 ">
          <concorde-movie-card></concorde-movie-card>
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

        <sonic-div formDataProvider="creation_compte">
          <form class="mb-20" accept-charset="UTF-8">
            <sonic-fieldset form="formid" collapsible="true" collapsed="false">
              <sonic-legend>
                Informations personnelles
                <span slot="description"
                  >Description du fieldset lorem ipsum dolor</span
                >

                <sonic-pop class="inline-block" slot="suffix">
                  <sonic-button shape="circle" variant="outline">
                    ●</sonic-button
                  >
                  <sonic-menu slot="content" class="min-w-20">
                    <sonic-menu-item>Mentions légales</sonic-menu-item>
                    <sonic-menu-item
                      >Conditions générales d'utilisation</sonic-menu-item
                    >
                  </sonic-menu>
                </sonic-pop>
              </sonic-legend>
              <sonic-form-layout>
                <sonic-input
                  autocomplete="family-name"
                  label="Nom"
                  name="nom"
                ></sonic-input>
                <sonic-input
                  autocomplete="given-name"
                  label="Prénom"
                  name="prenom"
                ></sonic-input>
                <sonic-select autocomplete="sex" label="Sexe" name="sexe">
                  <option value="" selected="selected">- Sélectionner -</option>
                  <option value="-">Je préfère ne pas le dire</option>
                  <option value="Homme">Homme</option>
                  <option value="Femme">Femme</option>
                </sonic-select>
                <sonic-input
                  autocomplete="bday"
                  label="Date de naissance"
                  name="date_naissance"
                  type="date"
                ></sonic-input>
                <sonic-divider></sonic-divider>
                <sonic-input
                  autocomplete="email"
                  label="e-mail"
                  name="email"
                  type="email"
                ></sonic-input>
                <sonic-input
                  autocomplete="email"
                  label="Confirmer votre e-mail"
                  name="email_confirmation"
                  type="email"
                ></sonic-input>
                <sonic-input
                  autocomplete="new-password"
                  label="Mot de passe"
                  name="password"
                  type="password"
                ></sonic-input>
                <sonic-input
                  autocomplete="new-password"
                  label="Confirmer votre mot de passe"
                  name="password_confirmation"
                  type="password"
                ></sonic-input>
              </sonic-form-layout>
            </sonic-fieldset>
            <sonic-fieldset form="formid" collapsible="true" collapsed="false">
              <sonic-legend> Coordonnées </sonic-legend>
              <sonic-form-layout>
                <sonic-input
                  autocomplete="postal-code"
                  label="Code postal"
                  name="cp"
                ></sonic-input>
                <sonic-input
                  autocomplete="address-level2"
                  label="Ville"
                  name="ville"
                ></sonic-input>
              </sonic-form-layout>
            </sonic-fieldset>

            <div class="flex gap-3 items-center">
              <sonic-button submit type="primary"> S'inscrire </sonic-button>
              <sonic-tooltip
                class="inline-flex"
                tooltipText="Vous êtes sûr(e) ? 🙄"
              >
                <sonic-button size="sm" variant="ghost">
                  Continuer sans m'inscrire
                </sonic-button>
              </sonic-tooltip>
            </div>
          </form>
        </sonic-div>
      </div>
    `;
  }
}
