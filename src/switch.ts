import { LitElement, html, customElement, css, property, query } from 'lit-element';

import './ripple'
import { defaultCSS, elevationCSS } from './styles';

declare global {
  interface HTMLElementTagNameMap {
    'mega-switch': SwitchElement;
  }
}

@customElement('mega-switch')
export class SwitchElement extends LitElement {
  @property({ type: Boolean, reflect: true })
  checked = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  private changeHandler_(e: Event) {
    const el = <HTMLInputElement>e.target
    this.checked = el.checked;
  }

  static get styles() {
    return [
      defaultCSS,
      elevationCSS,
      css`
:host {
  display: inline-block;
  position: relative;
  outline: none;
  user-select: none;
  contain: layout;
}

:host([checked]) .track {
  background-color: var(--mega-theme-secondary, #018786);
  border-color: var(--mega-theme-secondary, #018786);
  opacity: 0.54;
}

:host([checked]) .thumb {
  background-color: var(--mega-theme-secondary, #018786);
  border-color: var(--mega-theme-secondary, #018786);
}

:host(:not([checked])) .track {
  background-color: #000;
  border-color: #000;
}

:host(:not([checked])) .thumb {
  background-color: #fff;
  border-color: #fff;
}

input {
  left: 0;
  right: initial;
  position: absolute;
  top: 0;
  width: 68px;
  height: 48px;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  pointer-events: auto;
}

.track {
  box-sizing: border-box;
  width: 32px;
  height: 14px;
  border: 1px solid;
  border-radius: 7px;
  opacity: 0.38;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.2, 1),
              background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),
              border-color 90ms cubic-bezier(0.4, 0, 0.2, 1);
}

mega-ripple {
  left: -18px;
  right: initial;
  display: flex;
  position: absolute;
  top: -17px;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  transform: translateX(0);
  transition: transform 90ms cubic-bezier(0.4, 0, 0.2, 1),
              background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),
              border-color 90ms cubic-bezier(0.4, 0, 0.2, 1);
}

.thumb {
  box-shadow: var(--elevation-02);
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  border: 10px solid;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
}

:host([checked]) mega-ripple {
  transform: translateX(20px);
}
:host([checked]) input {
  transform: translateX(-20px);
}

:host([disabled]) {
  opacity: 0.38;
  pointer-events: none;
}
:host([disabled]) .thumb {
  border-width: 1px;
}
:host([disabled]) input {
  cursor: default;
  pointer-events: none;
}

mega-ripple {
  --mega-ripple-fg-opacity: 0.12;
  --mega-ripple-fg-size: 0;
  --mega-ripple-left: 0;
  --mega-ripple-top: 0;
  --mega-ripple-fg-scale: 1;
  --mega-ripple-fg-translate-end: 0;
  --mega-ripple-fg-translate-start: 0;
}

:host(:not([checked])) mega-ripple {
  --mega-ripple-fg-opacity: 0.24;
}`
    ]
  }

  render() {
    return html`
<div class="track"></div>
<mega-ripple unbounded>
  <div class="thumb">
    <input type="checkbox" id="basic-switch" role="switch" ?checked=${this.checked} ?disabled=${this.disabled} @change=${this.changeHandler_}>
  </div>
</mega-ripple>`
  }
}
