let e,t,n=!1;const l={},s=e=>"object"==(e=typeof e)||"function"===e,o=(e,t,...n)=>{let l=null,o=!1,i=!1;const c=[],u=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?u(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof e&&!s(l))&&(l+=""),o&&i?c[c.length-1].t+=l:c.push(o?r(null,l):l),i=o)};if(u(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const a=r(e,null);return a.l=t,c.length>0&&(a.o=c),a},r=(e,t)=>({i:0,u:e,t,$:null,o:null,l:null}),i={},c=new WeakMap,u=e=>"sc-"+e.h,a=(e,t,n,l,o,r)=>{if(n!==l){let i=A(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,s=$(n),o=$(l);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if(i||"o"!==t[0]||"n"!==t[1]){const c=s(l);if((i||c&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{const s=null==l?"":l;"list"===t?i=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}null==l||!1===l?!1===l&&""!==e.getAttribute(t)||e.removeAttribute(t):(!i||4&r||o)&&!c&&e.setAttribute(t,l=!0===l?"":l)}else t="-"===t[2]?t.slice(3):A(q,c)?c.slice(2):c[2]+t.slice(3),n&&_.rel(e,t,n,!1),l&&_.ael(e,t,l,!1)}},f=/\s/,$=e=>e?e.split(f):[],y=(e,t,n,s)=>{const o=11===t.$.nodeType&&t.$.host?t.$.host:t.$,r=e&&e.l||l,i=t.l||l;for(s in r)s in i||a(o,s,r[s],void 0,n,t.i);for(s in i)a(o,s,r[s],i[s],n,t.i)},h=(t,n,l)=>{const s=n.o[l];let o,r,i=0;if(null!==s.t)o=s.$=V.createTextNode(s.t);else if(o=s.$=V.createElement(s.u),y(null,s,!1),null!=e&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),s.o)for(i=0;i<s.o.length;++i)r=h(t,s,i),r&&o.appendChild(r);return o},p=(e,n,l,s,o,r)=>{let i,c=e;for(c.shadowRoot&&c.tagName===t&&(c=c.shadowRoot);o<=r;++o)s[o]&&(i=h(null,l,o),i&&(s[o].$=i,c.insertBefore(i,n)))},d=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.$.remove()},m=(e,t)=>e.u===t.u,b=(e,t)=>{const n=t.$=e.$,l=e.o,s=t.o,o=t.t;null===o?("slot"===t.u||y(e,t,!1),null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,r=0,i=t.length-1,c=t[0],u=t[i],a=l.length-1,f=l[0],$=l[a];for(;o<=i&&r<=a;)null==c?c=t[++o]:null==u?u=t[--i]:null==f?f=l[++r]:null==$?$=l[--a]:m(c,f)?(b(c,f),c=t[++o],f=l[++r]):m(u,$)?(b(u,$),u=t[--i],$=l[--a]):m(c,$)?(b(c,$),e.insertBefore(c.$,u.$.nextSibling),c=t[++o],$=l[--a]):m(u,f)?(b(u,f),e.insertBefore(u.$,c.$),u=t[--i],f=l[++r]):(s=h(t&&t[r],n,r),f=l[++r],s&&c.$.parentNode.insertBefore(s,c.$));o>i?p(e,null==l[a+1]?null:l[a+1].$,n,l,r,a):r>a&&d(t,o,i)})(n,l,t,s):null!==s?(null!==e.t&&(n.textContent=""),p(n,null,t,s,0,s.length-1)):null!==l&&d(l,0,l.length-1)):e.t!==o&&(n.data=o)},w=(e,t)=>{t&&!e.p&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.p=t)))},S=(e,t)=>{if(e.i|=16,!(4&e.i))return w(e,e.m),X((()=>g(e,t)));e.i|=512},g=(e,t)=>{const n=e.S;let l;return t&&(l=C(n,"componentWillLoad")),O(l,(()=>j(e,n,t)))},j=async(e,t,n)=>{const l=e.g,s=l["s-rc"];n&&(e=>{const t=e.j,n=e.g,l=t.i,s=((e,t)=>{let n=u(t);const l=U.get(n);if(e=11===e.nodeType?e:V,l)if("string"==typeof l){let t,s=c.get(e=e.head||e);s||c.set(e,s=new Set),s.has(n)||(t=V.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(e);M(e,t),s&&(s.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>v(e);0===t.length?n():(Promise.all(t).then(n),e.i|=4,t.length=0)}},M=(n,l)=>{try{l=l.render(),n.i&=-17,n.i|=2,((n,l)=>{const s=n.g,c=n.M||r(null,null),u=(e=>e&&e.u===i)(l)?l:o(null,null,l);t=s.tagName,u.u=null,u.i|=4,n.M=u,u.$=c.$=s.shadowRoot||s,e=s["s-sc"],b(c,u)})(n,l)}catch(e){F(e,n.g)}return null},v=e=>{const t=e.g,n=e.m;64&e.i||(e.i|=64,P(t),e.v(t),n||k()),e.p&&(e.p(),e.p=void 0),512&e.i&&Q((()=>S(e,!1))),e.i&=-517},k=()=>{P(V.documentElement),Q((()=>(e=>{const t=_.ce("appload",{detail:{namespace:"wc-fin"}});return e.dispatchEvent(t),t})(q)))},C=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){F(e)}},O=(e,t)=>e&&e.then?e.then(t):t(),P=e=>e.classList.add("hydrated"),x=(e,t,n)=>{if(t.k){const l=Object.entries(t.k),o=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,e,{get(){return((e,t)=>N(this).C.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=N(e),r=o.C.get(t),i=o.i,c=o.S;n=((e,t)=>null==e||s(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.k[t][0]),8&i&&void 0!==r||n===r||Number.isNaN(r)&&Number.isNaN(n)||(o.C.set(t,n),c&&2==(18&i)&&S(o,!1))})(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const t=new Map;o.attributeChangedCallback=function(e,n,l){_.jmp((()=>{const n=t.get(e);if(this.hasOwnProperty(n))l=this[n],delete this[n];else if(o.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==l)return;this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},E=(e,t={})=>{const n=[],l=t.exclude||[],s=q.customElements,o=V.head,r=o.querySelector("meta[charset]"),i=V.createElement("style"),c=[];let a,f=!0;Object.assign(_,t),_.O=new URL(t.resourcesUrl||"./",V.baseURI).href,e.map((e=>{e[1].map((t=>{const o={i:t[0],h:t[1],k:t[2],P:t[3]};o.k=t[2];const r=o.h,i=class extends HTMLElement{constructor(e){super(e),W(e=this,o),1&o.i&&e.attachShadow({mode:"open"})}connectedCallback(){a&&(clearTimeout(a),a=null),f?c.push(this):_.jmp((()=>(e=>{if(0==(1&_.i)){const t=N(e),n=t.j,l=()=>{};if(!(1&t.i)){t.i|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){w(t,t.m=n);break}}n.k&&Object.entries(n.k).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.i)){{if(t.i|=32,(s=R(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(x(s,n,2),s.isProxied=!0);const e=()=>{};t.i|=8;try{new s(t)}catch(e){F(e)}t.i&=-9,e()}if(s.style){let e=s.style;const t=u(n);if(!U.has(t)){const l=()=>{};((e,t,n)=>{let l=U.get(e);B&&n?(l=l||new CSSStyleSheet,"string"==typeof l?l=t:l.replaceSync(t)):l=t,U.set(e,l)})(t,e,!!(1&n.i)),l()}}}const o=t.m,r=()=>S(t,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,t,n)}l()}})(this)))}disconnectedCallback(){_.jmp((()=>{}))}componentOnReady(){return N(this).L}};o.N=e[0],l.includes(r)||s.get(r)||(n.push(r),s.define(r,x(i,o,1)))}))})),i.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",i.setAttribute("data-styles",""),o.insertBefore(i,r?r.nextSibling:o.firstChild),f=!1,c.length?c.map((e=>e.connectedCallback())):_.jmp((()=>a=setTimeout(k,30)))},L=new WeakMap,N=e=>L.get(e),T=(e,t)=>L.set(t.S=e,t),W=(e,t)=>{const n={i:0,g:e,j:t,C:new Map};return n.L=new Promise((e=>n.v=e)),e["s-p"]=[],e["s-rc"]=[],L.set(e,n)},A=(e,t)=>t in e,F=(e,t)=>(0,console.error)(e,t),H=new Map,R=e=>{const t=e.h.replace(/-/g,"_"),n=e.N,l=H.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(H.set(n,e),e[t])),F)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},U=new Map,q="undefined"!=typeof window?window:{},V=q.document||{head:{}},_={i:0,O:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},z=e=>Promise.resolve(e),B=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),D=[],G=[],I=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&_.i?Q(K):_.raf(K))},J=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){F(e)}e.length=0},K=()=>{J(D),J(G),(n=D.length>0)&&_.raf(K)},Q=e=>z().then(e),X=I(G,!0);export{i as H,E as b,o as h,z as p,T as r}