import { LitElement, html, customElement, css, property } from 'lit-element';

import './icon'
import './ripple'
import { defaultCSS } from './styles';

declare global {
  interface HTMLElementTagNameMap {
    'mega-bottom-navigation': BottomNavigationElement;
  }
}

@customElement('mega-bottom-navigation')
export class BottomNavigationElement extends LitElement {
  @property({ type: Number, reflect: true })
  selected = 0;

  select(item: number) {
    this.selected = item
  }

  static get styles() {
    return [
      defaultCSS,
      css`
:host {
  z-index: 8;
  display: block;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  height: 56px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  pointer-events: none;
  background-color: #333;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

::slotted(*) {
  margin: 8px 12px 12px 12px;
  min-width: 80px;
  max-width: 168px;
  --mega-icon-size: 24px;
  --mega-theme-primary: #ccc;
}
`
    ]
  }

  render() {
    return html`
<slot></slot>`
  }
}
