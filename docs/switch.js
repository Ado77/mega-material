import{L as e,d as t,e as o,c as r,h as i,_ as a,p as s,a as c}from"./common.js";import"./common2.js";let n=class extends e{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}t(e){const t=e.target;this.checked=t.checked}static get styles(){return[t,o,r`:host{display:inline-block;position:relative;outline:0;user-select:none;contain:layout}:host([checked]) .track{background-color:var(--mega-theme-secondary,#018786);border-color:var(--mega-theme-secondary,#018786);opacity:.54}:host([checked]) .thumb{background-color:var(--mega-theme-secondary,#018786);border-color:var(--mega-theme-secondary,#018786)}:host(:not([checked])) .track{background-color:#000;border-color:#000}:host(:not([checked])) .thumb{background-color:#fff;border-color:#fff}input{left:0;right:initial;position:absolute;top:0;width:68px;height:48px;margin:0;opacity:0;cursor:pointer;pointer-events:auto}.track{box-sizing:border-box;width:32px;height:14px;border:1px solid;border-radius:7px;opacity:.38;transition:opacity 90ms cubic-bezier(.4,0,.2,1),background-color 90ms cubic-bezier(.4,0,.2,1),border-color 90ms cubic-bezier(.4,0,.2,1)}mega-ripple{left:-18px;right:initial;display:flex;position:absolute;top:-17px;align-items:center;justify-content:center;width:48px;height:48px;transform:translateX(0);transition:transform 90ms cubic-bezier(.4,0,.2,1),background-color 90ms cubic-bezier(.4,0,.2,1),border-color 90ms cubic-bezier(.4,0,.2,1)}.thumb{box-shadow:var(--elevation-02);box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}:host([checked]) mega-ripple{transform:translateX(20px)}:host([checked]) input{transform:translateX(-20px)}:host([disabled]){opacity:.38;pointer-events:none}:host([disabled]) .thumb{border-width:1px}:host([disabled]) input{cursor:default;pointer-events:none}mega-ripple{--mega-ripple-fg-opacity:0.12;--mega-ripple-fg-size:0;--mega-ripple-left:0;--mega-ripple-top:0;--mega-ripple-fg-scale:1;--mega-ripple-fg-translate-end:0;--mega-ripple-fg-translate-start:0}:host(:not([checked])) mega-ripple{--mega-ripple-fg-opacity:0.24}`]}render(){return i`<div class=track></div><mega-ripple unbounded><div class=thumb><input type=checkbox id=basic-switch role=switch ?checked=${this.checked} ?disabled=${this.disabled} @change=${this.t}></div></mega-ripple>`}};a([s({type:Boolean,reflect:!0})],n.prototype,"checked",void 0),a([s({type:Boolean,reflect:!0})],n.prototype,"disabled",void 0),n=a([c("mega-switch")],n);export{n as SwitchElement};
