!function(){function t(t){return t&&t.__esModule?t.default:t}var e,n={};e=n=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},n.default=e,n.__esModule=true;var r,a,s=t(n),i={},u={};a=u=function(t,e){return e.get?e.get.call(t):e.value},u.default=a,u.__esModule=true;var l,o=u,c={};l=c=function(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)},c.default=l,c.__esModule=true;var h=c;r=i=function(t,e){var n=h(t,e,"get");return o(t,n)},i.default=r,i.__esModule=true;var p,d,f=t(i),v={},b={};d=b=function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}},b.default=d,b.__esModule=true;var g=b,y=c;p=v=function(t,e,n){var r=y(t,e,"set");return g(t,r,n),n},v.default=p,v.__esModule=true;var _=t(v);function I(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){u=!0,s=t},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw s}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var w=new WeakMap,M=new WeakMap,O=new WeakMap,k=new WeakMap;class P{constructor(t={}){w.set(this,{writable:!0,value:["focus","blur","keydown","input","paste"]}),M.set(this,{writable:!0,value:[]}),O.set(this,{writable:!0,value:/\D/g}),k.set(this,{writable:!0,value:"input[data-tel-input]"}),s(this,"_libName","Input Phone Mask"),s(this,"_version","1.0.0"),this.isInitInstance=!Object.prototype.hasOwnProperty.call(t,"init")||t.init,this._eventsInput=Object.prototype.hasOwnProperty.call(t,"events")?t.events:this._eventsInput,this._inputs=Object.prototype.hasOwnProperty.call(t,"fields")?t.fields:this._inputs,this._searchInputPattern=Object.prototype.hasOwnProperty.call(t,"patternNodeInpit")?t.patternNodeInpit:this._searchInputPattern,this.isInitInstance&&this.install()}set _inputs(t=[]){_(this,M,t)}get _inputs(){return f(this,M)}get _eventsInput(){return f(this,w)}set _eventsInput(t=[]){_(this,w,t)}get _searchInputPattern(){return f(this,k)}set _searchInputPattern(t){_(this,k,t)}get maskField(){return f(this,O)}install(){this._inputs.length||(this._inputs=document.querySelectorAll(this._searchInputPattern)),this._inputs.length&&this.subscribeEventsOnTheInput()}getInputNumbersValue(t){return t.value.replace(this.maskField,"")}handlerKeydown(t){const e=t.target.value.replace(this.maskField,"");8===t.keyCode&&1===e.length&&(t.target.value="")}handlerFocus(t){t.target.placeholder="+7 (999) 999-99-99"}handlerBlur(t){t.target.placeholder="Телефон"}handlerInput(t){const e=t.target;let n=this.getInputNumbersValue(e);const r=e.selectionStart;let a="";if(!n)return e.value="";if(e.value.length==r){if(["7","8","9"].includes(n[0])){"9"===n[0]&&(n=`7${n}`);let t="8"===n[0]?"8":"+7";a=e.value=`${t} `,n.length>1&&(a+=`(${n.substring(1,4)}`),n.length>=5&&(a+=`) ${n.substring(4,7)}`),n.length>=8&&(a+=`-${n.substring(7,9)}`),n.length>=10&&(a+=`-${n.substring(9,11)}`)}else a=`+${n.substring(0,16)}`;e.value=a}else t.data&&this.maskField.test(t.data)&&(e.value=n)}handlerPaste(t){const e=t.target,n=getInputNumbersValue(e),r=t.clipboardData||window.clipboardData;if(r){const t=r.getData("Text");if(this.maskField.test(t))return void(e.value=n)}}getMethodAtInstance(t){const e=`handler${t.slice(0,1).toUpperCase()}${t.slice(1)}`;return!!this[e]&&this[e]}subscribeEventsOnTheInput(){var t,e=I(this._inputs);try{for(e.s();!(t=e.n()).done;){const e=t.value;if("tel"!==e.type)return;var n,r=I(this._eventsInput);try{for(r.s();!(n=r.n()).done;){const t=n.value,r=this.getMethodAtInstance(t);"function"==typeof r&&e.addEventListener(t,r.bind(this),!1)}}catch(t){r.e(t)}finally{r.f()}}}catch(t){e.e(t)}finally{e.f()}}}document.addEventListener("DOMContentLoaded",(function(){const t=new P;console.info("Install to lib",t._libName),document.querySelector("input").focus()}))}();
//# sourceMappingURL=index.d04241f8.js.map