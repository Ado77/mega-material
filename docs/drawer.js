import{L as i,d as t,e,c as o,h as s,n,_ as a,p as r,q as l,a as h}from"./common.js";let d=class extends i{constructor(){super(...arguments),this.dismissible=!1,this.modal=!1,this.opened=!1,this.opening=!1,this.closing=!1,this.animating=!1,this.hasheader=!1,this.i=0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.i&&cancelAnimationFrame(this.i)}t(){return this.opening||this.animating}o(){return this.closing}async open(){this.opened||this.t()||this.o()||(this.opened=!0,this.animating=!0,await this.updateComplete,this.drawerElement.getBoundingClientRect(),this.opening=!0)}close(){!this.opened||this.t()||this.o()||(this.closing=!0)}l(i){const{keyCode:t,key:e}=i;("Escape"===e||27===t)&&this.close()}h(i){this.closing&&(this.opened=!1),this.animating=!1,this.opening=!1,this.closing=!1}p(){this.opened?this.close():this.open()}m(){this.close()}static get styles(){return[t,e,o`:host{display:flex;height:100%;contain:content}aside{border-color:rgba(0,0,0,.12);background-color:#fff;border-radius:0;z-index:6;width:256px;display:flex;flex-direction:column;flex-shrink:0;box-sizing:border-box;height:100%;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;transition-timing-function:cubic-bezier(.4,0,.2,1);border-right-width:1px;border-right-style:solid;overflow:hidden}h3{color:rgba(0,0,0,.87);font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.25rem;line-height:2rem;font-weight:500;letter-spacing:.0125em;text-decoration:inherit;text-transform:inherit;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;height:56px;line-height:56px;vertical-align:0}h6{color:rgba(0,0,0,.6);font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;display:block;margin-top:3px;line-height:normal;margin-bottom:0;height:20px;line-height:20px}aside .mega-list-item{border-radius:4px}:host([opened]:not([closing]):not([modal])) .app-content{margin-left:256px;margin-right:0}:host([animating]) aside{transform:translateX(-100%)}:host([opening]) aside{transform:translateX(0);transition-duration:250ms}:host([closing]) aside{transform:translateX(-100%);transition-duration:.2s}header{flex-shrink:0;box-sizing:border-box;min-height:64px;padding:0 16px 4px}.content{height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}:host([dismissible]) aside{left:0;right:initial;display:none;position:absolute}:host([dismissible][opened]) aside{display:flex}.app-content{margin-left:0;margin-right:0;position:relative;flex:auto;overflow:auto;position:relative}:host([modal]) aside{box-shadow:var(--elevation-16);left:0;right:initial;display:none;position:fixed}:host([modal]) .scrim{background-color:rgba(0,0,0,.32)}:host([modal][opened]) aside{display:flex}.scrim{display:none;position:fixed;top:0;left:0;width:100%;height:100%;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);z-index:5}:host([opened]) .scrim{display:block}:host([animating]) .scrim{opacity:0}:host([opening]) .scrim{transition-duration:250ms;opacity:1}:host([closing]) .scrim{transition-duration:.2s;opacity:0}`]}render(){return s`<aside @keydown="${this.l}" @transitionend="${this.h}"><header ?hidden="${!this.hasheader}"><slot name="header"><h3><slot name="title"></slot></h3><h6><slot name="subtitle"></slot></h6></slot></header><div class="content"><slot></slot></div></aside>${this.modal?s`<div class="scrim" @click="${this.m}"></div>`:n}<div class="app-content"><slot name="app-content" @top-app-bar:nav="${this.p}"></slot></div>`}};a([r({type:Boolean,reflect:!0})],d.prototype,"dismissible",void 0),a([r({type:Boolean,reflect:!0})],d.prototype,"modal",void 0),a([r({type:Boolean,reflect:!0})],d.prototype,"opened",void 0),a([r({type:Boolean,reflect:!0})],d.prototype,"opening",void 0),a([r({type:Boolean,reflect:!0})],d.prototype,"closing",void 0),a([r({type:Boolean,reflect:!0})],d.prototype,"animating",void 0),a([r({type:Boolean,reflect:!0})],d.prototype,"hasheader",void 0),a([l("aside")],d.prototype,"drawerElement",void 0),d=a([h("mega-drawer")],d);export{d as DrawerElement};
