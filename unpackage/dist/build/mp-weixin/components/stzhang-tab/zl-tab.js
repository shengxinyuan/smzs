(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/stzhang-tab/zl-tab"],{1228:function(t,n,e){"use strict";e.r(n);var a=e("ff47"),i=e("1ad1");for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);e("fe44");var c,f=e("f0c5"),o=Object(f["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);n["default"]=o.exports},"1ad1":function(t,n,e){"use strict";e.r(n);var a=e("d2fe"),i=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=i.a},d2fe:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={props:["modelData","initIndex"],data:function(){return{defaultInfo:{data:[{label:"测试1"},{label:"测试2"}]},activeIndex:0}},computed:{getModelData:function(){return this.modelData||this.defaultInfo.data},formatBe:function(){return!!this.modelData&&this.modelData.length>4}},methods:{tap:function(t){t!==this.activeIndex&&this.$emit("change",t),this.activeIndex=t},initActive:function(){this.activeIndex=this.initIndex||this.activeIndex}},created:function(){this.initActive()}};n.default=a},d7a7:function(t,n,e){},fe44:function(t,n,e){"use strict";var a=e("d7a7"),i=e.n(a);i.a},ff47:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement;t._self._c},u=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/stzhang-tab/zl-tab-create-component',
    {
        'components/stzhang-tab/zl-tab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1228"))
        })
    },
    [['components/stzhang-tab/zl-tab-create-component']]
]);
