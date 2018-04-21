!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){var r;r=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t,n){"use strict";const r=function(){let e={};return{get:()=>e,add:(t,n)=>{e[t]=n},set:t=>{e=t},remove:t=>{delete e[t]},reset:()=>{e={}}}}();t.a=r},function(e,t,n){"use strict";t.a=function(e,t,n){const o=r.a.get();let i=[t];const a=[...o.search?o.search:[],["css property:",o.cssProp],["attribute state:",o.attributeState],["bind returned:",o.bindReturned],["subscribed state:",o.subscribedState],["published state:",o.publishedState],["affected attribute:",o.attribute],["affected element:",o.element],["affected web component:",o.component]];if(Object.keys(o).length){i.push("\n\n    ");for(const[e,t]of a)t&&i.push(e,t,"\n    ")}n&&i.push("\n\n"+n);console.error(...i);const s=new class extends Error{}(e);throw s.code=e,s};var r=n(0)},function(e,t,n){"use strict";t.a=function(e){return"object"!=typeof e?typeof e:null===e?"null":Array.isArray(e)?"array":"object"}},function(e,t,n){"use strict";n.d(t,"a",function(){return d}),t.b=function(e,t){s.a.add("component",e),s.a.add("subscribedState",t),e.beforeBindCallback&&e.beforeBindCallback();e.bindings?(Object(i.a)(e.bindings,"function","bindings property type"),t=e.bindings(t),s.a.add("bindReturned",t),d=!0,Object(i.a)(t,"object","bindings method return type")):d=!1;Object(o.a)(e,n=>{s.a.add("element",n);const o=n.attributes[":tag"];o&&(s.a.add("attribute",o),function(e,t,n){const{type:r,subtype:o,key:i}=Object(c.a)(t.attributes[":tag"]);Object(u.a)(e,t,n,r,o,i)}(e,n,t),s.a.remove("attribute"),null===n.parentNode)||(Object(r.a)(n,t),n.attributes[":map"]||Object(a.a)(e,n,t),s.a.remove("element"))}),e.afterBindCallback&&e.afterBindCallback();s.a.remove("bindReturned"),s.a.remove("subscribedState"),s.a.remove("component")};var r=n(16),o=n(17),i=n(4),a=n(19),s=n(0),c=n(9),u=n(10);let d},function(e,t,n){"use strict";t.a=function(e,t,n){Array.isArray(t)||(t=[t]);const a=Object(r.a)(e);if(t.includes(a))return;const s=(()=>void 0===e?`The ${n} cannot be undefined`:`The ${n} was "${a}" but expected type `+`${Object(o.a)(t.map(e=>`"${e}"`))}`)(),c=`shadowbind_${n.replace(/[^a-z]/g,"_")}`;Object(i.a)(c,s)};var r=n(2),o=n(18),i=n(1)},function(e,t,n){"use strict";t.a=function(e){r.a.reset(),r.a.add("publishedState",e),u.c();for(const t of Object.values(c.a)){let n={};const r=t.sbPrivate.observedState;for(const t of r){const r=b(d,t),o=b(e,t);Object(a.a)(o,r)||(n[t]=o)}Object.keys(n).length&&u.a(t,{state:n})}u.b(),r.a.remove("publishedState"),d=Object(i.a)(e)};var r=n(0),o=n(2),i=n(12),a=n(13),s=n(1),c=n(6),u=n(7);let d;function b(e,t){if("object"!==Object(o.a)(e))return;/^[^.].+[^.]$/.test(t)||Object(s.a)("shadowbind_subscribe_key_invalid",`The key "${t}" could not be parsed`);let n=e;for(const e of t.split(".")){if(void 0===n[e])return;n=n[e]}return n}},function(e,t,n){"use strict";n.d(t,"a",function(){return d}),t.b=function(e,t={}){r.a.reset(),arguments.length||Object(o.a)("shadowbind_define_without_arguments","The first argument of define() should be a class extending HTMLElement, but no arguments were given");1===arguments.length&&(t=e);t.prototype instanceof window.HTMLElement||Object(o.a)("shadowbind_define_type","The first argument of define() should be a class extending "+`HTMLElement, not "${Object(i.a)(t)}"`);1===arguments.length&&(e=Object(a.b)(t.name));!function(e,t,n){if(-1===t.indexOf("--")&&-1!==t.indexOf("-")&&!1===/^-/.test(t)&&!1===/-$/.test(t)&&!1===/[^a-zA-Z0-9-]/.test(t))return;const r=n?"implicit_component_name":"component_name",i=n?" The name was automatically determined from your class name "+`"${e.name}".`:"";Object(o.a)(`shadowbind_${r}`,`Web component name "${t}" was invalid - note that names must be two `+`words.${i}`)}(t,e,1===arguments.length);const n=t.prototype.subscribe?t.prototype.subscribe():{},{observedAttrs:f}=Object(c.a)(n);window.customElements.define(e,class extends t{static get observedAttributes(){let e=(()=>"function"===Object(i.a)(t.observedAttributes)?t.observedAttributes():[])();return f.concat(e).map(e=>Object(a.a)(e))}constructor(){super(),this.sbPrivate||(this.sbPrivate={});const{subscriptions:e,observedProps:n,observedState:r}=Object(c.a)(this.subscribe?this.subscribe():{});if(this.sbPrivate.observedState=r,this.sbPrivate.observedProps=n,this.sbPrivate.subscriptions=e,t.prototype.template){this.attachShadow({mode:"open"});const e=document.createElement("template");e.innerHTML=t.prototype.template.call(this),this.shadowRoot.appendChild(e.content.cloneNode(!0))}if(n.length)for(const e of n)this[e]=(t=>{s.a(this,{props:{[e]:t}})});this.sbPrivate.getDepth=(()=>this.parentNode&&this.parentNode.host&&this.parentNode.host.sbPrivate?this.parentNode.host.sbPrivate.getDepth()+1:0)}connectedCallback(){b++,this.sbPrivate.id=b,d[b]=this,l(this,t,"connectedCallback")}disconnectedCallback(){delete d[b],l(this,t,"disconnectedCallback")}attributeChangedCallback(e,n,r){s.a(this,{attrs:{[Object(a.c)(e)]:r}}),l(this,t,"attributeChangedCallback",arguments)}data(e){if(0===arguments.length)return this.sbPrivate.data;s.a(this,{direct:e})}form(e){const t=this.shadowRoot.querySelector("form");return t||Object(o.a)("shadowbind_missing_form","Cannot use this.form() because there is no form in this component"),arguments.length>0?Object(u.b)(t,e):Object(u.a)(t)}})};var r=n(0),o=n(1),i=n(2),a=n(14),s=n(7),c=n(23),u=n(24);let d={},b=0;function l(e,t,n,r=[]){t.prototype[n]&&t.prototype[n].call(e,...r)}},function(e,t,n){"use strict";t.b=function(){a=!0,s()},t.c=function(){a=!1},t.a=function(e,t={}){let{id:n}=e.sbPrivate;const o=e.sbPrivate.getDepth();i[o]||(i[o]={});i[o][n]||(i[o][n]={});i[o][n].changes||(i[o][n].changes={});Object.assign(i[o][n].changes,t),Object(r.a)(e,t),i[o][n].component=e,s()};var r=n(15),o=n(3);let i=[],a=!0;function s(){if(!a)return;let e=c();for(;e;)e.component.sbPrivate.data=Object.assign(e.component.sbPrivate.bindings,e.component.sbPrivate.direct),Object(o.b)(e.component,e.component.sbPrivate.data),e=c()}function c(){const e=(()=>{for(let e=0;e<i.length;e++)if(i[e])return e;return i.length>0&&(i=[]),!1})();if(!1!==e)for(const t in i[e]){const n=i[e][t];return delete i[e][t],0===Object.keys(i[e]).length&&(i[e]=void 0),n}}},function(e,t,n){"use strict";t.a=function(e,t){for(const n of e.attributes){if(!n.name)return;t(n)}}},function(e,t,n){"use strict";t.a=function(e){const t=e.value;let n=/^:(text|html|if|show|publish|tag|value)$/.exec(e.name);return n?{type:n[1],subtype:null,key:t}:(n=/^(bind|attr|prop|on|css|class):(.{1,})$/.exec(e.name))?{type:n[1],subtype:n[2],key:t}:null};t.b=["value"]},function(e,t,n){"use strict";t.a=function(e,t,n,l,f,p){if("on"===l)return function(e,t,n,r,o){Object(a.a)(e[o],"function","event type"),t.sbPrivate&&t.sbPrivate.eventsAlreadyBound||r.split(",").forEach(n=>{t.addEventListener(n,t=>{const n=e[o](t);!1===n&&(t.preventDefault(),t.stopPropagation())}),t.sbPrivate||(t.sbPrivate={}),t.sbPrivate.eventsAlreadyBound=!0})}(e,t,0,f,p);let h;if(-1===p.indexOf(".")){if(!Object.keys(n).includes(p)){const e=o.a.get().bindReturned?"bindings":"subscribed state";Object(i.a)("shadowbind_key_not_found",`The key "${p}" could not be found in ${e}`)}h=n[p]}else h=Object(s.a)(n,p,r.a?"localState":"subscribedState",r.a?"local state":"subscribed state","shadowbind_key_not_found");o.a.add("attributeState",h);const v=Object(c.a)(h);if(!("object"!==v&&"array"!==v||"attr"!==l&&"text"!==l&&"html"!==l)){const e="attr"===l?` or use prop:${f} to bind the data as a property instead of `+"an attribute":"";Object(i.a)("shadowbind_binding_array_or_object",`Objects and arrays cannot be bound with "${l}" directly. Try `+`calling JSON.stringify on the ${v} first${e}.`)}switch(l){case"attr":!0===h?t.setAttribute(f,""):null!=h&&!1!==h?t.setAttribute(f,h):t.removeAttribute(f);break;case"prop":const e=Object(u.a)(f),n=Object(c.a)(t[e]);"function"!==n&&("undefined"===n&&Object(i.a)("shadowbind_prop_undefined",`Cannot call prop "${e}" because it is undefined`),Object(i.a)("shadowbind_prop_type",`Prop "${e}" must be a function, but it is type `+`${n}`)),t[e](h);break;case"text":case"html":Object(a.a)(h,["string","number","null"],"inner content type"),null!=h&&("text"===l?t.innerText=h:t.innerHTML=h);break;case"show":t.style.display=h?"":"none";break;case"if":const r=t.getAttribute("sb:i");if(h){if(!r)return;Object(b.a)(t)}else{if(r)return;Object(b.b)(t)}break;case"css":null!=h?t.style.setProperty(`--${f}`,h):t.style.removeProperty(`--${f}`);break;case"class":h?t.classList.add(f):t.classList.remove(f);break;case"tag":const o=(()=>"string"===v&&(h=h.toLowerCase(),/^[a-z][a-z0-9_-]+$/.test(h)))();if(o||Object(i.a)("shadowbind_tag_name","The value given for :tag must be a valid element name"),t.tagName.toLowerCase()===h.toLowerCase())return;const s=document.createElement(h);s.innerHTML=t.innerHTML,Object(d.a)(t,e=>{s.setAttribute(e.name,e.value)});const p=t.parentNode,y=t.nextElementSibling;p.removeChild(t),p.insertBefore(s,y);break;case"value":if(t.options&&t.multiple)for(const e of t.options)h.includes(e.value)&&(e.selected=!0);else"checkbox"===t.type?!0===h?t.checked=!0:!1===h?t.checked=!1:h.includes(t.value)&&(t.checked=!0):"radio"===t.type?h===t.value&&(t.checked=!0):t.value=h}o.a.remove("attributeState")};var r=n(3),o=n(0),i=n(1),a=n(4),s=n(20),c=n(2),u=n(21),d=n(8),b=n(22)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),o=n(6),i=n(25);t.default={define:o.b,publish:r.a,redux:i.a},window.Shadowbind={define:o.b,publish:r.a,redux:i.a}},function(e,t,n){"use strict";t.a=function(e){return JSON.parse(JSON.stringify(e))}},function(e,t,n){"use strict";t.a=function(e,t){return JSON.stringify(e)===JSON.stringify(t)}},function(e,t,n){"use strict";function r(e){return e.replace(/[A-Z]/g,(e,t)=>0===t?e.toLowerCase():"-"+e.toLowerCase())}t.b=r,t.c=function(e){return e.replace(/-[a-z]/g,e=>e.charAt(1).toUpperCase()).replace(/-/g,"")},t.a=function(e){return r(e)}},function(e,t,n){"use strict";t.a=function(e,t={}){const n=e.sbPrivate.subscriptions;let r={};for(const[e,o]of Object.entries(n))for(const{source:n,watchKey:i,callback:a}of o){const o=(()=>"attr"===n?t.attrs:"prop"===n?t.props:t[n])()||{},s=o[i],c=s&&a?a(s):s;if(void 0!==c){r[e]=c;break}}const o=Object.assign(e.sbPrivate.bindings||{},r);return e.sbPrivate.direct=Object.assign(e.sbPrivate.direct||{},t.direct),e.sbPrivate.bindings=o,o}},function(e,t,n){"use strict";t.a=function(e,t){const n=function(e){return e.getAttribute("sb:r")}(e);if(!function(e){if(!e.getAttribute(":map"))return!1;const t=u(e);return null===e.previousElementSibling||!t(e.previousElementSibling)}(e)&&!n)return;let{key:d,value:b}=function(e,t,n){const r=(()=>t?s[t].getAttribute(":map"):e.getAttribute(":map"))(),o=n[r];return{key:r,value:o}}(e,n,t);"array"!==Object(r.a)(b)&&Object(i.a)("shadowbind_map_type",`"${d}" must be an array when using ":map", but it was `+`"${Object(r.a)(b)}"`);o.a.add("repeaterState",b);const l=n?[]:function(e){const t=u(e);let n=[];do{n.push(e),e=e.nextElementSibling}while(t(e));return n}(e),f=l.length,p=b.length;if(f<p){const t=p-f;e=function(e,t,n,r){const o=(()=>n?s[n]:e)(),i=(()=>n?e.nextElementSibling:t[t.length-1].nextElementSibling)(),a=e.previousElementSibling,c=e.parentNode;for(let e=0;e<r;e++){const e=o.cloneNode(!0);c.insertBefore(e,i)}if(n)return c.removeChild(e),a?a.nextElementSibling:c.firstElementChild;return e}(e,l,n,t)}else f>p&&function(e,t,n){if(e.length===n){const n=function(){c++;const e=document.createElement("span");return e.setAttribute("sb:r",c),e}();s[c]=e[0].cloneNode(!0);const r=e[e.length-1].nextElementSibling;t.insertBefore(n,r)}e.slice(-n).forEach(e=>t.removeChild(e))}(l,e.parentNode,f-p);if(0===p)return;e.sbPrivate||Object(i.a)("shadowbind_map_non_component",'":map" must be used on a shadowbind web component');for(let t=0;t<p;t++)Object(a.b)(e,b[t]),e=e.nextElementSibling;o.a.remove("repeaterState")};var r=n(2),o=n(0),i=n(1),a=n(3);let s={},c=0;function u(e){const t=e.getAttribute(":map");return e=>{if(null===e)return!1;const n=e.getAttribute(":map");return t===n}}},function(e,t,n){"use strict";t.a=function(e,t){let n;e.shadowRoot||function(e){try{e.attachShadow({mode:"open"})}catch(e){Object(r.a)("shadowbind_closed_shadow_root","Subscribed component has a closed shadowRoot, but only open shadowRoots are supported")}Object(r.a)("shadowbind_no_shadow_root","Subscribed web component has no shadowRoot. Be sure to define template() { return 'YOUR HTML' } in your component class")}(e);!function e(r){const o=r.parentNode;const i=1===r.nodeType;i&&t(r);const a=r.parentNode;if(o&&!a)return!0;n=r;r=r.firstChild;for(;r;){const t=e(r);t?r=n:(n=r,r=r.nextSibling)}}(e.shadowRoot)};n(0);var r=n(1)},function(e,t,n){"use strict";t.a=function(e){if(0===e.length)return"";if(1===e.length)return e[0];if(2===e.length)return`${e[0]} and ${e[1]}`;if(e.length>=3)return`${e.slice(0,-1).join(", ")} and ${e.slice(-1)}`}},function(e,t,n){"use strict";t.a=function(e,t,n){if(0===t.attributes.length)return;for(const r of o.b)if(t.attributes[r]){const o=t.attributes[r];s(e,t,n,o)}Object(r.a)(t,r=>{o.b.includes(r)||s(e,t,n,r)})};var r=n(8),o=n(9),i=n(10),a=n(0);function s(e,t,n,r){const s=Object(o.a)(r);if(s){a.a.add("attribute",r);const{type:o,subtype:c,key:u}=s;Object(i.a)(e,t,n,o,c,u),a.a.remove("attribute")}}},function(e,t,n){"use strict";t.a=function(e,t,n,a,s){i([`${n}:`,e]);let c=e,u=n;for(const e of t.split("."))u=`${u}.${e}`,Object.keys(c).includes(e)||(i([`${u}:`,"not found"]),r.a.remove("publishedState"),Object(o.a)(s,`The key "${e}" in "${t}" could not be found in the `+a)),c=c[e],i([`${u}:`,c]);return r.a.remove("search"),c};var r=n(0),o=n(1);function i(e){r.a.get().search||r.a.add("search",[]),r.a.add("search",[...r.a.get().search,e])}},function(e,t,n){"use strict";t.a=function(e){return e.replace(/-([a-z])/g,e=>e[1].toUpperCase())}},function(e,t,n){"use strict";t.b=function(e){const t=function(e){o++;const t=document.createElement("span");return t.setAttribute("sb:i",o),t.setAttribute(":if",e.getAttribute(":if")),t}(e),n=e.nextElementSibling,i=e.parentNode;r[o]=e,i.removeChild(e),i.insertBefore(t,n)},t.a=function(e){const t=e.getAttribute("sb:i"),n=r[t],o=e.nextElementSibling,i=e.parentNode;i.removeChild(e),i.insertBefore(n,o)};let r={},o=0},function(e,t,n){"use strict";t.a=function(e){a={},s=[],c=[],u=[];for(const[t,n]of Object.entries(e)){switch(a[t]=[],Object(r.a)(n)){case"string":l(t,n);continue;case"object":b(t,n);continue;case"array":for(const e of n){const n=Object(r.a)(e);"string"===n&&l(t,e),"object"===n&&b(t,e)}continue}f()}return{subscriptions:a,observedAttrs:s,observedProps:c,observedState:u}};var r=n(2),o=n(1),i=n(4);let a,s,c,u;function d({bindKey:e,source:t,watchKey:n,callback:r}){n&&("state"===t?u.push(n):"attr"===t?s.push(n):"prop"===t?c.push(n):f()),Object(i.a)(r,["function","undefined"],"subscribe callback"),Object(i.a)(n,["string"],"subscribe watch key"),a[e].push({source:t,watchKey:n,callback:r})}function b(e,t){const n=(()=>t.state?"state":t.prop?"prop":t.attr?"attr":void 0)();d({bindKey:e,source:n,watchKey:t[n],callback:t.callback})}function l(e,t){d({bindKey:e,source:t,watchKey:e,callback:void 0})}function f(){Object(o.a)("shadowbind_invalid_subscribe","Your subscribe() response is invalid")}},function(e,t,n){"use strict";function r(e){let t={},n={};for(let r of Array.from(e.elements)){const e=r.name;let a;e&&("checkbox"===r.type&&null===r.getAttribute("value")?a=r.checked:"checkbox"===r.type?(a=r.checked?(t[e]||[]).concat(r.value):t[e]||[],r=(n[e]||[]).concat(r)):"radio"===r.type?(t[e]||(a=r.value),r=(n[e]||[]).concat(r)):a=o(r)?i(r):"number"===r.type?""!==r.value?Number(r.value):"":r.value,t[e]=a,n[e]=r)}return{values:t,elements:n}}function o(e){return e.options&&e.multiple}function i(e){let t=[];for(const n of Array.from(e))t=n.selected?t.concat(n.value):t;return t}function a(e,t){for(const n of Array.from(e))t.includes(n.value)?n.setAttribute("selected",""):n.removeAttribute("selected")}t.a=function(e){return r(e).values},t.b=function(e,t){const{elements:n}=r(e);for(const[e,r]of Object.entries(t)){const t=n[e],i=Array.isArray(t);if(o(t))a(t,r);else if(i||"checkbox"===t.type){const e=(()=>i?t:[t])();for(const t of e)!0===r?t.setAttribute("checked",""):!1===r?t.removeAttribute("checked"):r.includes(t.value)?t.setAttribute("checked",""):t.removeAttribute("checked")}else"checkbox"===t.type||(t.value=r)}}},function(e,t,n){"use strict";var r=n(5);t.a=(e=>(Object(r.a)(e.getState()),t=>n=>{t(n),Object(r.a)(e.getState())}))}])},e.exports=r()},function(e,t,n){"use strict";(function(e,r){var o,i=n(2);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var a=Object(i.a)(o);t.a=a}).call(this,n(5),n(4)(e))},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",function(){return r})},function(e,t,n){"use strict";n.r(t);var r=n(1),o={INIT:"@@redux/INIT"+Math.random().toString(36).substring(7).split("").join("."),REPLACE:"@@redux/REPLACE"+Math.random().toString(36).substring(7).split("").join(".")},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function s(e){if("object"!==(void 0===e?"undefined":i(e))||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function c(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}var u=n(0),d=n.n(u);var b=function e(t,n,a){var c;if("function"==typeof n&&void 0===a&&(a=n,n=void 0),void 0!==a){if("function"!=typeof a)throw new Error("Expected the enhancer to be a function.");return a(e)(t,n)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var u=t,d=n,b=[],l=b,f=!1;function p(){l===b&&(l=b.slice())}function h(){if(f)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return d}function v(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(f)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return p(),l.push(e),function(){if(t){if(f)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,p();var n=l.indexOf(e);l.splice(n,1)}}}function y(e){if(!s(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(f)throw new Error("Reducers may not dispatch actions.");try{f=!0,d=u(d,e)}finally{f=!1}for(var t=b=l,n=0;n<t.length;n++)(0,t[n])();return e}return y({type:o.INIT}),(c={dispatch:y,subscribe:v,getState:h,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");u=e,y({type:o.REPLACE})}})[r.a]=function(){var e,t=v;return(e={subscribe:function(e){if("object"!==(void 0===e?"undefined":i(e))||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(h())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e},c}(function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];"function"==typeof e[i]&&(n[i]=e[i])}var a=Object.keys(n),s=void 0;try{!function(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:o.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+o.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(n)}catch(e){s=e}return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(s)throw s;for(var r=!1,o={},i=0;i<a.length;i++){var u=a[i],d=n[u],b=e[u],l=d(b,t);if(void 0===l){var f=c(u,t);throw new Error(f)}o[u]=l,r=r||l!==b}return r?o:e}}({counter:function(e=0,t){switch(t.type){case"INCREMENT":return e+1;default:return e}}}),function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];var i=e.apply(void 0,r),s=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},c={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},u=t.map(function(e){return e(c)});return s=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}.apply(void 0,u)(i.dispatch),a({},i,{dispatch:s})}}}(d.a.redux));d.a.define(class extends HTMLElement{connectedCallback(){this.data({})}increment(){b.dispatch({type:"INCREMENT"})}template(){return'\n      <style>\n        :host { font-family: sans-serif; }\n      </style>\n      <count-viewer></count-viewer>\n      <button on:click="increment">Increment</button>\n    '}});d.a.define(class extends HTMLElement{subscribe(){return{counter:"state"}}template(){return'\n      <h1>Counter</h1>\n      Count: <span :text="counter"></span>\n    '}})},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n}]);