(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40db51ec"],{"4bd4":function(t,e,r){"use strict";r("4de4"),r("7db0"),r("4160"),r("caad"),r("07ac"),r("2532"),r("159b");var i=r("5530"),n=r("58df"),a=r("7e2b"),s=r("3206");e["a"]=Object(n["a"])(a["a"],Object(s["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,r=function(t){return t.$watch("hasError",(function(r){e.$set(e.errorBag,t._uid,r)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=r(t)))})):i.valid=r(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var r=this.watchers.find((function(t){return t._uid===e._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"578a":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Panel",{attrs:{title:"Login"}},[r("v-form",{ref:"formLogin",attrs:{autocomplete:"off","lazy-validation":""}},[r("v-text-field",{attrs:{type:"email",rules:t.emailRules,label:"E-Mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),r("v-text-field",{attrs:{type:"password",rules:t.passwordRules,label:"Password",autocomplete:"off",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-btn",{attrs:{dark:"",tile:"",color:"cyan darken-2",block:""},on:{click:t.login}},[t._v("Login")])],1)],1)],1)],1)},n=[],a=(r("c975"),r("96cf"),r("1da1")),s=r("c5b9"),o={name:"Login",data:function(){return{email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return(t||"").indexOf(" ")<0||"No spaces are allowed"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],password:"",passwordRules:[function(t){return!!t||"Password is required"}],error:null}},methods:{validateForm:function(){this.$refs.formLogin.validate()},login:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s["a"].login({email:t.email,password:t.password});case 3:r=e.sent,t.$store.dispatch("setToken",r.data.token),t.$store.dispatch("setUser",r.data.user),t.$router.push({name:"songs"}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),t.error=e.t0.response.data.error;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},u=o,l=r("2877"),c=r("6544"),d=r.n(c),f=r("8336"),h=r("62ad"),p=r("4bd4"),m=r("0fd9"),v=r("8654"),w=Object(l["a"])(u,i,n,!1,null,null,null);e["default"]=w.exports;d()(w,{VBtn:f["a"],VCol:h["a"],VForm:p["a"],VRow:m["a"],VTextField:v["a"]})},c5b9:function(t,e,r){"use strict";var i=r("fce9");e["a"]={register:function(t){return Object(i["a"])().post("register",t)},login:function(t){return Object(i["a"])().post("login",t)}}}}]);
//# sourceMappingURL=chunk-40db51ec.cc19e62b.js.map