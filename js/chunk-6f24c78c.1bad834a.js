(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f24c78c"],{"0f91":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=t.sendForm=t.send=t.init=void 0;var a=s("3245");Object.defineProperty(t,"EmailJSResponseStatus",{enumerable:!0,get:function(){return a.EmailJSResponseStatus}});var n=s("5129"),i=null,r="https://api.emailjs.com";function o(e,t,s){return void 0===s&&(s={}),new Promise((function(n,i){var r=new XMLHttpRequest;for(var o in r.addEventListener("load",(function(e){var t=new a.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?n(t):i(t)})),r.addEventListener("error",(function(e){i(new a.EmailJSResponseStatus(e.target))})),r.open("POST",e,!0),s)r.setRequestHeader(o,s[o]);r.send(t)}))}function l(e){var t=document&&document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function u(e){return"#"!==e[0]&&"."!==e[0]?"#"+e:e}function c(e,t){i=e,r=t||"https://api.emailjs.com"}function m(e,t,s,a){var n={lib_version:"2.6.4",user_id:a||i,service_id:e,template_id:t,template_params:l(s)};return o(r+"/api/v1.0/email/send",JSON.stringify(n),{"Content-type":"application/json"})}function d(e,t,s,a){if("string"===typeof s&&(s=document.querySelector(u(s))),!s||"FORM"!==s.nodeName)throw"Expected the HTML form element or the style selector of form";n.UI.progressState(s);var l=new FormData(s);return l.append("lib_version","2.6.4"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",a||i),o(r+"/api/v1.0/email/send-form",l).then((function(e){return n.UI.successState(s),e}),(function(e){return n.UI.errorState(s),Promise.reject(e)}))}t.init=c,t.send=m,t.sendForm=d,t.default={init:c,send:m,sendForm:d}},3245:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0;var a=function(){function e(e){this.status=e.status,this.text=e.responseText}return e}();t.EmailJSResponseStatus=a},5129:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var a=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=a},"6fb4":function(e,t,s){},b0c0:function(e,t,s){var a=s("83ab"),n=s("9bf2").f,i=Function.prototype,r=i.toString,o=/^\s*function ([^ (]*)/,l="name";a&&!(l in i)&&n(i,l,{configurable:!0,get:function(){try{return r.call(this).match(o)[1]}catch(e){return""}}})},b8fa:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"contact"},[s("Header",{attrs:{showTitle:!0}}),s("div",{staticClass:"content"},[s("div",{staticClass:"desktop"},[s("Menu")],1),s("form",{attrs:{id:"contact"},on:{submit:function(t){return t.preventDefault(),e.sendEmail(t)}}},[s("div",{staticClass:"fields"},[s("h3",[e._v("What are you working on?")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",name:"name",placeholder:"Name"},domProps:{value:e.name},on:{input:[function(t){t.target.composing||(e.name=t.target.value)},e.validateForm]}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",name:"email",placeholder:"Email address"},domProps:{value:e.email},on:{input:[function(t){t.target.composing||(e.email=t.target.value)},e.validateForm]}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{name:"message",rows:"7",placeholder:"Message"},domProps:{value:e.message},on:{input:[function(t){t.target.composing||(e.message=t.target.value)},e.validateForm]}}),s("input",{attrs:{type:"submit",value:"Send",disabled:!e.isValidForm}})])])]),s("Footer")],1)},n=[],i=(s("b0c0"),s("0f91")),r=s.n(i),o=s("fd2d"),l=s("0418"),u=s("fb62"),c={name:"Contact",components:{Footer:o["a"],Header:l["a"],Menu:u["a"]},data:function(){return{name:null,email:null,message:null,isValidForm:!1}},methods:{sendEmail:function(e){try{r.a.sendForm(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_ZOHO_SERVICE_ID,Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_ZOHO_TEMPLATE_ID,e.target,Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_ZOHO_USER_ID,{name:this.name,email:this.email,message:this.message}),this.name=null,this.email=null,this.message=null,this.isValidForm=!1,alert("Your message has been sent!")}catch(t){alert(t)}},validateForm:function(){if(this.name&&this.message){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;e.test(this.email)?this.isValidForm=!0:this.isValidForm=!1}else this.isValidForm=!1}}},m=c,d=(s("d705"),s("2877")),p=Object(d["a"])(m,a,n,!1,null,"71089718",null);t["default"]=p.exports},d705:function(e,t,s){"use strict";s("6fb4")}}]);
//# sourceMappingURL=chunk-6f24c78c.1bad834a.js.map