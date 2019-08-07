import{L as e,c as i,h as t,_ as a,p as o,a as r}from"./common.js";import{d as n}from"./common2.js";import"./icon.js";import"./common3.js";import"./ripple.js";let s=class extends e{constructor(){super(...arguments),this.type=""}static get styles(){return[n,i`:host{padding:4px;display:flex;flex-wrap:wrap;box-sizing:border-box}::slotted(mega-chip){margin:4px}:host([type=input]) ::slotted(mega-chip){animation:mega-chip-entry .1s cubic-bezier(0,0,.2,1)}`]}render(){return t`<slot></slot>`}};a([o({type:String,reflect:!0})],s.prototype,"type",void 0),s=a([r("mega-chip-set")],s);let c=class extends e{constructor(){super(...arguments),this.selected=!1,this.text="",this.icon="",this.trailingIcon="",this.checkmark=""}static get styles(){return[n,i`@keyframes mega-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mega-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mega-ripple-fg-translate-end,0)) scale(var(--mega-ripple-fg-scale,1))}}@keyframes mega-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mega-ripple-fg-opacity,0)}}@keyframes mega-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mega-ripple-fg-opacity,0)}to{opacity:0}}:host{--mega-ripple-fg-size:0;--mega-ripple-left:0;--mega-ripple-top:0;--mega-ripple-fg-scale:1;--mega-ripple-fg-translate-end:0;--mega-ripple-fg-translate-start:0;-webkit-tap-highlight-color:transparent;will-change:transform,opacity;border-radius:16px;background-color:#e0e0e0;color:rgba(0,0,0,.87);font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.01786em;text-decoration:inherit;text-transform:inherit;display:inline-flex;position:relative;align-items:center;outline:0;cursor:pointer;overflow:hidden}mega-ripple{width:100%;height:100%;border-radius:inherit;padding:7px 12px;line-height:17px;white-space:nowrap;display:inline-flex;position:relative;align-items:center}:host([selected]){color:var(--mega-theme-primary,#6200ee)}:host([selected]):hover{color:var(--mega-theme-primary,#6200ee)}path{stroke:var(--mega-theme-primary,#6200ee)}slot[name=icon]::slotted(*){color:rgba(0,0,0,.54)}:host:hover slot[name=icon]::slotted(*){color:rgba(0,0,0,.62)}:host:focus slot[name=icon]::slotted(*){color:rgba(0,0,0,.87)}.mega-chip .mega-chip__icon.mega-chip__icon--leading:not(.mega-chip__icon--leading-hidden){width:20px;height:20px;font-size:20px}.mega-chip .mega-chip__icon.mega-chip__icon--trailing{width:18px;height:18px;font-size:18px}:host:hover{color:var(--mega-theme-on-surface,#000)}.mega-chip--exit{transition:opacity 75ms cubic-bezier(.4,0,.2,1),width 150ms cubic-bezier(0,0,.2,1),padding .1s linear,margin .1s linear;opacity:0}:host([selected]){background-color:var(--mega-theme-surface,#fff)}slot[name=checkmark]{border-radius:50%;outline:0;vertical-align:middle}.mega-chip__icon--trailing{margin:0 -4px 0 4px}slot[name=checkmark]::sloted(*),slot[name=icon]::sloted(*){height:20px;margin:-4px 4px -4px -4px}path{transition:stroke-dashoffset 150ms 50ms cubic-bezier(.4,0,.6,1);stroke-width:2px;stroke-dashoffset:29.78334;stroke-dasharray:29.78334}:host([selected]) path{stroke-dashoffset:0}svg{width:0;height:20px;transition:width 150ms cubic-bezier(.4,0,.2,1)}:host([selected]) svg{width:20px}.mega-chip__icon--leading{transition:opacity 75ms linear;opacity:1}.mega-chip__icon--leading+slot[name=checkmark]{transition:opacity 75ms linear;opacity:0}.mega-chip__icon--leading+slot[name=checkmark]::slotted(*){transition:width 0s}:host([selected]) .mega-chip__icon--leading{opacity:0}:host([selected]) .mega-chip__icon--leading+slot[name=checkmark]{width:0;opacity:1}.mega-chip__icon--leading-hidden.mega-chip__icon--leading{width:0;opacity:0}.mega-chip__icon--leading-hidden.mega-chip__icon--leading+slot[name=checkmark]{width:20px}@keyframes mega-chip-entry{from{transform:scale(.8);opacity:.4}to{transform:scale(1);opacity:1}}`]}render(){return t`<mega-ripple><slot name=icon><mega-icon>${this.icon}</mega-icon></slot><slot name=checkmark><svg viewBox="-2 -3 30 30"><path fill=none stroke=black d="M1.73,12.91 8.1,19.28 22.79,4.59"/></svg></slot><slot></slot></mega-ripple>`}};a([o({type:Boolean,reflect:!0})],c.prototype,"selected",void 0),a([o({type:String,reflect:!0})],c.prototype,"text",void 0),a([o({type:String,reflect:!0})],c.prototype,"icon",void 0),a([o({type:Boolean,reflect:!0,attribute:"trailing-icon"})],c.prototype,"trailingIcon",void 0),a([o({type:String,reflect:!0})],c.prototype,"checkmark",void 0),c=a([r("mega-chip")],c);export{c as ChipElement,s as ChipSetElement};
