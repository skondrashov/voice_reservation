(function(e){function t(t){for(var r,u,i=t[0],c=t[1],l=t[2],p=0,f=[];p<i.length;p++)u=i[p],o[u]&&f.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);s&&s(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("c21b"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}}),n("router-view")],1)},a=[],u=(n("034f"),n("2877")),i={},c=Object(u["a"])(i,o,a,!1,null,null,null);c.options.__file="App.vue";var l=c.exports,s=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"})},f=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("button",{on:{click:function(t){e.recordSpeech()}}},[e._v("Speak")]),n("span",[e._v(e._s(e.conversationLog))])])},d=[],h=n("3461"),b=new h["a"]({accessToken:"85e32419b3bb47fe952d6d551bbfa14b"}),m={name:"HelloWorld",props:{msg:String},data:function(){return{conversationLog:""}},methods:{recordSpeech:function(){var e=e||webkitSpeechRecognition,t=t||webkitSpeechGrammarList,n=n||webkitSpeechRecognitionEvent,r=new e,o=new t;r.grammars=o,r.lang="en-US",r.interimResults=!1,r.maxAlternatives=1,r.start();var a=this;r.onresult=function(e){var t=e.results[0][0].transcript;alert(t),b.textRequest(t).then(function(e){alert(e.result.fulfillment["speech"]),a.conversationLog=e.result.fulfillment["speech"]})},r.onspeechend=function(){r.stop()}}}},g=m,_=(n("959d"),Object(u["a"])(g,v,d,!1,null,"238a8c66",null));_.options.__file="SpeechCapture.vue";var w=_.exports,S={name:"speech",components:{SpeechCapture:w}},y=S,O=Object(u["a"])(y,p,f,!1,null,null,null);O.options.__file="Speech.vue";var j=O.exports;r["a"].use(s["a"]);var x=new s["a"]({routes:[{path:"/",name:"home",component:j}]});r["a"].config.productionTip=!1,new r["a"]({router:x,render:function(e){return e(l)}}).$mount("#app")},"959d":function(e,t,n){"use strict";var r=n("adf8"),o=n.n(r);o.a},adf8:function(e,t,n){},c21b:function(e,t,n){}});
//# sourceMappingURL=app.83f90b96.js.map