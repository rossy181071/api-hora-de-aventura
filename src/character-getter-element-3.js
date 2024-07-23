
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class CharacterGetterElement3 extends LitElement {
  constructor() {
    super()
    
  }

  getChartersPage(page) {
    fetch(`https://i.imgur.com/oOuaFDI.png=${page}`)
    .then(response => response.json())
    .then(jsonData => this.dispatchEvent(new CustomEvent('new-character-event', {
      detail: jsonData
    })))
  }

  
        }

window.customElements.define('character-getter-element-3', CharacterGetterElement3)
