(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-user_set"],{"0302":function(t,n,a){var i=a("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.account[data-v-1cdcdb3a]{width:100%;display:flex;padding:%?20?% 0;flex-wrap:wrap}.set_list[data-v-1cdcdb3a]{width:100%;display:flex;flex-wrap:wrap;background-color:#fff;padding:0 %?25?%}.set_list .list[data-v-1cdcdb3a]{width:100%;display:flex;justify-content:space-between;height:%?120?%;line-height:%?120?%;border-bottom:%?1?% solid #f6f6f6}.set_list .list .right[data-v-1cdcdb3a]{color:#999}.set_list .list .right .u-icon[data-v-1cdcdb3a]{margin-left:%?20?%}',""]),t.exports=n},"1b8b":function(t,n,a){var i=a("0302");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=a("4f06").default;e("03c9c29b",i,!0,{sourceMap:!1,shadowMode:!1})},"5a1c":function(t,n,a){"use strict";a.r(n);var i=a("74db"),e=a("6459");for(var s in e)"default"!==s&&function(t){a.d(n,t,(function(){return e[t]}))}(s);a("fca0");var c,o=a("f0c5"),r=Object(o["a"])(e["default"],i["b"],i["c"],!1,null,"1cdcdb3a",null,!1,i["a"],c);n["default"]=r.exports},6459:function(t,n,a){"use strict";a.r(n);var i=a("9357"),e=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(n,t,(function(){return i[t]}))}(s);n["default"]=e.a},"74db":function(t,n,a){"use strict";a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return s})),a.d(n,"a",(function(){return i}));var i={uIcon:a("b4b8").default},e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"account"},[a("v-uni-view",{staticClass:"set_list"},t._l(t.list_s,(function(n,i){return a("v-uni-view",{staticClass:"list",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.go_account(i)}}},[t._v(t._s(n.name)),a("v-uni-view",{staticClass:"right"},[t._v(t._s(n.number)),1==i?a("u-icon",{attrs:{name:"arrow-right",color:"#706f6c",size:"20"}}):t._e()],1)],1)})),1)],1)},s=[]},9357:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{arr:"",list_s:[]}},onShow:function(){var t=this;this.$api.get("info").then((function(n){console.log(n),1==n.status&&(t.arr=n.data.mobile,t.list_s=[{name:"绑定手机",number:n.data.mobile},{name:"修改密码"}])}))},methods:{go_account:function(t){1==t&&this.com.navto("../login/forget?type=2&mobile="+this.arr)}}};n.default=i},fca0:function(t,n,a){"use strict";var i=a("1b8b"),e=a.n(i);e.a}}]);