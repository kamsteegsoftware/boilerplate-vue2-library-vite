(function(i,u){typeof exports=="object"&&typeof module!="undefined"?u(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],u):(i=typeof globalThis!="undefined"?globalThis:i||self,u(i["vite-vue2-library"]={},i.Vue))})(this,function(i,u){"use strict";function p(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var h=p(u),m=h.default.extend({name:"Button",props:{label:{type:String,required:!0}}}),y=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"bg-emerald-500 text-white text-center p-3 px-8 cursor-pointer inline-flex rounded-full items-center justify-center select-none font-bold",on:{click:function(_){return e.$emit("onClick")}}},[e._v(" "+e._s(e.label)+" ")])},C=[],V="";function b(e,o,a,_,s,l,d,R){var t=typeof e=="function"?e.options:e;o&&(t.render=o,t.staticRenderFns=a,t._compiled=!0),_&&(t.functional=!0),l&&(t._scopeId="data-v-"+l);var r;if(d?(r=function(n){n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!n&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(n=__VUE_SSR_CONTEXT__),s&&s.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(d)},t._ssrRegister=r):s&&(r=R?function(){s.call(this,(t.functional?this.parent:this).$root.$options.shadowRoot)}:s),r)if(t.functional){t._injectStyles=r;var S=t.render;t.render=function(B,v){return r.call(v),S(B,v)}}else{var c=t.beforeCreate;t.beforeCreate=c?[].concat(c,r):[r]}return{exports:e,options:t}}const f={};var $=b(m,y,C,!1,g,"6c70ac6c",null,null);function g(e){for(let o in f)this[o]=f[o]}var T=function(){return $.exports}();i.Button=T,Object.defineProperties(i,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});