(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-setting"],{"0204":function(t,n,i){"use strict";i.r(n);var e=i("bd18"),o=i.n(e);for(var a in e)"default"!==a&&function(t){i.d(n,t,(function(){return e[t]}))}(a);n["default"]=o.a},"16c5":function(t,n,i){"use strict";var e=i("9717"),o=i.n(e);o.a},"36dd":function(t,n,i){"use strict";i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return e}));var e={uIcon:i("b4b8").default},o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"cont"},[i("v-uni-view",{staticClass:"items",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.go_set(99)}}},[i("v-uni-view",{staticClass:"items_l"},[t._v("实名认证")]),t.shiname?i("v-uni-view",{staticClass:"items_r"},[t._v("未认证"),i("v-uni-text",{staticClass:"views"}),i("u-icon",{attrs:{name:"arrow-right"}})],1):i("v-uni-view",{staticClass:"items_r"},[t._v("已认证"),i("u-icon",{attrs:{name:"arrow-right"}})],1)],1),t._l(t.list,(function(n,e){return i("v-uni-view",{key:e,staticClass:"items",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.go_set(e)}}},[i("v-uni-view",{staticClass:"items_l"},[t._v(t._s(n.tit))]),i("v-uni-view",{staticClass:"items_r"},[i("u-icon",{attrs:{name:"arrow-right"}})],1)],1)})),i("v-uni-view",{staticClass:"log_out",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.log_outs.apply(void 0,arguments)}}},[i("v-uni-button",{attrs:{type:"default"}},[t._v("退出登录")])],1)],2)},a=[]},"3bf6":function(t,n,i){"use strict";var e=i("c08c"),o=i.n(e);o.a},5352:function(t,n,i){"use strict";i.r(n);var e=i("36dd"),o=i("0204");for(var a in o)"default"!==a&&function(t){i.d(n,t,(function(){return o[t]}))}(a);i("16c5"),i("3bf6");var s,r=i("f0c5"),c=Object(r["a"])(o["default"],e["b"],e["c"],!1,null,"16dff664",null,!1,e["a"],s);n["default"]=c.exports},"5dd7":function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,"uni-page-body[data-v-16dff664]{background-color:#f1f1f1}body.?%PAGE?%[data-v-16dff664]{background-color:#f1f1f1}",""]),t.exports=n},"95ab":function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.log_out[data-v-16dff664]{padding:%?20?%;position:fixed;left:0;bottom:0;right:0}.log_out uni-button[data-v-16dff664]{border-radius:%?50?%;border:%?1?% solid #dd2626;font-size:%?32?%;color:#dd2626}.items[data-v-16dff664]{padding:0 3%;display:flex;justify-content:space-between;border-bottom:%?1?% solid #eee;line-height:%?90?%;font-size:%?30?%;background-color:#fff}.items .items_r[data-v-16dff664]{color:#999}.items .items_r .views[data-v-16dff664]{display:inline-block;margin:0 %?20?%;width:%?16?%;height:%?16?%;background-color:red;border-radius:50%}.items[data-v-16dff664]:nth-child(5){margin:%?40?% 0}',""]),t.exports=n},9717:function(t,n,i){var e=i("5dd7");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("4f06").default;o("48bad068",e,!0,{sourceMap:!1,shadowMode:!1})},bd18:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{list:[{tit:"账号安全"},{tit:"个人信息"},{tit:"分享APP"},{tit:"新手教程"},{tit:"帮助与客服"},{tit:"关于我们"},{tit:"意见反馈"},{tit:"提现设置"},{tit:"服务协议"},{tit:"隐私政策"}],shiname:!1}},onShow:function(){var t=this;this.$api.get("info").then((function(n){console.log(n),1==n.status&&(""!=n.data.truename&&""!=n.data.id_number?t.shiname=!1:t.shiname=!0)})),this.pag_data=uni.getStorageSync("menber_json")},methods:{log_outs:function(){uni.showModal({title:"温馨提示",content:"您要退出当前账号吗？",success:function(t){t.confirm?(uni.removeStorageSync("token"),uni.removeStorageSync("member_info"),uni.removeStorageSync("member_info_img"),uni.removeStorageSync("menber_json"),uni.removeStorageSync("user_infotit"),uni.removeStorageSync("viptype"),uni.navigateTo({url:"../login/login"})):t.cancel&&console.log("取消")}.bind(this)})},go_set:function(t){0==t?this.com.navto("./user_set"):1==t?this.com.navto("./user_text"):2==t||(3==t?this.com.navto("./olie_course"):4==t?this.com.navto("../../pages/service/service"):5==t?this.com.navto("../../pages/my/aboutus"):6==t?this.com.navto("./fankui"):7==t?this.com.navto("../set-shop/set-withdraw"):8==t?this.com.navto("../login/fuwu"):9==t?this.com.navto("../login/yinsi"):99==t&&this.com.navto("./Certification"))}}};n.default=e},c08c:function(t,n,i){var e=i("95ab");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("4f06").default;o("00f3513c",e,!0,{sourceMap:!1,shadowMode:!1})}}]);