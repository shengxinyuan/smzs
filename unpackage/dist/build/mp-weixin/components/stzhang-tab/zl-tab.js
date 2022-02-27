(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/stzhang-tab/zl-tab"],{"1d36":function(t,n,e){"use strict";e.r(n);var a=e("7123"),i=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(n,t,(function(){return a[t]}))}(c);n["default"]=i.a},"261c":function(t,n,e){"use strict";var a=e("7ecb"),i=e.n(a);i.a},7123:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={props:["modelData","initIndex"],data:function(){return{defaultInfo:{data:[{label:"测试1"},{label:"测试2"}]},activeIndex:0}},computed:{getModelData:function(){return this.modelData||this.defaultInfo.data},formatBe:function(){return!!this.modelData&&this.modelData.length>4}},methods:{tap:function(t){t!==this.activeIndex&&this.$emit("change",t),this.activeIndex=t},initActive:function(){this.activeIndex=this.initIndex||this.activeIndex}},created:function(){this.initActive()}};n.default=a},"751c":function(t,n,e){"use strict";e.r(n);var a=e("9634"),i=e("1d36");for(var c in i)"default"!==c&&function(t){e.d(n,t,(function(){return i[t]}))}(c);e("261c");var u,o=e("f0c5"),r=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);n["default"]=r.exports},"7ecb":function(t,n,e){},9634:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement;t._self._c},c=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/stzhang-tab/zl-tab-create-component',
    {
        'components/stzhang-tab/zl-tab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("751c"))
        })
    },
    [['components/stzhang-tab/zl-tab-create-component']]
]);
