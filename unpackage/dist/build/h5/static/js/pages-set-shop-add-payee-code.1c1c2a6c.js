(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set-shop-add-payee-code"],{"16aa":function(e,a,t){"use strict";t.r(a);var n=t("f6c9"),o=t.n(n);for(var i in n)"default"!==i&&function(e){t.d(a,e,(function(){return n[e]}))}(i);a["default"]=o.a},"3c8f":function(e,a,t){"use strict";t.r(a);var n=t("e2d7"),o=t("16aa");for(var i in o)"default"!==i&&function(e){t.d(a,e,(function(){return o[e]}))}(i);t("4eb8");var s,c=t("f0c5"),u=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"58043e7a",null,!1,n["a"],s);a["default"]=u.exports},"4eb8":function(e,a,t){"use strict";var n=t("ab5d"),o=t.n(n);o.a},ab5d:function(e,a,t){var n=t("e784");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=t("4f06").default;o("447c0ad2",n,!0,{sourceMap:!1,shadowMode:!1})},e2d7:function(e,a,t){"use strict";var n;t.d(a,"b",(function(){return o})),t.d(a,"c",(function(){return i})),t.d(a,"a",(function(){return n}));var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",[t("v-uni-view",{staticClass:"add-payee-code-image"},[t("v-uni-image",{attrs:{src:"https://zuanshi.semoh.cn/applet_static/set-shop/add_code.png",mode:"widthFix"}})],1),t("v-uni-view",{staticClass:"bottom-box"},[t("v-uni-view",{staticClass:"notice"},[e._v(e._s(e.noticeText))]),t("v-uni-view",{staticClass:"bottom-btn"},[t("v-uni-button",{staticClass:"btn",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.uploadcode.apply(void 0,arguments)}}},[e._v("上传二维码")])],1)],1)],1)},i=[]},e784:function(e,a,t){var n=t("24fb");a=n(!1),a.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.add-payee-code-image[data-v-58043e7a]{width:100%;display:flex}.add-payee-code-image uni-image[data-v-58043e7a]{width:100%}.bottom-box[data-v-58043e7a]{position:fixed;bottom:0;left:0}.bottom-box .notice[data-v-58043e7a]{padding:%?16?% %?30?%;background-color:#fde7e7;font-size:%?22?%;color:#f9817d}.bottom-box .bottom-btn[data-v-58043e7a]{padding:%?20?% %?30?%}.bottom-box .bottom-btn .btn[data-v-58043e7a]{font-size:%?30?%;color:#2b3f7d;border:solid %?2?% #2b3f7d;border-radius:%?40?%}',""]),e.exports=a},f6c9:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{noticeText:"*请上传真实有效的收款二维码图片，以便客户购买您的商品时能立即向您付款",type:0,image:"",imagetwo:"",wechat_image:"",alipay_image:""}},onLoad:function(e){console.log(e),this.type=e.id,this.alipay_image=e.alipay_image,this.wechat_image=e.wechat_image},methods:{uploadcode:function(){if(1==this.type){var e=this;uni.chooseImage({sourceType:["camera "],success:function(a){console.log(a);var t=a.tempFilePaths[0];console.log(a.tempFilePaths[0]),uni.uploadFile({url:"https://zuanshi.semoh.cn/api/uploads",filePath:t,name:"file",formData:{user:"test"},header:{token:uni.getStorageSync("token")},success:function(a){e.image=JSON.parse(a.data).data,e.$api.post("manage",{wechat_image:e.image}).then((function(a){console.log(a),1==a.status&&uni.redirectTo({url:"set-payee?wechat_image="+e.image+"&alipay_image="+e.alipay_image})}))}})}})}else{var a=this;uni.chooseImage({sourceType:["camera "],success:function(e){console.log(e);var t=e.tempFilePaths[0];console.log(e.tempFilePaths[0]),uni.uploadFile({url:"https://zuanshi.semoh.cn/api/uploads",filePath:t,name:"file",formData:{user:"test"},header:{token:uni.getStorageSync("token")},success:function(e){a.imagetwo=JSON.parse(e.data).data,a.$api.post("manage",{alipay_image:a.imagetwo}).then((function(e){console.log(e),1==e.status&&uni.redirectTo({url:"set-payee?alipay_image="+a.imagetwo+"&wechat_image="+a.wechat_image})}))}})}})}}}};a.default=n}}]);