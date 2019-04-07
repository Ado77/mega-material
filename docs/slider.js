import{a as t,b as i,c as s,d as e,h as r,e as o,g as a,i as n,f as h}from"./common.js";import"./icon.js";import"./ripple.js";const c=["mousedown","pointerdown","touchstart"],d=["mouseup","pointerup","touchend"],l={mousedown:"mousemove",pointerdown:"pointermove",touchstart:"touchmove"};let u=class extends t{constructor(){super(),this.active=!1,this.discrete=!1,this.markers=!1,this.disabled=!1,this.value=0,this.min=0,this.max=1,this.step=0,this.inTransit=!1,this.t=!1,this.i=!1,this.s=this.s.bind(this),this.o=this.s.bind(this),this.h=this.h.bind(this),this.l=this.l.bind(this),this.u=this.u.bind(this),this.m=this.m.bind(this)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{c.forEach(t=>{this.addEventListener(t,this.s),this.thumbContainer.addEventListener(t,this.o)})}),this.addEventListener("keydown",this.h),this.addEventListener("focus",this.l),this.addEventListener("blur",this.u),window.addEventListener("resize",this.m),this.p()}disconnectedCallback(){super.disconnectedCallback(),c.forEach(t=>{this.removeEventListener(t,this.s),this.thumbContainer.removeEventListener(t,this.o)}),this.removeEventListener("keydown",this.h),this.removeEventListener("focus",this.l),this.removeEventListener("blur",this.u),window.removeEventListener("resize",this.m)}s(t){this.g(t)}o(t){this.t=!0}g(t){if(this.disabled)return;this.i=!0,this.inTransit=!this.t,this.t=!1,this.active=!0;const i=t=>{this.k(t)},s=l[t.type],e=()=>{this.v(),document.body.removeEventListener(s,i),d.forEach(t=>document.body.removeEventListener(t,e))};document.body.addEventListener(s,i),d.forEach(t=>document.body.addEventListener(t,e)),this._(t)}k(t){t.preventDefault(),this._(t)}v(){this.active=!1,this.notifyChange()}h(t){const i=this.A(t),s=this.H(i);isNaN(s)||(t.preventDefault(),this.P(s,!0),this.notifyChange())}l(t){this.i}u(t){this.i=!1}m(t){this.p()}A(t){return"ArrowLeft"===t.key||37===t.keyCode?"ArrowLeft":"ArrowRight"===t.key||39===t.keyCode?"ArrowRight":"ArrowUp"===t.key||38===t.keyCode?"ArrowUp":"ArrowDown"===t.key||40===t.keyCode?"ArrowDown":"Home"===t.key||36===t.keyCode?"Home":"End"===t.key||35===t.keyCode?"End":"PageUp"===t.key||33===t.keyCode?"PageUp":"PageDown"===t.key||34===t.keyCode?"PageDown":""}H(t){let i=this.step||(this.max-this.min)/100;switch(t){case"ArrowLeft":case"ArrowDown":return this.value-i;case"ArrowRight":case"ArrowUp":return this.value+i;case"Home":return this.min;case"End":return this.max;case"PageUp":return this.value+4*i;case"PageDown":return this.value-4*i;default:return NaN}}N(t){return t.targetTouches&&t.targetTouches.length>0?t.targetTouches[0].pageX:t.pageX}_(t){const i=this.N(t),s=this.U(i);this.P(s,!0)}U(t){let i=(t-this.D.left)/this.D.width;return this.min+i*(this.max-this.min)}P(t,i,s=!1){if(t===this.value&&!s)return;const e=t===this.min||t===this.max;this.step&&!e&&(t=this.C(t)),t<this.min?t=this.min:t>this.max&&(t=this.max),this.value=t,this.V(),i&&(this.notifyInput(),this.discrete&&this.B(t))}B(t){}p(){this.D=this.getBoundingClientRect(),this.V()}C(t){return Math.round(t/this.step)*this.step}V(){const t=(this.value-this.min)/(this.max-this.min);let i=t*this.D.width;if(this.inTransit){const t=()=>{this.inTransit=!1,this.thumbContainer.removeEventListener("transitionend",t)};this.thumbContainer.addEventListener("transitionend",t)}requestAnimationFrame(()=>{this.thumbContainer.style.transform=`translateX(${i}px) translateX(-50%)`,this.track.style.transform=`scaleX(${t})`})}notifyChange(){}notifyInput(){}static get styles(){return[i,s`@keyframes mdc-slider-emphasize{0%{animation-timing-function:ease-out}50%{animation-timing-function:ease-in;transform:scale(.85)}100%{transform:scale(.571)}}:host{display:block;position:relative;width:100%;height:48px;cursor:pointer;touch-action:pan-x;-webkit-tap-highlight-color:transparent}:host(:not([disabled])) .track{background-color:var(--mdc-theme-secondary,#018786)}:host(:not([disabled])) .track-container{background-color:rgba(1,135,134,.26)}:host(:not([disabled])) .track-marker-container::after,:host(:not([disabled])) .track-marker::after{background-color:var(--mdc-theme-secondary,#018786)}:host(:not([disabled])) .thumb{fill:var(--mdc-theme-secondary,#018786);stroke:var(--mdc-theme-secondary,#018786)}:host(:not([disabled])) .focus-ring{background-color:var(--mdc-theme-secondary,#018786)}:host(:not([disabled])) .pin{color:var(--mdc-theme-text-primary-on-dark,#fff);background-color:var(--mdc-theme-secondary,#018786)}:host([disabled]){cursor:auto}:host([disabled]) .track{background-color:#9a9a9a}:host([disabled]) .track-container{background-color:rgba(154,154,154,.26)}:host([disabled]) .track-marker-container::after,:host([disabled]) .track-marker::after{background-color:#9a9a9a}:host([disabled]) .thumb{fill:#9a9a9a;stroke:#9a9a9a;stroke:var(--mdc-slider-bg-color-behind-component,#fff)}:host:focus{outline:0}.track-container{position:absolute;top:50%;width:100%;height:2px;overflow:hidden}.track{position:absolute;width:100%;height:100%;transform-origin:left top;will-change:transform}.track-marker-container{display:flex;margin-right:0;margin-left:-1px;xvisibility:hidden}.track-marker-container::after{display:block;width:2px;height:2px;content:""}.track-marker{flex:1}.track-marker::after{display:block;width:2px;height:2px;content:""}.track-marker:first-child::after{width:3px}.thumb-container{position:absolute;top:15px;left:0;width:21px;height:100%;user-select:none;will-change:transform}.thumb{position:absolute;top:0;left:0;transform:scale(.571);transition:transform .1s ease-out,fill .1s ease-out,stroke .1s ease-out;stroke-width:3.5}.focus-ring{width:21px;height:21px;transition:transform .266s ease-out,opacity .266s ease-out,background-color .266s ease-out;border-radius:50%;opacity:0}.pin{display:flex;position:absolute;top:0;left:0;align-items:center;justify-content:center;width:26px;height:26px;margin-top:-2px;margin-left:-2px;transform:rotate(-45deg) scale(0) translate(0,0);transition:transform .1s ease-out;border-radius:50% 50% 50% 0;z-index:1}.pin-value-marker{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;transform:rotate(45deg)}:host([active]) .thumb{transform:scale3d(1,1,1)}:host([focus]) .thumb{animation:mdc-slider-emphasize .266s linear}:host([focus]) .focus-ring{transform:scale3d(1.55,1.55,1.55);opacity:.25}:host([in-transit]) .thumb{transition-delay:140ms}`]}render(){const t=this.discrete&&this.markers&&0!==this.step?(this.max-this.min)/this.step:1,i=Array(t).fill(e`<div class=track-marker></div>`);return this.max,this.step,this.step,e`<div class=track-container><div class=track></div>${this.discrete&&this.markers?e`<div class=track-marker-container>${i.map(t=>t)}</div>`:r}</div><div class=thumb-container><div class=pin><span class=pin-value-marker>${this.value}</span></div><svg class=thumb width=21 height=21><circle cx=10.5 cy=10.5 r=7.875></circle></svg><div class=focus-ring></div></div>`}};o([a({type:Boolean,reflect:!0})],u.prototype,"active",void 0),o([a({type:Boolean,reflect:!0})],u.prototype,"discrete",void 0),o([a({type:Boolean,reflect:!0})],u.prototype,"markers",void 0),o([a({type:Boolean,reflect:!0})],u.prototype,"disabled",void 0),o([a({type:Number,reflect:!0})],u.prototype,"value",void 0),o([a({type:Number,reflect:!0})],u.prototype,"min",void 0),o([a({type:Number,reflect:!0})],u.prototype,"max",void 0),o([a({type:Number,reflect:!0})],u.prototype,"step",void 0),o([a({type:Boolean,reflect:!0,attribute:"in-transit"})],u.prototype,"inTransit",void 0),o([n(".thumb-container")],u.prototype,"thumbContainer",void 0),o([n(".track")],u.prototype,"track",void 0),u=o([h("mwc-slider")],u);export{u as SliderElement};