(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-threedesign"],{2319:function(n,t,e){"use strict";e.r(t);var i=e("4bb6"),a=e("7c4e");for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);var c,r=e("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"2479b2d6",null,!1,i["a"],c);t["default"]=u.exports},"4bb6":function(n,t,e){"use strict";var i;e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return i}));var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[n.loaded?e("v-uni-web-view",{attrs:{id:"threeDesignRef",src:n.design3dUrl}}):n._e()],1)},o=[]},"7c4e":function(n,t,e){"use strict";e.r(t);var i=e("d09e"),a=e.n(i);for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);t["default"]=a.a},d09e:function(n,t,e){"use strict";(function(n){e("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=e("f723"),a={data:function(){return{design3dUrl:i.config.design3dUrl,loaded:!1,wv:null}},onLoad:function(t){var e=this,a="";if(uni.getStorageSync("token")){if(a="?token=".concat(uni.getStorageSync("token"),"&env=").concat(i.env),t.data){var o=JSON.parse(t.data);for(var c in o)a+="&".concat(c,"=").concat(o[c])}}else uni.showModal({content:"您还未登录,是否登录?",success:function(n){n.confirm&&e.com.navto("/pages/login/login")},fail:function(){},complete:function(){}});t.url?this.design3dUrl+="".concat(t.url,"/").concat(a):this.design3dUrl+="".concat(a),n.log("url",this.design3dUrl),this.loaded=!0},onReady:function(){var n=this,t=this.$scope.$getAppWebview(),e=function e(){if(n.wv=t.children()[0],!n.wv)return setTimeout((function(){return e()}),100);var i=uni.getSystemInfoSync();n.wv.setStyle({top:i.statusBarHeight,bottom:i.safeAreaInsets.bottom})};e()},onBackPress:function(n){var t=this,e=n.from;if("backbutton"==e&&this.wv)return this.wv.canBack((function(n){n.canBack?t.wv.back():uni.navigateBack()})),!0},methods:{}};t.default=a}).call(this,e("5a52")["default"])}}]);