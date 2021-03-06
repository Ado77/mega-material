import { LitElement, html, customElement, css, property } from 'lit-element';
import { defaultCSS } from './styles';

declare global {
  interface HTMLElementTagNameMap {
    'mega-linear-progress': LinearProgressElement;
  }
}

@customElement('mega-linear-progress')
export class LinearProgressElement extends LitElement {
  @property({ type: Boolean, reflect: true })
  indeterminate = false;

  @property({ type: Number, reflect: true })
  progress = 1;

  @property({ type: Number, reflect: true })
  buffer = 1;

  @property({ type: Boolean, reflect: true })
  reverse = false;

  @property({ type: Boolean, reflect: true })
  closed = false;

  static get styles() {
    return [
      defaultCSS,
      css`
@keyframes primary-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes primary-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}

@keyframes secondary-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}

@keyframes secondary-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}

@keyframes buffering {
  to {
    transform: translateX(-10px);
  }
}

@keyframes primary-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}

@keyframes secondary-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}

@keyframes buffering-reverse {
  to {
    transform: translateX(10px);
  }
}
:host {
  display: block;
  position: relative;
  width: 100%;
  height: 4px;
  transform: translateZ(0);
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  overflow: hidden;
  contain: content;
}
#primary,
#secondary {
  position: absolute;
  width: 100%;
  height: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
}
span {
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 100%;
  animation: none;
}
#dots {
  position: absolute;
  width: 100%;
  height: 100%;
  animation: buffering 250ms infinite linear;
  background-repeat: repeat-x;
  background-size: 10px 4px;
}
#buffer {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: scaleX(var(--mega-linear-buffer, 0));
}
#primary {
  transform: scaleX(var(--mega-linear-progress, 0));
}
#secondary {
  visibility: hidden;
}
:host([indeterminate]) #primary,
:host([indeterminate]) #secondary {
  transition: none;
}
:host([indeterminate]) #primary {
  left: -145.166611%;
  animation: primary-translate 2s infinite linear;
}
:host([indeterminate]) #primary > span {
  animation: primary-scale 2s infinite linear;
}
:host([indeterminate]) #secondary {
  left: -54.888891%;
  animation: secondary-translate 2s infinite linear;
  visibility: visible;
}
:host([indeterminate]) #secondary > span {
  animation: secondary-scale 2s infinite linear;
}
:host([reverse]) #primary,
:host([reverse]) #secondary,
:host([reverse]) #buffer {
  right: 0;
  transform-origin: center right;
}
:host([reverse]) #primary {
  animation-name: primary-translate-reverse;
}
:host([reverse]) #secondary {
  animation-name: secondary-translate-reverse;
}
:host([reverse]) #dots {
  animation: buffering-reverse 250ms infinite linear;
}
:host([closed]) {
  opacity: 0;
}

span {
  background-color: var(--mega-theme-primary, #6200ee);
}

#dots {
  background-image: var(--mega-linear-progress-buffering-dots-image, url('data:image/svg+xml,%3Csvg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" enable-background="new 0 0 5 2" xml:space="preserve" viewBox="0 0 5 2" preserveAspectRatio="none slice"%3E%3Ccircle cx="1" cy="1" r="1" fill="%23e6e6e6"/%3E%3C/svg%3E'));
}

#buffer {
  background-color: var(--mega-theme-secondary, #e6e6e6);
}

:host([indeterminate][reverse]) #primary {
  right: -145.166611%;
  left: auto;
}
:host([indeterminate][reverse]) #secondary {
  right: -54.888891%;
  left: auto;
}`
    ]
  }

  render() {
    this.style.setProperty('--mega-linear-buffer', this.buffer.toFixed(2))
    this.style.setProperty('--mega-linear-progress', this.progress.toFixed(2))
    return html`
<div id="dots"></div>
<div id="buffer"></div>
<div id="primary"><span></span></div>
<div id="secondary"><span></span></div>`
  }
}
