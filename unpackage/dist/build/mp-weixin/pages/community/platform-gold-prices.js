(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/community/platform-gold-prices"],{2030:function(t,n,e){"use strict";e.r(n);var a=e("c0be"),o=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=o.a},"2d51":function(t,n,e){"use strict";e.r(n);var a=e("55d6"),o=e("2030");for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);e("7e01");var c,u=e("f0c5"),r=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);n["default"]=r.exports},3146:function(t,n,e){},"55d6":function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var a={stzhangTab:function(){return e.e("components/stzhang-tab/stzhang-tab").then(e.bind(null,"f709"))}},o=function(){var t=this,n=t.$createElement;t._self._c},i=[]},"7e01":function(t,n,e){"use strict";var a=e("3146"),o=e.n(a);o.a},c0be:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(){e.e("components/stzhang-tab/stzhang-tab").then(function(){return resolve(e("f709"))}.bind(null,e)).catch(e.oe)},o={components:{stzhangTab:a},data:function(){return{modelData:[{label:"平台金价"},{label:"其他金价"}],initIndex:0,navtype:0,updateTime:"2020/10/14 13:52:32",tiptext:"扫码进店",gold_price:[]}},onLoad:function(){var n=this,e=t.getStorageSync("member_info");console.log(e),this.$api.get("gold_price",{member_id:e.id}).then((function(t){1==t.status&&(n.gold_price=t)}))},methods:{tabsChange:function(t){this.navtype=t},shares:function(n){var e="https://zuanshi.semoh.cn/smsj/index.html#/pages/community/my-gold-prices?goldname=奢美饰界&gold_price="+JSON.stringify(this.gold_price)+"&tiptext=扫码注册下载";0==n||1==n?this.wxShare():2==n&&t.setClipboardData({data:e,success:function(){}})}}};n.default=o}).call(this,e("543d")["default"])},c948:function(t,n,e){"use strict";(function(t){e("b7aa");a(e("66fd"));var n=a(e("2d51"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])}},[["c948","common/runtime","common/vendor"]]]);