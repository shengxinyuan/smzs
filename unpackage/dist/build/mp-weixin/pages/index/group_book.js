(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/group_book"],{"05fb":function(t,n,e){"use strict";(function(t){e("4963");i(e("66fd"));var n=i(e("0ab7"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},"0ab7":function(t,n,e){"use strict";e.r(n);var i=e("db7d"),u=e("9d6f");for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);e("134b"),e("2538");var c,r=e("f0c5"),o=Object(r["a"])(u["default"],i["b"],i["c"],!1,null,"40c8cb68",null,!1,i["a"],c);n["default"]=o.exports},"134b":function(t,n,e){"use strict";var i=e("685a"),u=e.n(i);u.a},2538:function(t,n,e){"use strict";var i=e("963f"),u=e.n(i);u.a},"685a":function(t,n,e){},"963f":function(t,n,e){},"9d6f":function(t,n,e){"use strict";e.r(n);var i=e("afa6"),u=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=u.a},afa6:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{lists:[],navIndex:0,end_time:"1611912417",end_seckill:"00天00:00:00",type_id:""}},onLoad:function(){this.page_reader()},methods:{page_reader:function(){var t=this;this.$api.get("activity",{type:1,type_id:this.type_id}).then((function(n){console.log(n),1==n.status&&(t.lists=n.data)}))},nav_cli:function(t){this.type_id=t,this.page_reader()},navhead_cli:function(t){this.navIndex=t}}};n.default=i},db7d:function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var i={zsTexture:function(){return e.e("components/zs-texture/zs-texture").then(e.bind(null,"0d0b"))},zsShoplistSeckill:function(){return e.e("components/zs-shoplist-seckill/zs-shoplist-seckill").then(e.bind(null,"4a4f"))}},u=function(){var t=this,n=t.$createElement;t._self._c},a=[]}},[["05fb","common/runtime","common/vendor"]]]);