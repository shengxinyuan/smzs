(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-setting"],{19576:function(t,n,e){"use strict";var i=e("f95c"),a=e.n(i);a.a},"2dce":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{list:[{tit:"账号安全"},{tit:"个人信息"},{tit:"分享APP"},{tit:"新手教程"},{tit:"帮助与客服"},{tit:"关于我们"},{tit:"意见反馈"},{tit:"提现设置"},{tit:"服务协议"},{tit:"隐私政策"}],shiname:!1}},onShow:function(){var n=this;this.$api.get("info").then((function(e){t("log",e," at pages/my/setting.vue:50"),1==e.status&&(""!=e.data.truename&&""!=e.data.id_number?n.shiname=!1:n.shiname=!0)})),this.pag_data=uni.getStorageSync("menber_json")},methods:{log_outs:function(){uni.showModal({title:"温馨提示",content:"您要退出当前账号吗？",success:function(n){n.confirm?(uni.removeStorageSync("token"),uni.removeStorageSync("member_info"),uni.removeStorageSync("member_info_img"),uni.removeStorageSync("menber_json"),uni.removeStorageSync("user_infotit"),uni.removeStorageSync("viptype"),uni.navigateTo({url:"../login/login"})):n.cancel&&t("log","取消"," at pages/my/setting.vue:80")}.bind(this)})},go_set:function(n){0==n?this.com.navto("./user_set"):1==n?this.com.navto("./user_text"):2==n?uni.share({provider:"weixin",scene:"WXSceneSession",type:0,href:"http://zuanshi.dis.wanheweb.com/smsj/index.html#/pages/index/share?invcode="+this.pag_data.bn,title:"奢美饰界",summary:"我在奢美饰界发现好物，快来看看！",imageUrl:"../../static/logos.jpg",success:function(n){t("log",n," at pages/my/setting.vue:101")},fail:function(n){t("log",n," at pages/my/setting.vue:103")}}):3==n?this.com.navto("./olie_course"):4==n?this.com.navto("../../pages/service/service"):5==n?this.com.navto("../../pages/my/aboutus"):6==n?this.com.navto("./fankui"):7==n?this.com.navto("../set-shop/set-withdraw"):8==n?this.com.navto("../login/fuwu"):9==n?this.com.navto("../login/yinsi"):99==n&&this.com.navto("./Certification")}}};n.default=e}).call(this,e("0de9")["log"])},"5e4f":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.log_out[data-v-3aeb0d57]{padding:%?20?%;position:fixed;left:0;bottom:0;right:0}.log_out uni-button[data-v-3aeb0d57]{border-radius:%?50?%;border:%?1?% solid #dd2626;font-size:%?32?%;color:#dd2626}.items[data-v-3aeb0d57]{padding:0 3%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:%?1?% solid #eee;line-height:%?90?%;font-size:%?30?%;background-color:#fff}.items .items_r[data-v-3aeb0d57]{color:#999}.items .items_r .views[data-v-3aeb0d57]{display:inline-block;margin:0 %?20?%;width:%?16?%;height:%?16?%;background-color:red;border-radius:50%}.items[data-v-3aeb0d57]:nth-child(5){margin:%?40?% 0}',""]),t.exports=n},"8dcd":function(t,n,e){"use strict";e.r(n);var i=e("2dce"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},9682:function(t,n,e){var i=e("9c18");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("128f088b",i,!0,{sourceMap:!1,shadowMode:!1})},"9c18":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,"uni-page-body[data-v-3aeb0d57]{background-color:#f1f1f1}body.?%PAGE?%[data-v-3aeb0d57]{background-color:#f1f1f1}",""]),t.exports=n},bb94:function(t,n,e){"use strict";e.r(n);var i=e("befd"),a=e("8dcd");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("cbb0"),e("19576");var s,r=e("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"3aeb0d57",null,!1,i["a"],s);n["default"]=c.exports},befd:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={uIcon:e("c039").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"cont"},[e("v-uni-view",{staticClass:"items",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.go_set(99)}}},[e("v-uni-view",{staticClass:"items_l"},[t._v("实名认证")]),t.shiname?e("v-uni-view",{staticClass:"items_r"},[t._v("未认证"),e("v-uni-text",{staticClass:"views"}),e("u-icon",{attrs:{name:"arrow-right"}})],1):e("v-uni-view",{staticClass:"items_r"},[t._v("已认证"),e("u-icon",{attrs:{name:"arrow-right"}})],1)],1),t._l(t.list,(function(n,i){return e("v-uni-view",{key:i,staticClass:"items",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.go_set(i)}}},[e("v-uni-view",{staticClass:"items_l"},[t._v(t._s(n.tit))]),e("v-uni-view",{staticClass:"items_r"},[e("u-icon",{attrs:{name:"arrow-right"}})],1)],1)})),e("v-uni-view",{staticClass:"log_out",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.log_outs.apply(void 0,arguments)}}},[e("v-uni-button",{attrs:{type:"default"}},[t._v("退出登录")])],1)],2)},o=[]},cbb0:function(t,n,e){"use strict";var i=e("9682"),a=e.n(i);a.a},f95c:function(t,n,e){var i=e("5e4f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("ca12f05c",i,!0,{sourceMap:!1,shadowMode:!1})}}]);