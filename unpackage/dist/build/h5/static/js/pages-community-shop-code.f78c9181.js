(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-community-shop-code"],{"7c5e":function(t,e,a){"use strict";var n=a("8529"),o=a.n(n);o.a},8529:function(t,e,a){var n=a("fdea");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("4f06").default;o("44e670ee",n,!0,{sourceMap:!1,shadowMode:!1})},a9d1:function(t,e,a){"use strict";a.r(e);var n=a("cf44"),o=a("b7a6");for(var i in o)"default"!==i&&function(t){a.d(e,t,(function(){return o[t]}))}(i);a("7c5e");var s,r=a("f0c5"),d=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"65f94743",null,!1,n["a"],s);e["default"]=d.exports},b7a6:function(t,e,a){"use strict";a.r(e);var n=a("e457"),o=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},cf44:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"tip"},[t._v("分享微信小程序给好友，吸引更多客流")]),a("v-uni-view",{staticClass:"mini-card"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(t.info.title))]),a("v-uni-image",{staticClass:"img",attrs:{src:"https://prod-front-end-oss-h5.oss-cn-shanghai.aliyuncs.com/images/1.png",mode:"widthFix"}})],1),a("v-uni-view",{staticClass:"bottom-btn"},[a("v-uni-button",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.shareWxmini.apply(void 0,arguments)}}},[t._v("分享")])],1)],1)},i=[]},e457:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("f723"),o={data:function(){return{current:0,height:80,activeColor:"#2b3f7d",isShow01:!0,isShow02:!1,popupShow:!1,swiperList:[],mode:"none",bgColor:"#ffffff",shareText:"发送二维码给好友，吸引更多客流",codeImg:"",qrcode_img:"",canvas_hb_show:!1,navnum:1,info:{},member:{}}},onLoad:function(){this.getUserInfo()},methods:{getUserInfo:function(){var t=this;this.member=uni.getStorageSync("member_info"),this.$api.get("manage",{member_id:this.member.id}).then((function(e){t.info=e.data}))},shareWxmini:function(){uni.share({provider:"weixin",scene:"WXSceneSession",type:5,imageUrl:"https://prod-front-end-oss-h5.oss-cn-shanghai.aliyuncs.com/banner.jpg",title:this.info.title,miniProgram:{id:"gh_dd4c8bde95bf",path:"pages/index/index?shopkeeperId=".concat(this.member.id),type:0,webUrl:"".concat(n.config.h5Url,"smsj/index.html#/pages/index/index?data=")+JSON.stringify({name:this.member.id})},success:function(t){},fail:function(t){}})}}};e.default=o},fdea:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-65f94743]{background-color:#ededed;height:calc(100vh - %?80?%)}.nav_head[data-v-65f94743]{height:%?90?%;line-height:%?86?%;display:flex;text-align:center;color:#999}.nav_head .nav_l[data-v-65f94743]{width:50%;position:relative}.nav_head .nav_l.act[data-v-65f94743]{color:#000}.nav_head .nav_l.act[data-v-65f94743]:before{content:"";position:absolute;left:40%;bottom:0;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:%?7?%;width:20%;background-color:#2d407a;border-radius:0 4px 4px 0;opacity:.8}.canvas_a[data-v-65f94743]{position:fixed;left:%?-550?%;bottom:%?-1500?%}.tabs-box[data-v-65f94743]{border-bottom:solid %?2?% #eee}.tabs-first[data-v-65f94743]{padding:%?20?% 0 %?30?% 0}.share-text[data-v-65f94743]{margin-top:%?20?%;text-align:center;font-size:%?24?%;color:#999}.bottom-btn[data-v-65f94743]{width:100%;padding:%?20?% %?30?%;position:fixed;bottom:0;left:0}.bottom-btn .btn[data-v-65f94743]{font-size:%?30?%;color:#fff;background-image:linear-gradient(90deg,#2b3f7d,#1b2c60);border-radius:%?40?%}.tabs-second .code-box[data-v-65f94743]{margin-top:%?60?%;display:flex;justify-content:center}.tabs-second .code-box .code-logo[data-v-65f94743]{width:%?490?%;height:%?490?%;display:flex}.tabs-second .code-box .code-logo uni-image[data-v-65f94743]{width:100%}.share-popup[data-v-65f94743]{padding-top:%?40?%}.share-popup .share-logo-box[data-v-65f94743]{margin-top:%?70?%;margin-bottom:%?50?%;display:flex;justify-content:space-evenly;align-items:center}.share-popup .share-logo-box .left[data-v-65f94743], .share-popup .share-logo-box .right[data-v-65f94743]{width:30%;display:flex;justify-content:center}.share-popup .share-logo-box .left .share-logo[data-v-65f94743], .share-popup .share-logo-box .right .share-logo[data-v-65f94743]{width:%?100?%;text-align:center}.share-popup .share-logo-box .left .share-logo uni-image[data-v-65f94743], .share-popup .share-logo-box .right .share-logo uni-image[data-v-65f94743]{width:100%}.share-popup .share-logo-box .left .share-logo .share-title[data-v-65f94743], .share-popup .share-logo-box .right .share-logo .share-title[data-v-65f94743]{font-size:%?22?%;color:#666;margin-top:%?20?%}.share-popup .popup-btn .btn[data-v-65f94743]{padding:%?12?% 0;font-size:%?30?%;background-color:#fff}.tip[data-v-65f94743]{font-size:%?32?%;text-align:center;padding:%?30?% 0}.mini-card[data-v-65f94743]{position:relative}.mini-card .title[data-v-65f94743]{position:absolute;left:%?46?%;top:%?120?%;z-index:100;font-size:%?32?%;color:#737373}.mini-card .img[data-v-65f94743]{width:%?750?%}',""]),t.exports=e}}]);