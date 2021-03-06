import { LitElement, html, customElement, css, property, query } from 'lit-element';
import { nothing } from 'lit-html';

import { defaultCSS, elevationCSS } from './styles';

declare global {
  interface HTMLElementTagNameMap {
    'mega-drawer': DrawerElement;
  }
}

@customElement('mega-drawer')
export class DrawerElement extends LitElement {
  @property({ type: Boolean, reflect: true })
  dismissible = false;

  @property({ type: Boolean, reflect: true })
  modal = false;

  @property({ type: Boolean, reflect: true })
  opened = false;

  // TODO: opening, closing and animating don't need to be public on :host
  // they should be applied to the aside drawer element only
  @property({ type: Boolean, reflect: true })
  opening = false;

  @property({ type: Boolean, reflect: true })
  closing = false;

  @property({ type: Boolean, reflect: true })
  animating = false;

  @property({ type: Boolean, reflect: true })
  hasheader = false;  // TODO: calc from slots so it's automatic

  @query('aside')
  private drawerElement: HTMLElement;

  private animationFrame_ = 0;

  connectedCallback() {
    super.connectedCallback()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    if (this.animationFrame_) {
      cancelAnimationFrame(this.animationFrame_)
    }
  }

  private isOpening_() {
    return this.opening || this.animating
  }

  private isClosing_() {
    return this.closing
  }

  async open() {
    if (this.opened || this.isOpening_() || this.isClosing_()) {
      return
    }

    this.opened = true
    this.animating = true

    await this.updateComplete

    // Wait a frame once display is no longer "none", to establish basis for animation
    this.drawerElement.getBoundingClientRect()
    this.opening = true

    // this.saveFocus_();
  }

  close() {
    if (!this.opened || this.isOpening_() || this.isClosing_()) {
      return
    }

    this.closing = true
  }

  private handleKeydown_(evt: KeyboardEvent) {
    const { keyCode, key } = evt;
    const isEscape = key === 'Escape' || keyCode === 27;
    if (isEscape) {
      this.close();
    }
  }

  private handleTransitionEnd_(evt: TransitionEvent) {
    if (this.closing) {
      this.opened = false
      // this.restoreFocus_();
      // this.notifyClose_();
    } else {
      // this.focusActiveNavigationItem_();
      // this.notifyOpen_();
    }

    this.animating = false
    this.opening = false
    this.closing = false
  }

  private navigationIconClicked_() {
    if (this.opened) {
      this.close()
    } else {
      this.open()
    }
  }

  private handleScrimClick_() {
    this.close()
  }

  // TODO: Save & Restore Focus (plus Trap & Release)
  // TODO: Notify on Open and Close

  static get styles() {
    return [
      defaultCSS,
      elevationCSS,
      css`
:host {
  display: flex;
  height: 100%;
  contain: content;
}

aside {
  border-color: rgba(0, 0, 0, 0.12);
  background-color: #fff;
  border-radius: 0 0 0 0;
  z-index: 6;
  width: 256px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  box-sizing: border-box;
  height: 100%;
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  border-right-width: 1px;
  border-right-style: solid;
  overflow: hidden;
}

h3 {
  color: rgba(0, 0, 0, 0.87);
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 1.25rem;
  line-height: 2rem;
  font-weight: 500;
  letter-spacing: 0.0125em;
  text-decoration: inherit;
  text-transform: inherit;
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
  height: 56px;
  line-height: 56px;
  vertical-align: 0;
}

h6 {
  color: rgba(0, 0, 0, 0.6);
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.0178571429em;
  text-decoration: inherit;
  text-transform: inherit;
  display: block;
  margin-top: 3px;
  line-height: normal;
  margin-bottom: 0;
  height: 20px;
  line-height: 20px;
}

/* TODO: CSS variables for subheaders, icons, list-item, list-item-actived etc...
.mega-drawer .mega-list-group__subheader {
  color: rgba(0, 0, 0, 0.6);
}
.mega-drawer .mega-list-item__graphic {
  color: rgba(0, 0, 0, 0.6);
}
.mega-drawer .mega-list-item {
  color: rgba(0, 0, 0, 0.87);
}
.mega-drawer .mega-list-item--activated .mega-list-item__graphic {
  color: #6200ee;
}
.mega-drawer .mega-list-item--activated {
  color: rgba(98, 0, 238, 0.87);
}
*/

aside .mega-list-item {
  border-radius: 4px;
}

:host([opened]:not([closing]):not([modal])) .app-content {
  margin-left: 256px;
  margin-right: 0;
}

/*
TODO: handle slotted item types (css variables?)

aside .mega-list-item {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 0.875rem;
  line-height: 1.375rem;
  font-weight: 500;
  letter-spacing: 0.0071428571em;
  text-decoration: inherit;
  text-transform: inherit;
  height: calc(48px - 2 * 4px);
  margin: 8px 8px;
  padding: 0 8px;
}
aside .mega-list-item:nth-child(1) {
  margin-top: 2px;
}
aside .mega-list-item:nth-last-child(1) {
  margin-bottom: 0;
}
aside .mega-list-group__subheader {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.0178571429em;
  text-decoration: inherit;
  text-transform: inherit;
  display: block;
  margin-top: 0;
  line-height: normal;
  margin: 0;
  padding: 0 16px;
}
aside .mega-list-group__subheader::before {
  display: inline-block;
  width: 0;
  height: 24px;
  content: "";
  vertical-align: 0;
}
aside .mega-list-divider {
  margin: 3px 0 4px 0;
}
aside .mega-list-item__text,
aside .mega-list-item__graphic {
  pointer-events: none;
}
*/

:host([animating]) aside  {
  transform: translateX(-100%);
}
:host([opening]) aside {
  transform: translateX(0);
  transition-duration: 250ms;
}

:host([closing]) aside {
  transform: translateX(-100%);
  transition-duration: 200ms;
}

header {
  flex-shrink: 0;
  box-sizing: border-box;
  min-height: 64px;
  padding: 0 16px 4px;
}

.content {
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

:host([dismissible]) aside {
  left: 0;
  right: initial;
  display: none;
  position: absolute;
}
:host([dismissible][opened]) aside {
  display: flex;
}

.app-content {
  margin-left: 0;
  margin-right: 0;
  position: relative;
  flex: auto;
  overflow: auto;
  position: relative;
}

:host([modal]) aside {
  box-shadow: var(--elevation-16);
  left: 0;
  right: initial;
  display: none;
  position: fixed;
}
:host([modal]) .scrim {
  background-color: rgba(0, 0, 0, 0.32);
}
:host([modal][opened]) aside {
  display: flex;
}

.scrim {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 5;
}
:host([opened]) .scrim {
  display: block;
}
:host([animating]) .scrim {
  opacity: 0;
}
:host([opening]) .scrim {
  transition-duration: 250ms;
  opacity: 1;
}
:host([closing]) .scrim {
  transition-duration: 200ms;
  opacity: 0;
}`
    ]
  }

  render() {
    return html`
<aside @keydown=${this.handleKeydown_} @transitionend=${this.handleTransitionEnd_}>
  <header ?hidden=${!this.hasheader}>
    <slot name="header">
      <h3><slot name="title"></slot></h3>
      <h6><slot name="subtitle"></slot></h6>
    </slot>
  </header>
  <div class="content"><slot></slot></div>
</aside>
${this.modal ? html`<div class="scrim" @click=${this.handleScrimClick_}></div>` : nothing}
<div class="app-content"><slot name="app-content" @top-app-bar:nav=${this.navigationIconClicked_}></slot></div>`
  }
}
