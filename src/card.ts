import { LitElement, html, customElement, css, property, query } from 'lit-element';

import './ripple'
import { defaultCSS, elevationCSS } from './styles';

declare global {
  interface HTMLElementTagNameMap {
    'mega-card': CardElement;
  }
}

export type CardType = 'basic' | 'basic-text'
@customElement('mega-card')
export class CardElement extends LitElement {
  @property({ type: Boolean, reflect: true })
  outlined = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  static get styles() {
    return [
      defaultCSS,
      elevationCSS,
      css`
:host {
  display: block;
  background-color: var(--mega-theme-surface, #fff);
  border-radius: 2px;
  box-shadow: var(--elevation-02);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

:host([outlined]) {
  box-shadow: var(--elevation-00);
  border: 1px solid #e0e0e0;
}

slot[name="media"]::slotted(*) {
  position: relative;
  height: 0;
  width: 100%;
  padding-top: calc(100% / (var(--aspect-ratio)))
}

.media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.media::before {
  display: block;
  content: "";
}

slot[name="media"]::slotted(:first-child),
.media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}

slot[name="media"]::slotted(:last-child),
.media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.media-content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
}

.primary {
  padding: 1rem;
}

.primary-action {
  -webkit-tap-highlight-color: transparent;
  will-change: transform, opacity;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  outline: none;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;

  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}

.primary-action slot[name="primary-action"]::slotted(:first-child) {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}

.primary-action slot[name="primary-action"]::slotted(:last-child) {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

:host([full-bleed]) .actions {
  padding: 0;
}

.action-buttons,
.action-icons {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
}

.action-icons {
  color: var(--mega-theme-text-icon-on-background, rgba(0, 0, 0, 0.38));
  flex-grow: 1;
  justify-content: flex-end;
}

.action-buttons + .action-icons {
  margin-left: 16px;
  margin-right: 0;
}

.action {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  cursor: pointer;
  user-select: none;
}
.action:focus {
  outline: none;
}

.action--button {
  margin-left: 0;
  margin-right: 8px;
  padding: 0 8px;
}
.action--button:last-child {
  margin-left: 0;
  margin-right: 0;
}

:host([full-bleed]) slot[name="action"]::slotted(*) {
  justify-content: space-between;
  width: 100%;
  height: auto;
  max-height: none;
  margin: 0;
  text-align: left;
  --button-padding: 8px 16px;
}

slot[name="action-icon"]::slotted(*),
.action--icon {
  margin: -6px 0;
}

.action--icon:not(:disabled) {
  color: var(--mega-theme-text-icon-on-background, rgba(0, 0, 0, 0.38));
}
`
    ]
  }

  render() {
    return html`
<div class="primary-action">
  <slot name="header"></slot>
  <mega-ripple>
    <slot name="primary-action" tabindex="0">
      <div class="media">
        <slot name="media"><slot name="media-content"></slot></slot>
      </div>
    </slot>
    <slot name="primary"></slot>
    <slot name="secondary"></slot>
  </mega-ripple>
</div>
<div class="actions">
  <slot name="action">
    <div class="action-buttons"><slot name="action-button"></slot></div>
    <div class="action-icons"><slot name="action-icon"></slot></div>
  </slot>
</div>`
  }
}
