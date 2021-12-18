(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/stzhang-tab/stzhang-tab"],{5113:function(t,n,e){"use strict";e.r(n);var a=e("c462"),i=e("79e6");for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);e("6bb3");var c,o=e("f0c5"),r=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);n["default"]=r.exports},"6bb3":function(t,n,e){"use strict";var a=e("7825"),i=e.n(a);i.a},7825:function(t,n,e){},"79e6":function(t,n,e){"use strict";e.r(n);var a=e("9945"),i=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=i.a},9945:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={props:["modelData","initIndex"],data:function(){return{defaultInfo:{data:[{label:"测试1"},{label:"测试2"}]},activeIndex:0}},mounted:function(){console.log(this.modelData,this.initIndex)},computed:{getModelData:function(){return this.modelData||this.defaultInfo.data},formatBe:function(){return!!this.modelData&&this.modelData.length>4}},methods:{tap:function(t){t!==this.activeIndex&&this.$emit("change",t),this.activeIndex=t},initActive:function(){this.activeIndex=this.initIndex||this.activeIndex}},created:function(){this.initActive()}};n.default=a},c462:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement;t._self._c},u=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/stzhang-tab/stzhang-tab-create-component',
    {
        'components/stzhang-tab/stzhang-tab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5113"))
        })
    },
    [['components/stzhang-tab/stzhang-tab-create-component']]
]);
