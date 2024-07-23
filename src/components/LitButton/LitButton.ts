

import {LitElement, html, css} from 'lit-element';
import { property, customElement } from 'lit/decorators.js';

@customElement('lit-button')
export class LitButton extends LitElement {
  static styles = css`
    :host {
      width: 300px;
      height: 100px;
      display: flex;

      justify-content: center;
      align-items: center;
      border-color: greenyellow;
      outline: none;
      border-radius: 10px;
      border: 2px solid greenyellow;
      cursor: pointer;
    }
  `;

  
  @property({type: String})
  name = 'World';


  render() {
    return html`
      <button>
        <slot></slot>
      </button>
    `;
  }

  
}

// declare global {
//   interface HTMLElementTagNameMap {
//     'lit-button': LitButton;
//   }
// }