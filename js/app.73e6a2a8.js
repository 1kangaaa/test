(function(t){function e(e){for(var r,o,i=e[0],u=e[1],l=e[2],f=0,s=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&s.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(s.length)s.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a={app:0},c=[];function i(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-45050896":"d6c01ba9","chunk-5450de2e":"27965c97","chunk-549ac98a":"a0f9d8cb","chunk-bf93539a":"eddfe0c8","chunk-f6207290":"ed0fc55a","chunk-6f4db476":"571ceca9"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-45050896":1,"chunk-5450de2e":1,"chunk-549ac98a":1,"chunk-bf93539a":1,"chunk-f6207290":1,"chunk-6f4db476":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-45050896":"35047c7b","chunk-5450de2e":"216eae4c","chunk-549ac98a":"c5926ffb","chunk-bf93539a":"a953ad54","chunk-f6207290":"76686660","chunk-6f4db476":"9f5f3426"}[t]+".css",a=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],f=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===r||f===a))return e()}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){l=s[i],f=l.getAttribute("data-href");if(f===r||f===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||a,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[t],d.parentNode.removeChild(d),n(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=c);var l,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=i(t);var s=new Error;l=function(e){f.onerror=f.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:f})}),12e4);f.onerror=f.onload=l,document.head.appendChild(f)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/test/",u.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var d=f;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},3522:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Detail"}},[n("router-view")],1),n("main-tab-bar")],1)},a=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tab-bar",[n("tab-bar-item",{attrs:{path:"/home",activeColor:"#e6335f"},scopedSlots:t._u([{key:"item-icon",fn:function(){return[n("div",{staticClass:"iconfont icon-shouye word"})]},proxy:!0},{key:"item-text",fn:function(){return[n("p",[t._v("首页")])]},proxy:!0}])}),n("tab-bar-item",{attrs:{path:"/sort",activeColor:"#e6335f"},scopedSlots:t._u([{key:"item-icon",fn:function(){return[n("div",{staticClass:"iconfont icon-fenlei1 word"})]},proxy:!0},{key:"item-text",fn:function(){return[n("p",[t._v("分类")])]},proxy:!0}])}),n("tab-bar-item",{attrs:{path:"/cart",activeColor:"#e6335f"},scopedSlots:t._u([{key:"item-icon",fn:function(){return[n("div",{staticClass:"iconfont icon-gouwucheman word"})]},proxy:!0},{key:"item-text",fn:function(){return[n("p",[t._v("购物车")])]},proxy:!0}])}),n("tab-bar-item",{attrs:{path:"/mine",activeColor:"#e6335f"},scopedSlots:t._u([{key:"item-icon",fn:function(){return[n("div",{staticClass:"iconfont icon-wode word"})]},proxy:!0},{key:"item-text",fn:function(){return[n("p",[t._v("我的")])]},proxy:!0}])})],1)},i=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},l=[],f={name:"TabBar"},s=f,d=(n("7bf3"),n("2877")),p=Object(d["a"])(s,u,l,!1,null,null,null),h=p.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",style:{color:t.activeStyle},on:{click:t.itemClick}},[t._t("item-icon"),t._t("item-text")],2)},b=[],v=(n("c975"),n("ac1f"),n("5319"),{props:{path:String,activeColor:{type:String,default:"red"}},computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.path)},activeStyle:function(){return this.isActive?this.activeColor:""}},methods:{itemClick:function(){this.$router.replace(this.path).catch((function(t){return t}))}}}),y=v,k=Object(d["a"])(y,m,b,!1,null,null,null),g=k.exports,_={name:"MainTabBar",data:function(){return{}},components:{TabBar:h,TabBarItem:g}},w=_,x=Object(d["a"])(w,c,i,!1,null,null,null),C=x.exports,S={name:"App",components:{MainTabBar:C}},O=S,j=(n("034f"),Object(d["a"])(O,o,a,!1,null,null,null)),T=j.exports,E=(n("d3b7"),n("8c4f"));r["a"].use(E["a"]);var P=[{path:"",redirect:"/home"},{path:"/home",component:function(){return Promise.all([n.e("chunk-549ac98a"),n.e("chunk-f6207290")]).then(n.bind(null,"05da"))}},{path:"/sort",component:function(){return n.e("chunk-6f4db476").then(n.bind(null,"a5ad"))}},{path:"/cart",component:function(){return n.e("chunk-45050896").then(n.bind(null,"74185"))}},{path:"/mine",component:function(){return n.e("chunk-5450de2e").then(n.bind(null,"f033"))}},{path:"/detail/:iid",component:function(){return Promise.all([n.e("chunk-549ac98a"),n.e("chunk-bf93539a")]).then(n.bind(null,"1cab"))}}],A=new E["a"]({routes:P}),B=A,L=(n("7db0"),n("2f62"));r["a"].use(L["a"]);var $=new L["a"].Store({state:{cartList:[]},mutations:{addCounter:function(t,e){e.count++},addToCart:function(t,e){e.checked=!0,t.cartList.push(e)}},actions:{addCart:function(t,e){var n=t.state.cartList.find((function(t){return t.iid===e.iid}));n?t.commit("addCounter",n):(e.count=1,t.commit("addToCart",e))}},modules:{}});r["a"].config.productionTip=!1,r["a"].prototype.$bus=new r["a"],new r["a"]({router:B,store:$,render:function(t){return t(T)}}).$mount("#app")},"7bf3":function(t,e,n){"use strict";var r=n("3522"),o=n.n(r);o.a},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.73e6a2a8.js.map