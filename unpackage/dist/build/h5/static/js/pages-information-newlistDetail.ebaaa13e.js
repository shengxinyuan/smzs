(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-information-newlistDetail"],{"15ca":function(n,t,e){var r=e("24fb");t=r(!1),t.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.pages[data-v-2e7bac36]{padding:3%}',""]),n.exports=t},"593f":function(n,t,e){"use strict";e.r(t);var r=e("8999"),a=e.n(r);for(var i in r)"default"!==i&&function(n){e.d(t,n,(function(){return r[n]}))}(i);t["default"]=a.a},8999:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{list:""}},onLoad:function(t){var e=this;n("log",t," at pages/information/newlistDetail.vue:20"),this.$api.get("message?id="+t.id).then((function(t){n("log",t," at pages/information/newlistDetail.vue:22"),1==t.status&&(e.list=t.data)}))}};t.default=e}).call(this,e("0de9")["log"])},"9ccd":function(n,t,e){"use strict";e.r(t);var r=e("ef6a"),a=e("593f");for(var i in a)"default"!==i&&function(n){e.d(t,n,(function(){return a[n]}))}(i);e("ee40");var s,c=e("f0c5"),u=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,"2e7bac36",null,!1,r["a"],s);t["default"]=u.exports},ec06:function(n,t,e){var r=e("15ca");"string"===typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);var a=e("4f06").default;a("154c990e",r,!0,{sourceMap:!1,shadowMode:!1})},ee40:function(n,t,e){"use strict";var r=e("ec06"),a=e.n(r);a.a},ef6a:function(n,t,e){"use strict";var r;e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return r}));var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"pages"},[e("v-uni-view",{staticClass:"title"},[n._v(n._s(n.list.content))]),e("v-uni-view",{},[n._v("下单时间："+n._s(n.list.create_time))])],1)},i=[]}}]);