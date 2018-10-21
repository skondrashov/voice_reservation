(function(e){function t(t){for(var s,o,c=t[0],a=t[1],l=t[2],p=0,f=[];p<c.length;p++)o=c[p],r[o]&&f.push(r[o][0]),r[o]=0;for(s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,c=1;c<n.length;c++){var a=n[c];0!==r[a]&&(s=!1)}s&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},r={app:0},i=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=a;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var s=n("c21b"),r=n.n(s);r.a},"240f":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var s=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}}),n("router-view")],1)},i=[],o=(n("034f"),n("2877")),c={},a=Object(o["a"])(c,r,i,!1,null,null,null);a.options.__file="App.vue";var l=a.exports,u=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e._m(0),n("SpeechCapture",{attrs:{msg:"Hello"}}),n("p",{staticClass:"descriptionText"},[e._v("\n    This application allows you to reserve a conference room via voice commands.\n    Press the microphone icon to speak to Nexi and they will help you schedule a meeting.\n  ")]),n("h3",[e._v("\n    Currently supported features:\n  ")]),e._m(1),e._m(2)],1)},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"headerBar"},[n("div",{staticClass:"headerTitle"},[e._v("Nexient Voice-Activated Room Reservation Service")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"supportedFeatures"},[n("li",[e._v("Schedule a meeting through voice recognition")]),n("li",[e._v("Book a conference room at a specific date and time")]),n("li",[e._v("Choose who will attend the meeting")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footerBar"},[n("div",{staticClass:"bottomText"},[e._v("Timofey Kondrashov, Akshay Gupte, Jason Zhang")])])}],d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hello"},[s("img",{staticClass:"micButton circle",attrs:{width:"40",src:n("f885")},on:{click:e.recordSpeech}}),e.lastRequest?s("div",{staticClass:"inputText"},[e._v("You said: "+e._s(e.lastRequest))]):e._e(),e.lastResponse?s("div",{staticClass:"responseText"},[e._v("Nexi: "+e._s(e.lastResponse))]):e._e()])},v=[],h=n("3461"),m=new h["a"]({accessToken:"85e32419b3bb47fe952d6d551bbfa14b"}),_={name:"HelloWorld",props:{msg:String},data:function(){return{lastRequest:"",lastResponse:"",synth:window.speechSynthesis,voices:[],currentVoice:4}},mounted:function(){this.voices=this.synth.getVoices();var e=this;this.synth.onvoiceschanged=function(){e.voices=e.synth.getVoices()}},methods:{recordSpeech:function(e){var t=e.target;t.classList.add("circleRed"),t.classList.remove("circle"),t.classList.add("micButtonRed"),t.classList.remove("micButton");var n=n||webkitSpeechRecognition,s=s||webkitSpeechGrammarList,r=r||webkitSpeechRecognitionEvent,i=new n,o=new s;i.grammars=o,i.lang="en-US",i.interimResults=!1,i.maxAlternatives=1,i.start();var c=this;i.onresult=function(e){var t=e.results[0][0].transcript;c.lastRequest=t,m.textRequest(t).then(function(e){var t=e.result.fulfillment["speech"];c.lastResponse=t;var n=new SpeechSynthesisUtterance(t);n.voice=c.voices[c.currentVoice],c.synth.speak(n)})},i.onspeechend=function(){t.classList.add("circle"),t.classList.remove("circleRed"),t.classList.add("micButton"),t.classList.remove("micButtonRed"),i.stop()}}}},b=_,g=(n("5dd9"),Object(o["a"])(b,d,v,!1,null,"b0480d58",null));g.options.__file="SpeechCapture.vue";var y=g.exports,w={name:"speech",components:{SpeechCapture:y}},S=w,x=(n("5c71"),Object(o["a"])(S,p,f,!1,null,"759d1f2f",null));x.options.__file="Speech.vue";var R=x.exports;s["a"].use(u["a"]);var C=new u["a"]({routes:[{path:"/",name:"home",component:R}]});s["a"].config.productionTip=!1,new s["a"]({router:C,render:function(e){return e(l)}}).$mount("#app")},"5c71":function(e,t,n){"use strict";var s=n("240f"),r=n.n(s);r.a},"5dd9":function(e,t,n){"use strict";var s=n("f305"),r=n.n(s);r.a},c21b:function(e,t,n){},f305:function(e,t,n){},f885:function(e,t,n){e.exports=n.p+"img/Line-style-icons-mic.ed85a6d9.svg"}});
//# sourceMappingURL=app.64d4fbd2.js.map