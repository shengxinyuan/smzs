(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set-shop-service-code"],{1656:function(e,t,n){"use strict";n.r(t);var o=n("38ba"),i=n("f30d");for(var s in i)"default"!==s&&function(e){n.d(t,e,(function(){return i[e]}))}(s);n("177c");var a,c=n("f0c5"),u=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"25e23ee7",null,!1,o["a"],a);t["default"]=u.exports},"177c":function(e,t,n){"use strict";var o=n("a9e3f"),i=n.n(o);i.a},"38ba":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return o}));var o={uSwitch:n("896b").default,uIcon:n("b4b8").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"service-tel-box"},[n("v-uni-view",{staticClass:"tel"},[n("v-uni-view",{staticClass:"u-upload-box",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.shopLogoPopup.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"shop-photo",attrs:{src:e.shopPhoto,mode:"aspectFill"}})],1)],1),n("v-uni-view",{staticClass:"show-switch-box"},[n("v-uni-view",{staticClass:"show-switch-up"},[n("v-uni-view",[e._v("商城中展示:")]),n("u-switch",{attrs:{"active-color":"#2d407a",size:"40"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.change.apply(void 0,arguments)}},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}})],1),n("v-uni-view",{staticClass:"show-switch-down"},[n("u-icon",{staticClass:"icon warning",attrs:{name:"warning"}}),n("v-uni-text",[e._v("商城显示开关按钮可以控制商城是否显示此信息。")])],1),n("v-uni-view",{staticClass:"zl-btn"},[n("v-uni-button",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.save.apply(void 0,arguments)}}},[e._v("保存")])],1)],1)],1)},s=[]},5354:function(e,t,n){var o=n("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.service-tel-box[data-v-25e23ee7]{padding:0 %?30?%}.service-tel-box .tel[data-v-25e23ee7]{padding:%?30?% 0;border-top:solid %?2?% #f8f8f8;border-bottom:solid %?2?% #f8f8f8}.service-tel-box .tel uni-input[data-v-25e23ee7]{font-size:%?30?%}.service-tel-box .tel .u-upload-box[data-v-25e23ee7]{display:flex;justify-content:center;align-items:center}.service-tel-box .tel .u-upload-box uni-image[data-v-25e23ee7]{background-color:#f1f1f1;width:%?400?%;height:%?400?%}.service-tel-box .show-switch-box[data-v-25e23ee7]{margin-top:%?30?%}.service-tel-box .show-switch-box .show-switch-up[data-v-25e23ee7]{display:flex;justify-content:space-between;align-items:center;font-size:%?28?%}.service-tel-box .show-switch-box .show-switch-down[data-v-25e23ee7]{margin-top:%?20?%;font-size:%?22?%;color:#f9817d}.service-tel-box .show-switch-box .show-switch-down .icon[data-v-25e23ee7]{font-size:%?30?%;margin-right:%?10?%}.service-tel-box .show-switch-box .zl-btn[data-v-25e23ee7]{margin-top:%?60?%}.service-tel-box .show-switch-box .zl-btn .btn[data-v-25e23ee7]{height:%?80?%;line-height:%?80?%;font-size:%?28?%;color:#fff;background-image:linear-gradient(90deg,#2b3f7d,#1b2c60);border-radius:%?40?%}',""]),e.exports=t},6852:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{token:{token:uni.getStorageSync("token")},width:230,height:230,checked:!1,lists:[],image:"",shopPhoto:""}},onLoad:function(e){console.log(e),this.checked=1==e.is_qr_code,this.shopPhoto=e.qr_code},methods:{change:function(e){this.checked=e},save:function(){var e=this,t={qr_code:this.shopPhoto,is_qr_code:this.checked?1:2};this.$api.post("manage",t).then((function(t){console.log(t),1==t.status&&(e.com.msg(t.message),uni.navigateBack())}))},shopLogoPopup:function(){var e=this;uni.chooseImage({sourceType:["camera "],success:function(t){console.log(t);var n=t.tempFilePaths[0];console.log(t.tempFilePaths[0]),uni.uploadFile({url:"https://zuanshi.semoh.cn/api/uploads",filePath:n,name:"file",formData:{user:"test"},header:{token:uni.getStorageSync("token")},success:function(t){e.image=JSON.parse(t.data).data,e.shopPhoto=e.image}})}})}}};t.default=o},a9e3f:function(e,t,n){var o=n("5354");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=n("4f06").default;i("5aaf1ea8",o,!0,{sourceMap:!1,shadowMode:!1})},f30d:function(e,t,n){"use strict";n.r(t);var o=n("6852"),i=n.n(o);for(var s in o)"default"!==s&&function(e){n.d(t,e,(function(){return o[e]}))}(s);t["default"]=i.a}}]);