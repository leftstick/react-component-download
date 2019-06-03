!function(e){function n(n){for(var t,o,i=n[0],c=n[1],d=n[2],a=n[3]||[],u=0,l=[];u<i.length;u++)o=i[u],H[o]&&l.push(H[o][0]),H[o]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);for(C&&C(n),A.push.apply(A,a);l.length;)l.shift()();return I.push.apply(I,d||[]),r()}function r(){for(var e,n=0;n<I.length;n++){for(var r=I[n],t=!0,o=1;o<r.length;o++){var i=r[o];0!==H[i]&&(t=!1)}t&&(I.splice(n--,1),e=M(M.s=r[0]))}return 0===I.length&&(A.forEach(function(e){if(void 0===H[e]){H[e]=null;var n=document.createElement("link");n.crossOrigin="anonymous",M.nc&&n.setAttribute("nonce",M.nc),n.rel="prefetch",n.as="script",n.href=S(e),document.head.appendChild(n)}}),A.length=0),e}var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!O[e]||!_[e])return;for(var r in _[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(v[r]=n[r]);0===--b&&0===g&&D()}(e,n),t&&t(e,n)};var o,i=!0,c="b32bf8eaec2dffb0f20f",d=1e4,a={},u=[],l=[];function s(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"===typeof e)n._selfAccepted=e;else if("object"===typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"===typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:j,apply:P,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var n=p.indexOf(e);n>=0&&p.splice(n,1)},data:a[e]};return o=void 0,n}var p=[],f="idle";function h(e){f=e;for(var n=0;n<p.length;n++)p[n].call(null,e)}var m,v,y,b=0,g=0,w={},_={},O={};function x(e){return+e+""===e?+e:e}function j(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return i=e,h("check"),(n=d,n=n||1e4,new Promise(function(e,r){if("undefined"===typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,o=M.p+""+c+".hot-update.json";t.open("GET",o,!0),t.timeout=n,t.send(null)}catch(i){return r(i)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(i){return void r(i)}e(n)}}})).then(function(e){if(!e)return h("idle"),null;_={},w={},O=e.c,y=e.h,h("prepare");var n=new Promise(function(e,n){m={resolve:e,reject:n}});for(var r in v={},H)E(r);return"prepare"===f&&0===g&&0===b&&D(),n});var n}function E(e){O[e]?(_[e]=!0,b++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=M.p+""+e+"."+c+".hot-update.js",n.crossOrigin="anonymous",document.head.appendChild(n)}(e)):w[e]=!0}function D(){h("ready");var e=m;if(m=null,e)if(i)Promise.resolve().then(function(){return P(i)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in v)Object.prototype.hasOwnProperty.call(v,r)&&n.push(x(r));e.resolve(n)}}function P(n){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var r,t,o,i,d;function l(e){for(var n=[e],r={},t=n.slice().map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),c=o.id,d=o.chain;if((i=k[c])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:c};if(i.hot._main)return{type:"unaccepted",chain:d,moduleId:c};for(var a=0;a<i.parents.length;a++){var u=i.parents[a],l=k[u];if(l){if(l.hot._declinedDependencies[c])return{type:"declined",chain:d.concat([u]),moduleId:c,parentId:u};-1===n.indexOf(u)&&(l.hot._acceptedDependencies[c]?(r[u]||(r[u]=[]),s(r[u],[c])):(delete r[u],n.push(u),t.push({chain:d.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function s(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}n=n||{};var p={},m=[],b={},g=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var w in v)if(Object.prototype.hasOwnProperty.call(v,w)){var _;d=x(w);var j=!1,E=!1,D=!1,P="";switch((_=v[w]?l(d):{type:"disposed",moduleId:w}).chain&&(P="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(j=new Error("Aborted because of self decline: "+_.moduleId+P));break;case"declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+P));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(_),n.ignoreUnaccepted||(j=new Error("Aborted because "+d+" is not accepted"+P));break;case"accepted":n.onAccepted&&n.onAccepted(_),E=!0;break;case"disposed":n.onDisposed&&n.onDisposed(_),D=!0;break;default:throw new Error("Unexception type "+_.type)}if(j)return h("abort"),Promise.reject(j);if(E)for(d in b[d]=v[d],s(m,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,d)&&(p[d]||(p[d]=[]),s(p[d],_.outdatedDependencies[d]));D&&(s(m,[_.moduleId]),b[d]=g)}var I,A=[];for(t=0;t<m.length;t++)d=m[t],k[d]&&k[d].hot._selfAccepted&&A.push({module:d,errorHandler:k[d].hot._selfAccepted});h("dispose"),Object.keys(O).forEach(function(e){!1===O[e]&&function(e){delete H[e]}(e)});for(var S,q,U=m.slice();U.length>0;)if(d=U.pop(),i=k[d]){var z={},C=i.hot._disposeHandlers;for(o=0;o<C.length;o++)(r=C[o])(z);for(a[d]=z,i.hot.active=!1,delete k[d],delete p[d],o=0;o<i.children.length;o++){var R=k[i.children[o]];R&&((I=R.parents.indexOf(d))>=0&&R.parents.splice(I,1))}}for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(i=k[d]))for(q=p[d],o=0;o<q.length;o++)S=q[o],(I=i.children.indexOf(S))>=0&&i.children.splice(I,1);for(d in h("apply"),c=y,b)Object.prototype.hasOwnProperty.call(b,d)&&(e[d]=b[d]);var T=null;for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(i=k[d])){q=p[d];var L=[];for(t=0;t<q.length;t++)if(S=q[t],r=i.hot._acceptedDependencies[S]){if(-1!==L.indexOf(r))continue;L.push(r)}for(t=0;t<L.length;t++){r=L[t];try{r(q)}catch(J){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:d,dependencyId:q[t],error:J}),n.ignoreErrored||T||(T=J)}}}for(t=0;t<A.length;t++){var N=A[t];d=N.module,u=[d];try{M(d)}catch(J){if("function"===typeof N.errorHandler)try{N.errorHandler(J)}catch(G){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:G,originalError:J}),n.ignoreErrored||T||(T=G),T||(T=J)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:d,error:J}),n.ignoreErrored||T||(T=J)}}return T?(h("fail"),Promise.reject(T)):(h("idle"),new Promise(function(e){e(m)}))}var k={},H={3:0},I=[],A=[];function S(e){return M.p+"static/js/"+({1:"1-home",2:"2-contribute"}[e]||e)+"."+{1:"84fe942b",2:"3b3293d6"}[e]+".js"}function M(n){if(k[n])return k[n].exports;var r=k[n]={i:n,l:!1,exports:{},hot:s(n),parents:(l=u,u=[],l),children:[]};return e[n].call(r.exports,r,r.exports,function(e){var n=k[e];if(!n)return M;var r=function(r){return n.hot.active?(k[r]?-1===k[r].parents.indexOf(e)&&k[r].parents.push(e):(u=[e],o=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),u=[]),M(r)},t=function(e){return{configurable:!0,enumerable:!0,get:function(){return M[e]},set:function(n){M[e]=n}}};for(var i in M)Object.prototype.hasOwnProperty.call(M,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,t(i));return r.e=function(e){return"ready"===f&&h("prepare"),g++,M.e(e).then(n,function(e){throw n(),e});function n(){g--,"prepare"===f&&(w[e]||E(e),0===g&&0===b&&D())}},r.t=function(e,n){return 1&n&&(e=r(e)),M.t(e,-2&n)},r}(n)),r.l=!0,r.exports}M.e=function(e){var n=[],r=H[e];if(0!==r)if(r)n.push(r[2]);else{var t=new Promise(function(n,t){r=H[e]=[n,t]});n.push(r[2]=t);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,M.nc&&i.setAttribute("nonce",M.nc),i.src=S(e),0!==i.src.indexOf(window.location.origin+"/")&&(i.crossOrigin="anonymous");var c=new Error;o=function(n){i.onerror=i.onload=null,clearTimeout(d);var r=H[e];if(0!==r){if(r){var t=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+t+": "+o+")",c.type=t,c.request=o,r[1](c)}H[e]=void 0}};var d=setTimeout(function(){o({type:"timeout",target:i})},12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(n)},M.m=e,M.c=k,M.d=function(e,n,r){M.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},M.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},M.t=function(e,n){if(1&n&&(e=M(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(M.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)M.d(r,t,function(n){return e[n]}.bind(null,t));return r},M.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return M.d(n,"a",n),n},M.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},M.p="/rf-filereceiver/",M.oe=function(e){throw console.error(e),e},M.h=function(){return c};var q=window.webpackJsonp=window.webpackJsonp||[],U=q.push.bind(q);q.push=n,q=q.slice();for(var z=0;z<q.length;z++)n(q[z]);var C=U,R=(I.push([0,0]),r());n([[],{},0,[0,1,2]])}({"./.docz/app/db.json":function(e){e.exports={config:{title:"rf-filereceiver",description:"A component which interacts with user click, and download file via downloadjs",menu:[],version:"1.1.0",repository:!1,native:!1,codeSandbox:!0,themeConfig:{},separator:"-",typescript:!1,theme:"/Users/zuohao/codes/github/rf-filereceiver/node_modules/docz-theme-umi/es/index.js",public:"./public",base:"/rf-filereceiver/",plugins:[{},{},{},{},{},{}]},props:[],entries:[{key:"1_home.mdx",value:{name:"Getting Started",route:"/rf-filereceiver/",id:"81dfb580f3199b5f2499ff32c73fd1f3",filepath:"1_home.mdx",link:"https://github.com/leftstick/rf-filereceiver/edit/master/1_home.mdx",slug:"1-home",menu:"",headings:[{slug:"why-rf-filereceiver",depth:2,value:"Why rf-filereceiver"},{slug:"installation",depth:2,value:"Installation"},{slug:"yarn",depth:3,value:"yarn"},{slug:"npm",depth:3,value:"npm"},{slug:"usage",depth:2,value:"Usage"},{slug:"props",depth:2,value:"Props"}]}},{key:"2_contribute.mdx",value:{name:"How to contribute",id:"31cc1f1a67d2e1ba9e093f4d8f0eccc2",filepath:"2_contribute.mdx",link:"https://github.com/leftstick/rf-filereceiver/edit/master/2_contribute.mdx",slug:"2-contribute",route:"/rf-filereceiver/2-contribute",menu:"",headings:[{slug:"fork",depth:2,value:"Fork"},{slug:"install-dependencies",depth:2,value:"Install dependencies"},{slug:"launch-doc-via-dev-mode",depth:2,value:"Launch doc via dev mode"}]}}]}},"./.docz/app/index.jsx":function(e,n,r){"use strict";r.r(n);var t=r("react"),o=r.n(t),i=r("react-dom"),c=r.n(i),d=r("./node_modules/docz/dist/index.esm.js"),a=r("./node_modules/docz-theme-umi/es/index.js"),u={"1_home.mdx":function(){return Promise.all([r.e(0),r.e(1)]).then(r.bind(null,"./1_home.mdx"))},"2_contribute.mdx":function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"./2_contribute.mdx"))}},l=r("./.docz/app/db.json"),s=function(){return o.a.createElement(a.a,{linkComponent:d.b,db:l},o.a.createElement(d.e,{imports:u}))},p=[],f=[function(){var e=document.querySelector("#splash-spinner"),n=document.querySelector(".spinner");e&&document.head.removeChild(e),n&&n.parentNode&&n.parentNode.removeChild(n)}],h=function(){return f.forEach(function(e){return e&&e()})},m=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;p.forEach(function(e){return e&&e()}),c.a.render(o.a.createElement(e,null),m,h)}(s)},0:function(e,n,r){e.exports=r("./.docz/app/index.jsx")},react:function(e,n){e.exports=window.React},"react-dom":function(e,n){e.exports=window.ReactDOM}});