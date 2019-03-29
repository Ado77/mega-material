import{i,j as t,k as n,a as e,b as a,c as r,d as s,f as o,e as m}from"./common.js";const c=new WeakMap,b=new WeakMap,f=i(i=>e=>{if(!(e instanceof t)||e instanceof n||"style"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");b.has(e)||(e.committer.element.style.cssText=e.committer.strings.join(" "),b.set(e,!0));const a=e.committer.element.style,r=c.get(e);for(const t in r)t in i||(-1===t.indexOf("-")?a[t]=null:a.removeProperty(t));for(const t in i)-1===t.indexOf("-")?a[t]=i[t]:a.setProperty(t,i[t]);c.set(e,i)});let l=class extends e{constructor(){super(...arguments),this.determinate=!1,this.progress=1,this.buffer=1,this.reverse=!1,this.closed=!1}static get styles(){return[a`@-webkit-keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(.5,0,.701732,.495819);animation-timing-function:cubic-bezier(.5,0,.701732,.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}100%{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}@keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(.5,0,.701732,.495819);animation-timing-function:cubic-bezier(.5,0,.701732,.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}100%{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}@-webkit-keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(.334731,.12482,.785844,1);animation-timing-function:cubic-bezier(.334731,.12482,.785844,1);-webkit-transform:scaleX(.08);transform:scaleX(.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(.06,.11,.6,1);animation-timing-function:cubic-bezier(.06,.11,.6,1);-webkit-transform:scaleX(.661479);transform:scaleX(.661479)}100%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}@keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(.334731,.12482,.785844,1);animation-timing-function:cubic-bezier(.334731,.12482,.785844,1);-webkit-transform:scaleX(.08);transform:scaleX(.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(.06,.11,.6,1);animation-timing-function:cubic-bezier(.06,.11,.6,1);-webkit-transform:scaleX(.661479);transform:scaleX(.661479)}100%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}@-webkit-keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.515058,.409685);animation-timing-function:cubic-bezier(.15,0,.515058,.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(.31033,.284058,.8,.733712);animation-timing-function:cubic-bezier(.31033,.284058,.8,.733712);-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(.4,.627035,.6,.902026);animation-timing-function:cubic-bezier(.4,.627035,.6,.902026);-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%)}100%{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}@keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.515058,.409685);animation-timing-function:cubic-bezier(.15,0,.515058,.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(.31033,.284058,.8,.733712);animation-timing-function:cubic-bezier(.31033,.284058,.8,.733712);-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(.4,.627035,.6,.902026);animation-timing-function:cubic-bezier(.4,.627035,.6,.902026);-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%)}100%{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}@-webkit-keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(.205028,.057051,.57661,.453971);animation-timing-function:cubic-bezier(.205028,.057051,.57661,.453971);-webkit-transform:scaleX(.08);transform:scaleX(.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(.152313,.196432,.648374,1.004315);animation-timing-function:cubic-bezier(.152313,.196432,.648374,1.004315);-webkit-transform:scaleX(.457104);transform:scaleX(.457104)}44.15%{-webkit-animation-timing-function:cubic-bezier(.257759,-.003163,.211762,1.38179);animation-timing-function:cubic-bezier(.257759,-.003163,.211762,1.38179);-webkit-transform:scaleX(.72796);transform:scaleX(.72796)}100%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}@keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(.205028,.057051,.57661,.453971);animation-timing-function:cubic-bezier(.205028,.057051,.57661,.453971);-webkit-transform:scaleX(.08);transform:scaleX(.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(.152313,.196432,.648374,1.004315);animation-timing-function:cubic-bezier(.152313,.196432,.648374,1.004315);-webkit-transform:scaleX(.457104);transform:scaleX(.457104)}44.15%{-webkit-animation-timing-function:cubic-bezier(.257759,-.003163,.211762,1.38179);animation-timing-function:cubic-bezier(.257759,-.003163,.211762,1.38179);-webkit-transform:scaleX(.72796);transform:scaleX(.72796)}100%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}@-webkit-keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}@keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}@-webkit-keyframes primary-indeterminate-translate-reverse{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(.5,0,.701732,.495819);animation-timing-function:cubic-bezier(.5,0,.701732,.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);-webkit-transform:translateX(-83.67142%);transform:translateX(-83.67142%)}100%{-webkit-transform:translateX(-200.611057%);transform:translateX(-200.611057%)}}@keyframes primary-indeterminate-translate-reverse{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(.5,0,.701732,.495819);animation-timing-function:cubic-bezier(.5,0,.701732,.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);-webkit-transform:translateX(-83.67142%);transform:translateX(-83.67142%)}100%{-webkit-transform:translateX(-200.611057%);transform:translateX(-200.611057%)}}@-webkit-keyframes secondary-indeterminate-translate-reverse{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.515058,.409685);animation-timing-function:cubic-bezier(.15,0,.515058,.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(.31033,.284058,.8,.733712);animation-timing-function:cubic-bezier(.31033,.284058,.8,.733712);-webkit-transform:translateX(-37.651913%);transform:translateX(-37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(.4,.627035,.6,.902026);animation-timing-function:cubic-bezier(.4,.627035,.6,.902026);-webkit-transform:translateX(-84.386165%);transform:translateX(-84.386165%)}100%{-webkit-transform:translateX(-160.277782%);transform:translateX(-160.277782%)}}@keyframes secondary-indeterminate-translate-reverse{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.515058,.409685);animation-timing-function:cubic-bezier(.15,0,.515058,.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(.31033,.284058,.8,.733712);animation-timing-function:cubic-bezier(.31033,.284058,.8,.733712);-webkit-transform:translateX(-37.651913%);transform:translateX(-37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(.4,.627035,.6,.902026);animation-timing-function:cubic-bezier(.4,.627035,.6,.902026);-webkit-transform:translateX(-84.386165%);transform:translateX(-84.386165%)}100%{-webkit-transform:translateX(-160.277782%);transform:translateX(-160.277782%)}}@-webkit-keyframes buffering-reverse{to{-webkit-transform:translateX(10px);transform:translateX(10px)}}@keyframes buffering-reverse{to{-webkit-transform:translateX(10px);transform:translateX(10px)}}:host{display:block;position:relative;width:100%;height:4px;-webkit-transform:translateZ(0);transform:translateZ(0);transition:opacity 250ms 0s cubic-bezier(.4,0,.6,1);overflow:hidden}.bar{position:absolute;width:100%;height:100%;-webkit-animation:none;animation:none;-webkit-transform-origin:top left;transform-origin:top left;transition:transform 250ms 0s cubic-bezier(.4,0,.6,1),-webkit-transform 250ms 0s cubic-bezier(.4,0,.6,1)}span{display:inline-block;position:absolute;width:100%;height:100%;-webkit-animation:none;animation:none}.dots{position:absolute;width:100%;height:100%;-webkit-animation:buffering 250ms infinite linear;animation:buffering 250ms infinite linear;background-repeat:repeat-x;background-size:10px 4px}.buffer{position:absolute;width:100%;height:100%;-webkit-transform-origin:top left;transform-origin:top left;transition:transform 250ms 0s cubic-bezier(.4,0,.6,1),-webkit-transform 250ms 0s cubic-bezier(.4,0,.6,1)}.primary{-webkit-transform:scaleX(0);transform:scaleX(0)}.secondary{visibility:hidden}:host([indeterminate]) .bar{transition:none}:host([indeterminate]) .primary{left:-145.166611%;-webkit-animation:primary-indeterminate-translate 2s infinite linear;animation:primary-indeterminate-translate 2s infinite linear}:host([indeterminate]) .primary>span{-webkit-animation:primary-indeterminate-scale 2s infinite linear;animation:primary-indeterminate-scale 2s infinite linear}:host([indeterminate]) .secondary{left:-54.888891%;-webkit-animation:secondary-indeterminate-translate 2s infinite linear;animation:secondary-indeterminate-translate 2s infinite linear;visibility:visible}:host([indeterminate]) .secondary>span{-webkit-animation:secondary-indeterminate-scale 2s infinite linear;animation:secondary-indeterminate-scale 2s infinite linear}:host([reverse]) .bar,:host([reverse]) .buffer{right:0;-webkit-transform-origin:center right;transform-origin:center right}:host([reverse]) .primary{-webkit-animation-name:primary-indeterminate-translate-reverse;animation-name:primary-indeterminate-translate-reverse}:host([reverse]) .secondary{-webkit-animation-name:secondary-indeterminate-translate-reverse;animation-name:secondary-indeterminate-translate-reverse}:host([reverse]) .dots{-webkit-animation:buffering-reverse 250ms infinite linear;animation:buffering-reverse 250ms infinite linear}:host([closed]){opacity:0}span{background-color:#6200ee;background-color:var(--mdc-theme-primary,#6200ee)}.dots{background-image:var(--mdc-linear-progress-buffering-dots-image, url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E"))}.buffer{background-color:var(--mdc-theme-secondary,#e6e6e6)}:host([indeterminate][reverse]) .primary{right:-145.166611%;left:auto}:host([indeterminate][reverse]) .secondary{right:-54.888891%;left:auto}`]}render(){return this.determinate?this.removeAttribute("indeterminate"):this.setAttribute("indeterminate",""),r`<div class=dots></div><div class=buffer style=${f({transform:`scaleX(${this.buffer.toFixed(2)})`})}></div><div class="bar primary" style=${f({transform:`scaleX(${this.progress.toFixed(2)})`})}><span></span></div><div class="bar secondary"><span></span></div>`}};s([o({type:Boolean,reflect:!0})],l.prototype,"determinate",void 0),s([o({type:Number,reflect:!0})],l.prototype,"progress",void 0),s([o({type:Number,reflect:!0})],l.prototype,"buffer",void 0),s([o({type:Boolean,reflect:!0})],l.prototype,"reverse",void 0),s([o({type:Boolean,reflect:!0})],l.prototype,"closed",void 0),l=s([m("mwc-linear-progress")],l);export{l as LinearProgressElement};
//# sourceMappingURL=linear-progress.js.map
