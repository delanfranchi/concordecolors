import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {tailwind} from '../tailwind/sonic-tailwind.js';

@customElement('sonic-theme-preview')
export class SonicComponent extends LitElement {
  static styles = [tailwind];
  render() {
    return html`
      <div class="grid lg:grid-cols-4 gap-8 items-start">
        <div class="grid grid-cols-1 gap-8 ">
          <sonic-card>
            <div class="mb-4 -mt-6 -mx-6 rounded-tl-lg rounded-tr-lg overflow-hidden  ">
              <sonic-image
                src="https://m.media-amazon.com/images/I/61TUTL64HOL._AC_.jpg"
              ></sonic-image>
            </div>
            <sonic-card-main>
              <div class="mb-2">
                <div class="text-lg font-bold">The concorde - airport 79</div>
                <div>David Lowell Rich</div>
              </div>
              <div class="flex">
                <div class=" flex gap-2">

                <sonic-button type="primary" size="sm">
                  <sonic-icon
                    slot="prefix"
                    library="iconoir"
                    size="lg"
                    name="play-outline"
                  ></sonic-icon>
                  Watch trailer</sonic-button
                >
                <sonic-button
                  icon
                  shape="circle"
                  size="sm"
                  class="ml-auto"
                  >
                  <sonic-icon library="iconoir" name="playlist"></sonic-icon>
                </sonic-button>
                </div>

                <div class="ml-auto flex gap-2">

                
                <sonic-button
                  icon
                  name="favourite"
                  value="true"
                  type="neutral"
                  shape="circle"
                  size="sm"
                  variant="outline"
                  class="ml-auto"
                  >
                  <sonic-icon library="iconoir" name="heart"></sonic-icon>
                </sonic-button>
              </div>
              </div>
            </sonic-card-main>
          </sonic-card>
          <sonic-card>
            <sonic-card-header label="Buttons"></sonic-card-header>
            <sonic-card-main>
              <div
                class="grid grid-cols-[repeat(auto-fill,_minmax(7rem,_1fr))] gap-2 flex-wrap"
              >
                <sonic-button>Default</sonic-button>
                <sonic-button type="primary">Primary</sonic-button>
                <sonic-button type="neutral">Neutral</sonic-button>
                <sonic-button type="warning">Warning</sonic-button>
                <sonic-button type="info">Info</sonic-button>
                <sonic-button type="success">Success</sonic-button>
                <sonic-button type="danger">Danger</sonic-button>
                <sonic-divider class="col-span-full"
                  >Divider
                  <sonic-badge size="sm" type="info"
                    >8</sonic-badge
                  ></sonic-divider
                >
                <sonic-button variant="outline">Default</sonic-button>
                <sonic-button variant="outline" type="primary"
                  >Primary</sonic-button
                >
                <sonic-button variant="outline" type="neutral"
                  >Neutral</sonic-button
                >
                <sonic-button variant="outline" type="warning"
                  >Warning</sonic-button
                >
                <sonic-button variant="outline" type="info">Info</sonic-button>
                <sonic-button variant="outline" type="success"
                  >Success</sonic-button
                >
                <sonic-button variant="outline" type="danger"
                  >Danger</sonic-button
                >
              </div>
            </sonic-card-main>
          </sonic-card>
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