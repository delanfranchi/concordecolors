import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { tailwind } from "../sonic-tailwind.js";

@customElement("sonic-theme-preview")
export class SonicComponent extends LitElement {
  static styles = [tailwind];
  render() {
    return html`
      <div class="text-5xl font-bold mb-10">Preview</div>
      <div class="grid grid-cols-2 gap-8">
        <div>
          <div>
            <sonic-button>Default</sonic-button>
            <sonic-button type="primary">Primary</sonic-button>
            <sonic-button type="neutral">Neutral</sonic-button>
            <sonic-button type="warning">Warning</sonic-button>
            <sonic-button type="info">Info</sonic-button>
            <sonic-button type="success">Success</sonic-button>
            <sonic-button type="danger">Danger</sonic-button>
          </div>
          <sonic-divider></sonic-divider>
          <div>
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
            <sonic-button variant="outline" type="danger">Danger</sonic-button>
            <sonic-divider></sonic-divider>
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
          </div>
        </div>
        <sonic-div formDataProvider="creation_compte">
          <form
            action="/inscription?lang=fr"
            method="POST"
            class="mb-20"
            accept-charset="UTF-8"
            id="youpla"
          >
            <sonic-fieldset form="formid" collapsible="true" collapsed="false">
              <sonic-legend>
                Informations personnelles
                <span slot="description"
                  >Description du fieldset lorem ipsum dolor</span
                >

                <sonic-pop class="inline-block" slot="suffix">
                  <sonic-button shape="circle" variant="ghost">
                    <sonic-icon size="lg" name="ellipsis-vertical"></sonic-icon
                  ></sonic-button>
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
              <sonic-legend
                ><sonic-icon name="map-marker"></sonic-icon> Coordonnées
              </sonic-legend>
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

            <div class="flex items-center">
              <sonic-button submit type="primary">
                <sonic-icon name="check"></sonic-icon>
                S'inscrire
              </sonic-button>
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

          <sonic-div
            dataProvider="creation_compte"
            class="my-6 rounded-lg text-neutral-400"
          >
            Résumé des informations : <br />
            <div class="text-lg">
              <span data-bind ::inner-html="$nom" class="font-bold"></span>
              <span data-bind ::inner-html="$prenom"></span>
            </div>
            <div class="text-lg">
              <span data-bind ::inner-html="$sexe"></span>
              <span data-bind ::inner-html="$date_naissance"></span>
            </div>
            <div class="mt-3">
              <span data-bind ::inner-html="$email"></span>
              <span
                data-bind
                ::inner-html="($email_confirmation)"
                class="text-sm text-neutral-400"
              ></span>
            </div>
            <div data-bind ::inner-html="$cp"></div>
            <div data-bind ::inner-html="$ville"></div>
          </sonic-div>
        </sonic-div>
      </div>
    `;
  }
}
