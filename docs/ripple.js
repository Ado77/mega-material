import{L as t,c as i,h as e,_ as s,p as a,a as o}from"./common.js";import{d as r}from"./common2.js";import{p as n,m as h,g as c}from"./common3.js";const d=["touchstart","pointerdown","mousedown","keydown"],l=["touchend","pointerup","mouseup","contextmenu"];let p=[],m=class extends t{constructor(){super(),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.t=!1,this.i=0,this.s=0,this.o="0",this.h={width:0,height:0},this.l=0,this.p=0,this.m=0,this.g={left:0,top:0},this.v=this.u(),this._=()=>{this.t=!0,this.k()},this.A=t=>this.F(t),this.M=()=>this.B(),this.C=()=>this.P(),this.$=()=>this.q(),this.D=()=>this.R()}connectedCallback(){super.connectedCallback(),this.H(!0),requestAnimationFrame(()=>{this.unbounded&&this.T()})}disconnectedCallback(){super.disconnectedCallback(),this.j(),this.L()}H(t){t&&(d.forEach(t=>{this.addEventListener(t,this.A,n)}),this.unbounded&&window.addEventListener("resize",this.D,n)),this.addEventListener("focus",this.C),this.addEventListener("blur",this.$)}F(t){if(this.disabled)return;const i=this.v;if(i.isActivated)return;const e=this.U;e&&void 0!==t&&e.type!==t.type||(i.isActivated=!0,i.isProgrammatic=void 0===t,i.activationEvent=t,i.wasActivatedByPointer=!i.isProgrammatic&&void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type),void 0!==t&&p.length>0&&p.some(t=>!1)?this.X():(void 0!==t&&(p.push(t.target),this.I(t)),i.wasElementMadeActive=this.S(t),i.wasElementMadeActive&&this.V(),requestAnimationFrame(()=>{p=[],i.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(i.wasElementMadeActive=this.S(t),i.wasElementMadeActive&&this.V()),i.wasElementMadeActive||(this.v=this.u())})))}I(t){"keydown"===t.type?this.addEventListener("keyup",this.M):l.forEach(t=>{document.addEventListener(t,this.M)})}j(){d.forEach(t=>{this.removeEventListener(t,this.A)}),this.removeEventListener("focus",this.C),this.removeEventListener("blur",this.$),this.unbounded&&window.removeEventListener("resize",this.D)}L(){this.removeEventListener("keyup",this.M),l.forEach(t=>{document.removeEventListener(t,this.M)})}S(t){return void 0===t||"keydown"!==t.type||h(this,":active")}V(){this.T();let t="",i="";if(!this.unbounded){const{startPoint:e,endPoint:s}=this.G();t=`${e.x}px, ${e.y}px`,i=`${s.x}px, ${s.y}px`}this.J("--mega-ripple-fg-translate-start",t),this.J("--mega-ripple-fg-translate-end",i),clearTimeout(this.i),clearTimeout(this.s),this.K(),this.N("foreground-deactivation"),this.getBoundingClientRect(),this.O("foreground-activation"),this.i=window.setTimeout(()=>this._(),225)}G(){const{activationEvent:t,wasActivatedByPointer:i}=this.v;let e;return{startPoint:e={x:(e=i?c(t,{x:window.pageXOffset,y:window.pageYOffset},this.getBoundingClientRect()):{x:this.h.width/2,y:this.h.height/2}).x-this.l/2,y:e.y-this.l/2},endPoint:{x:this.h.width/2-this.l/2,y:this.h.height/2-this.l/2}}}k(){const{hasDeactivationUXRun:t,isActivated:i}=this.v;(t||!i)&&this.t&&(this.K(),this.O("foreground-deactivation"),this.s=window.setTimeout(()=>this.N("foreground-deactivation"),150))}K(){this.N("foreground-activation"),this.t=!1,this.getBoundingClientRect()}X(){this.U=this.v.activationEvent,this.v=this.u(),setTimeout(()=>this.U=void 0,300)}B(){const t=this.v;if(!t.isActivated)return;const i={...t};t.isProgrammatic?(requestAnimationFrame(()=>this.W(i)),this.X()):(this.L(),requestAnimationFrame(()=>{this.v.hasDeactivationUXRun=!0,this.W(i),this.X()}))}W({wasActivatedByPointer:t,wasElementMadeActive:i}){(t||i)&&this.k()}T(){this.h=this.getBoundingClientRect();const t=Math.max(this.h.height,this.h.width);this.m=this.unbounded?t:(()=>Math.sqrt(Math.pow(this.h.width,2)+Math.pow(this.h.height,2))+10)(),this.l=Math.floor(.6*t),this.o=`${this.m/this.l}`,this.Y()}Y(){this.J("--mega-ripple-fg-size",`${this.l}px`),this.J("--mega-ripple-fg-scale",this.o),this.unbounded&&(this.g={left:Math.round(this.h.width/2-this.l/2),top:Math.round(this.h.height/2-this.l/2)},this.J("--mega-ripple-left",`${this.g.left}px`),this.J("--mega-ripple-top",`${this.g.top}px`))}O(t){this.setAttribute(t,"")}N(t){this.removeAttribute(t)}R(){this.p&&cancelAnimationFrame(this.p),this.p=requestAnimationFrame(()=>{this.T(),this.p=0})}P(){requestAnimationFrame(()=>this.O("background-focused"))}q(){requestAnimationFrame(()=>this.N("background-focused"))}J(t,i){this.style.setProperty(t,i)}u(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}}static get styles(){return[r,i`@keyframes fg-radius-in{from{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mega-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mega-ripple-fg-translate-end,0)) scale(var(--mega-ripple-fg-scale,1))}}@keyframes fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mega-ripple-fg-opacity,0)}}@keyframes fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mega-ripple-fg-opacity,0)}to{opacity:0}}`,i`:host{--mega-ripple-fg-size:0;--mega-ripple-left:0;--mega-ripple-top:0;--mega-ripple-fg-scale:1;--mega-ripple-fg-translate-end:0;--mega-ripple-fg-translate-start:0;--mega-ripple-fg-opacity:0.12;-webkit-tap-highlight-color:transparent;will-change:transform,opacity;position:relative;outline:0;overflow:hidden;box-sizing:border-box;display:inline-block;contain:content;user-select:none;width:100%;height:100%}div::after,div::before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:"";background-color:var(--mega-ripple-bg-color,#000);top:-50%;left:-50%;width:200%;height:200%}div::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;transform:scale(var(--mega-ripple-fg-scale,1))}div::after{top:0;left:0;transform:scale(0);transform-origin:center center;transition:opacity 150ms linear;width:var(--mega-ripple-fg-size,100%);height:var(--mega-ripple-fg-size,100%)}:host([foreground-activation]) div::after{animation:fg-radius-in 225ms forwards,fg-opacity-in 75ms forwards}:host([foreground-deactivation]) div::after{animation:fg-opacity-out 150ms;transform:translate(var(--mega-ripple-fg-translate-end,0)) scale(var(--mega-ripple-fg-scale,1))}:host(:hover) div::before{opacity:.04}:host(:active) div::after,:host(:focus) div::before,:host([background-focused]) div::before{transition-duration:75ms;opacity:.12}:host([unbounded]) div{overflow:visible}:host([unbounded]) div::after,:host([unbounded]) div::before{top:var(--mega-ripple-top,0);left:var(--mega-ripple-left,0);width:var(--mega-ripple-fg-size,100%);height:var(--mega-ripple-fg-size,100%)}:host([primary]) div::after,:host([primary]) div::before{background-color:var(--mega-theme-primary,#6200ee)}:host([accent]) div::after,:host([accent]) div::before{background-color:var(--mega-theme-accent,#018786)}:host([activated]) div::after,:host([activated]) div::before{background-color:var(--mega-theme-primary,#6200ee);opacity:.12}`]}render(){return e`<div><slot></slot></div>`}};s([a({type:Boolean,reflect:!0})],m.prototype,"primary",void 0),s([a({type:Boolean,reflect:!0})],m.prototype,"accent",void 0),s([a({type:Boolean,reflect:!0})],m.prototype,"unbounded",void 0),s([a({type:Boolean,reflect:!0})],m.prototype,"disabled",void 0),m=s([o("mega-ripple")],m);export{m as RippleElement};
