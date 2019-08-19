import{L as t,d as i,e as o,c as e,h as n,_ as s,p as a,q as r,a as l}from"./common.js";let c=class extends t{constructor(){super(),this.opening=!1,this.closing=!1,this.opened=!1,this.scrollable=!1,this.stacked=!1,this.t=[],this.i=0,this.close=this.close.bind(this)}async open(){this.opening=!0,await this.updateComplete,this.opened=!0,this.o(),window.setTimeout(()=>{this.opening=!1},150)}async close(){this.opened&&(this.opened=!1,this.closing=!0,await this.updateComplete,window.setTimeout(()=>{this.closing=!1},75))}s(t){const i=t.target;this.t.forEach(t=>t.removeEventListener("click",this.close)),this.t=i.assignedNodes().filter(t=>1===t.nodeType),this.t.forEach(t=>t.addEventListener("click",this.close))}o(){this.l()}l(){var t;this.scrollable=!!(t=this.contentElement)&&t.scrollHeight>t.offsetHeight}static get styles(){return[i,o,e`#dialog,#scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}#dialog{display:none;z-index:7}#container{display:flex;flex-direction:row;justify-content:space-around;box-sizing:border-box;transform:scale(.8);opacity:0}#surface{box-shadow:var(--elevation-24);display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;min-width:280px;max-height:calc(100vh - 32px);border-radius:4px;background-color:var(--mega-theme-surface,#fff)}#title{color:rgba(0,0,0,.87);display:block;margin-top:0;line-height:normal;font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.25rem;line-height:2rem;font-weight:500;letter-spacing:.0125em;text-decoration:inherit;text-transform:inherit;display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0;padding:0 24px 9px;border-bottom:1px solid transparent}#title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}:host([scrollable]) #title{padding-bottom:15px}#content{color:rgba(0,0,0,.6);font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.5rem;font-weight:400;letter-spacing:.03125em;text-decoration:inherit;text-transform:inherit;flex-grow:1;box-sizing:border-box;margin:0;padding:20px 24px;overflow:auto;-webkit-overflow-scrolling:touch}#content ::slotted(:first-child){margin-top:0}#content ::slotted(:last-child){margin-bottom:0}#title+#content{padding-top:0}:host([scrollable]) #content{padding-top:8px;padding-bottom:8px}:host([scrollable]) #title,:host([scrollable]) footer{border-color:rgba(0,0,0,.12)}footer{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}:host([stacked]) footer{flex-direction:column;align-items:flex-end}slot[name=action]::slotted(*){margin-left:8px;margin-right:0;max-width:100%;text-align:right}slot[name=action]::slotted(:first-child){margin-left:0;margin-right:0}:host([stacked]) slot[name=action]::slotted(:not(:first-child)){margin-top:12px}#scrim{opacity:0;z-index:-1;background-color:rgba(0,0,0,.32)}@media (max-width:592px){#surface{max-width:calc(100vw - 32px)}}@media (min-width:592px){#surface{max-width:560px}}:host([closing]) #dialog,:host([opened]) #dialog,:host([opening]) #dialog{display:flex}:host([opening]) #scrim{transition:opacity 150ms linear}:host([opening]) #container{transition:opacity 75ms linear,transform 150ms 0s cubic-bezier(0,0,.2,1)}:host([closing]) #container,:host([closing]) #scrim{transition:opacity 75ms linear}:host([closing]) #container{transform:scale(1)}:host([opened]) #scrim{opacity:1}:host([opened]) #container{transform:scale(1);opacity:1}`]}render(){return n`<div id=dialog role=alertdialog aria-modal=true aria-labelledby=title aria-describedby=content><div id=container><div id=surface><h2 id=title>${this.title}</h2><div id=content><slot></slot></div><footer><slot name=action @slotchange=${this.s}></slot></footer></div></div><div id=scrim @click=${this.close}></div></div>`}};s([a({type:Boolean,reflect:!0})],c.prototype,"opening",void 0),s([a({type:Boolean,reflect:!0})],c.prototype,"closing",void 0),s([a({type:Boolean,reflect:!0})],c.prototype,"opened",void 0),s([a({type:Boolean,reflect:!0})],c.prototype,"scrollable",void 0),s([a({type:Boolean,reflect:!0})],c.prototype,"stacked",void 0),s([a({type:String})],c.prototype,"title",void 0),s([r("#content")],c.prototype,"contentElement",void 0),c=s([l("mega-dialog")],c);export{c as DialogElement};
