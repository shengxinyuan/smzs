(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-Certification"],{"1f92":function(t,n,a){"use strict";var i=a("4817"),e=a.n(i);e.a},2119:function(t,n,a){"use strict";var i;a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return o})),a.d(n,"a",(function(){return i}));var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",[a("v-uni-view",{staticClass:"sos_sty"},[t._v("根据国家快递法律相关规定，发件人需实名认证。请输入您本人真实身份信息，否则无法代发。您的信息我们也将保密！")]),a("v-uni-view",{staticClass:"inputs"},[a("v-uni-view",{staticClass:"inputs_l"},[t._v("姓名")]),a("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入真实姓名"},model:{value:t.name,callback:function(n){t.name=n},expression:"name"}})],1),a("v-uni-view",{staticClass:"inputs"},[a("v-uni-view",{staticClass:"inputs_l"},[t._v("身份证号")]),a("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入身份证号"},model:{value:t.user_id,callback:function(n){t.user_id=n},expression:"user_id"}})],1),a("v-uni-view",{staticClass:"bottom-box"},[a("v-uni-view",{staticClass:"login_s",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.but_cli.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)},o=[]},"2c3a":function(t,n,a){var i=a("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.inputs[data-v-2662cb08]{background-color:#fff;padding:%?20?% %?30?%;margin-bottom:%?2?%;display:flex;justify-content:space-between}.inputs uni-input[data-v-2662cb08]{width:70%;color:#666;font-size:%?28?%;text-align:right}.sos_sty[data-v-2662cb08]{font-size:%?24?%;width:100%;padding:2% 3%;background-color:#fffaf0;color:#f9dcc2;margin-bottom:%?24?%}.bottom-box[data-v-2662cb08]{padding:0 %?30?%}.bottom-box .login_s[data-v-2662cb08]{width:100%;height:%?72?%;text-align:center;line-height:%?72?%;border-radius:%?50?%;background-color:#1e3066;color:#fff;margin-top:%?100?%}',""]),t.exports=n},"2ea1":function(t,n,a){"use strict";a.r(n);var i=a("3272"),e=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(n,t,(function(){return i[t]}))}(o);n["default"]=e.a},3272:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{name:"",user_id:""}},onLoad:function(){var n=this;this.$api.get("info").then((function(a){t.log(a),1==a.status&&(n.name=a.data.truename,n.user_id=a.data.id_number)}))},methods:{but_cli:function(){var n=this;this.$api.put("info",{truename:this.name,id_number:this.user_id}).then((function(a){t.log(a),n.com.msg(a.message),a.status}))}}};n.default=a}).call(this,a("5a52")["default"])},3323:function(t,n,a){var i=a("7841");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=a("4f06").default;e("4ef1d39a",i,!0,{sourceMap:!1,shadowMode:!1})},4817:function(t,n,a){var i=a("2c3a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=a("4f06").default;e("4b050c9e",i,!0,{sourceMap:!1,shadowMode:!1})},7841:function(t,n,a){var i=a("24fb");n=i(!1),n.push([t.i,"uni-page-body[data-v-2662cb08]{background-color:#f1f1f1}body.?%PAGE?%[data-v-2662cb08]{background-color:#f1f1f1}",""]),t.exports=n},"7c32":function(t,n,a){"use strict";var i=a("3323"),e=a.n(i);e.a},"95a0":function(t,n,a){"use strict";a.r(n);var i=a("2119"),e=a("2ea1");for(var o in e)"default"!==o&&function(t){a.d(n,t,(function(){return e[t]}))}(o);a("7c32"),a("1f92");var s,u=a("f0c5"),c=Object(u["a"])(e["default"],i["b"],i["c"],!1,null,"2662cb08",null,!1,i["a"],s);n["default"]=c.exports}}]);