import { LitElement, html, customElement, css } from 'lit-element';
import { defaultCSS } from './styles';

declare global {
  interface HTMLElementTagNameMap {
    'mega-icon': IconElement;
  }
}

// TODO: allow loading icons as SVG files (to avoid downloading an icon font)
// https://unpkg.com/material-design-icons@3.0.1/maps/svg/production/ic_add_location_24px.svg
/*
const ICON_CATEGORIES = [
  'action',
  'alert',
  'av',
  'communication',
  'content',
  'device',
  'editor',
  'file',
  'hardware',
  'image',
  'maps',
  'navigation',
  'notification',
  'places',
  'social',
  'toggle',
]
*/

@customElement('mega-icon')
export class IconElement extends LitElement {
  constructor() {
    super()
    IconElement.ensureFontLoaded()
  }

  render() {
    return html`<slot></slot>`
  }

  static get styles() {
    return [
      defaultCSS,
      css`
:host {
  font-family: var(--mega-icon-font, "Material Icons");
  font-display: block;
  font-weight: normal;
  font-style: normal;
  font-size: var(--mega-icon-size, 24px);
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
  contain: content;
}`
    ]
  }

  static fontRequested_ = false
  static ensureFontLoaded() {
    // TODO: make lazy and check for --mega-icon-font being set to something else
    // use css font loading api to hide icons until font has loaded or something like
    // https://github.com/bramstein/fontfaceobserver to fade them in when they are
    // https://github.com/typekit/webfontloader
    if (this.fontRequested_) return

    const el = document.createElement('link');
    el.rel = 'stylesheet';
    el.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
    document.head!.appendChild(el);

    this.fontRequested_ = true
  }
}

/*
// Rules for sizing the icon.
.material-icons.md-18 { font-size: 18px; }
.material-icons.md-24 { font-size: 24px; }
.material-icons.md-36 { font-size: 36px; }
.material-icons.md-48 { font-size: 48px; }

// Rules for using icons as black on a light background.
.material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }
.material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }

// Rules for using icons as white on a dark background.
.material-icons.md-light { color: rgba(255, 255, 255, 1); }
.material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }
*/
