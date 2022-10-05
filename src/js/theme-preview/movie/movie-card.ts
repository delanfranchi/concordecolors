import '@supersoniks/concorde/core';
import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {tailwind} from '@concorde-app/tailwind';

@customElement('concorde-movie-card')
export class movieCard extends LitElement {
  static styles = [tailwind];
  render() {
    return html`
      <sonic-card dataProvider="none">
        <div
          class="mb-4 -mt-6 -mx-6 rounded-tl-lg rounded-tr-lg overflow-hidden  "
        >
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
              <sonic-button icon shape="circle" size="sm" class="ml-auto">
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
    `;
  }
}
