(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"01a3":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"toast"},[n("v-uni-view",{staticClass:"toast_it"},[n("v-uni-view",{staticClass:"toast_it_title"},[t._v("服务协议和隐私政策")]),n("v-uni-view",{staticClass:"toast_it_cont"},[t._v('请你务必审慎阅读，充分理解"服务协议"和"隐私政策"各条款，包括但不限于：为了向你提供即时通讯、内容分享等服务，我们需要搜集你的设备信息、操作日志等个人信息。你可以在"设置"中查看、变更、删除个人信息并管理你的授权。你可阅读'),n("v-uni-text",{staticStyle:{color:"#2B85E4"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fuw(1)}}},[t._v("《服务协议》")]),t._v("和"),n("v-uni-text",{staticStyle:{color:"#2B85E4"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fuw(2)}}},[t._v("《隐私政策》")]),t._v('了解详细信息。如你同意、请点击"同意"开始接受我们的服务。')],1),n("v-uni-view",{staticClass:"toast_but"},[n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.no_app.apply(void 0,arguments)}}},[t._v("暂不使用")]),n("v-uni-view",{staticStyle:{color:"#2B85E4"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.yes_xy.apply(void 0,arguments)}}},[t._v("同意")])],1)],1)],1)],1)},o=[]},"02ec":function(t,e,n){"use strict";var i;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{Inv:0,page_show:!1,phone:"",pass:"",note:"",code:"",code_tit:"获取验证码",time:60,code_show:!0,cli_type:!0,type:!1,cid:"",info:{nickName:"微信用户",avatarUrl:"https://zuanshi.semoh.cn/applet_static/avatar.png"}}},onLoad:function(){var t=this;i=this;var e=uni.getStorageSync("clientid");e&&(this.cid=e,console.log(e)),uni.getStorageSync("type"),this.page_show=!1,this.$api.get("ios").then((function(e){0==e.data.type?t.type=!0:t.type=!1}))},methods:{getInfo:function(){uni.getUserProfile({desc:"用于完善用户信息",success:function(t){console.log(t);var e={rawData:t.rawData,signature:t.signature,encryptedData:t.encryptedData,iv:t.iv};uni.login({provider:"weixin",success:function(t){console.log(t),e.code=t.code,console.log(e),i.$api.post("applet",e).then((function(t){if(console.log(t),i.cli_type=!1,1==t.status){if(console.log("openid",t.data.openid),uni.setStorageSync("openid",t.data.openid),0==t.data.member_info.mobile)return void i.com.navto("./bangding");var e=(new Date).getTime(),n=1e3*t.data.member_info.vip_time;n<=e?uni.setStorageSync("viptype",!1):uni.setStorageSync("viptype",!0),uni.setStorageSync("token",t.data.token),uni.setStorageSync("member_info",t.data.member_info),uni.setStorageSync("member_info_img",t.data.member_info.avatar),uni.setStorageSync("coupon",0),uni.showToast({title:"请稍后...",icon:"loading",duration:2e3});var a=2,o=setInterval((function(){0==a?(clearInterval(o),i.com.rel("../index/index")):a-=1}),1e3)}else i.cli_type=!0,i.com.msg(t.message)}))}})},fail:function(t){console.log(t)}})},go:function(){uni.redirectTo({url:"../index/index"})},qieh:function(t){this.Inv=t,0==t?this.pass="":this.note=""},yesag:function(){uni.setStorageSync("type",1),this.page_show=!1},agreement:function(t){1==t?this.com.navto("./fuwu"):this.com.navto("./yinsi")},acquireCode:function(){var t=this;if(""!=this.phone&&/^1[3456789]\d{9}$/.test(this.phone)){this.time=60,this.code_show=!1;var e=setInterval((function(){0==t.time?(t.code_tit="再次获取",t.code_show=!0,clearInterval(e)):t.time-=1}),1e3);this.$api.get("messagecode",{mobile:this.phone}).then((function(t){console.log(t)}))}else this.com.msg("请检查手机号")},app_login:function(){this.cli_type&&this.login_function()},login_function:function(){var t=this;this.cli_type=!1,this.$api.post("login",{mobile:this.phone,password:this.pass,note:this.note,cid:this.cid}).then((function(e){if(console.log(e),t.cli_type=!1,1==e.status){var n=(new Date).getTime(),i=1e3*e.data.member_info.vip_time;i<=n?uni.setStorageSync("viptype",!1):uni.setStorageSync("viptype",!0),uni.setStorageSync("token",e.data.token),uni.setStorageSync("member_info",e.data.member_info),uni.setStorageSync("member_info_img",e.data.member_info.avatar),uni.setStorageSync("coupon",0),uni.showToast({title:"请稍后...",icon:"loading",duration:2e3});var a=2,o=setInterval((function(){0==a?(clearInterval(o),t.com.rel("../index/index")):a-=1}),1e3)}else t.cli_type=!0,t.com.msg(e.message)}))},go_register:function(){uni.navigateTo({url:"./register"})},go_forget:function(t){uni.navigateTo({url:"./forget?type="+t})},weixin:function(){var t=this;uni.login({provider:"weixin",success:function(e){uni.setStorageSync("openid",e.authResult.openid),t.$api.post("getWxUserInfo",{access_token:e.authResult.access_token,openid:e.authResult.openid}).then((function(e){if(console.log(e),1==e.status)if(0==e.data.login_type)t.com.navto("./bangding");else{var n=(new Date).getTime(),i=1e3*e.data.member_info.vip_time;i<=n?uni.setStorageSync("viptype",!1):uni.setStorageSync("viptype",!0),uni.setStorageSync("token",e.data.token),uni.setStorageSync("member_info",e.data.member_info),uni.setStorageSync("member_info_img",e.data.member_info.avatar),uni.setStorageSync("coupon",0),uni.showToast({title:"请稍后...",icon:"loading",duration:2e3});var a=2,o=setInterval((function(){0==a?(clearInterval(o),uni.reLaunch({url:"../index/index"})):a-=1}),1e3)}}))}})}}};e.default=a},"06fd":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.toast[data-v-7140d072]{position:fixed;left:0;top:0;display:flex;align-items:center;justify-content:center;width:100%;height:100vh;background-color:rgba(0,0,0,.5)}.toast .toast_it[data-v-7140d072]{background-color:#fff;margin:0 10%;border-radius:%?20?%;line-height:%?80?%;padding:%?20?%}.toast .toast_it .toast_it_title[data-v-7140d072]{width:100%;text-align:center;font-size:%?32?%}.toast .toast_it .toast_it_cont[data-v-7140d072]{margin:%?20?% 0;width:100%;padding:%?0?% %?40?%;line-height:%?40?%;font-size:%?28?%}.toast .toast_it .toast_but[data-v-7140d072]{width:100%;display:flex;justify-content:space-between;font-size:%?32?%;line-height:%?60?%;border-top:%?2?% solid #f6f6f6;padding-top:%?20?%}.toast .toast_it .toast_but uni-view[data-v-7140d072]{width:50%;text-align:center}.toast .toast_it .toast_but uni-view[data-v-7140d072]:nth-child(1){border-right:solid %?2?% #f6f6f6}',""]),t.exports=e},"127f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},methods:{no_app:function(){},yes_xy:function(){this.$emit("yesag")},fuw:function(t){this.$emit("agreement",t)}}};e.default=i},"28a9":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.register[data-v-5ae2f5ca]{background-color:#f6f6f6;height:100vh;display:flex;flex-wrap:wrap;padding:%?50?%}.register .head[data-v-5ae2f5ca]{width:70%;margin:%?50?% 0;display:flex;align-items:center;justify-content:space-between}.register .head .title[data-v-5ae2f5ca]{font-size:%?34?%;color:#333}.register .head .choose[data-v-5ae2f5ca]{font-size:%?36?%;font-weight:bolder;color:#293c79}.register .write[data-v-5ae2f5ca]{width:100%;display:flex;justify-content:space-between;height:%?100?%;align-items:center;border-bottom:%?1?% solid #dedede;margin-top:%?20?%}.register .write uni-input[data-v-5ae2f5ca]{font-size:%?28?%}.register .write .give[data-v-5ae2f5ca]{line-height:%?50?%;padding:%?0?% %?20?%;border:%?2?% solid #293c79;color:#293c79;border-radius:%?35?%;font-size:%?24?%}.register .other[data-v-5ae2f5ca]{width:100%;height:%?100?%;line-height:%?100?%;display:flex;justify-content:space-between;font-size:%?26?%;color:#293c79}.register .login_s[data-v-5ae2f5ca]{width:100%;height:%?72?%;text-align:center;line-height:%?72?%;border-radius:%?50?%;background-color:#1e3066;color:#fff;margin-top:%?200?%}.register .agreement[data-v-5ae2f5ca]{width:100%;height:%?90?%;line-height:%?90?%;font-size:%?26?%;color:#999;text-align:center}.register .agreement uni-text[data-v-5ae2f5ca]{color:#1e3066}.register .three_s[data-v-5ae2f5ca]{width:100%;display:flex;flex-wrap:wrap;margin-top:%?100?%}.register .three_s .titles[data-v-5ae2f5ca]{color:#b3b3b3;margin:0 auto}.register .three_s .weixin[data-v-5ae2f5ca]{width:100%;margin-top:%?50?%}.register .three_s .weixin uni-view[data-v-5ae2f5ca]{width:%?90?%;display:flex;flex-wrap:wrap;margin:0 auto}.register .three_s .weixin uni-view uni-text[data-v-5ae2f5ca]{width:100%;text-align:center;margin-top:%?10?%;color:#aaa}',""]),t.exports=e},"591c":function(t,e,n){"use strict";n.r(e);var i=n("02ec"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"5bb6":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uIcon:n("b4b8").default,zsToastHear:n("c973").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"register"},[n("v-uni-view",{staticStyle:{width:"100%"}},[n("v-uni-view",{staticClass:"u-font-16 u-m-t-50",staticStyle:{"text-align":"right",color:"#293C79"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go.apply(void 0,arguments)}}},[t._v("逛一逛")]),n("v-uni-view",{staticClass:"head"},[n("v-uni-view",{class:["title",0==t.Inv?"choose":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.qieh(0)}}},[t._v("验证码登录")]),n("v-uni-view",{class:["title",1==t.Inv?"choose":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.qieh(1)}}},[t._v("账号密码登录")])],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0==t.Inv,expression:"Inv == 0"}],staticClass:"choose_ka"},[n("v-uni-view",{staticClass:"write"},[n("v-uni-input",{staticStyle:{width:"100%"},attrs:{type:"text",placeholder:"请输入手机号",maxlength:"11"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),n("v-uni-view",{staticClass:"write"},[n("v-uni-input",{attrs:{type:"text",placeholder:"请输入验证码",maxlength:"6"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.app_login.apply(void 0,arguments)}},model:{value:t.note,callback:function(e){t.note=e},expression:"note"}}),t.code_show?n("v-uni-text",{staticClass:"give",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.acquireCode.apply(void 0,arguments)}}},[t._v(t._s(t.code_tit))]):n("v-uni-text",{staticStyle:{"margin-right":"20rpx"}},[t._v(t._s(t.time)+"s")])],1),n("v-uni-view",{staticClass:"other"},[n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go_register.apply(void 0,arguments)}}},[t._v("注册")])],1)],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.Inv,expression:"Inv == 1"}],staticClass:"choose_ka"},[n("v-uni-view",{staticClass:"write"},[n("v-uni-input",{attrs:{type:"text",placeholder:"请输入账号",maxlength:"11"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),n("v-uni-view",{staticClass:"write"},[n("v-uni-input",{attrs:{type:"password",placeholder:"请输入密码"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.app_login.apply(void 0,arguments)}},model:{value:t.pass,callback:function(e){t.pass=e},expression:"pass"}})],1),n("v-uni-view",{staticClass:"other"},[n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go_register.apply(void 0,arguments)}}},[t._v("注册")]),n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go_forget(1)}}},[t._v("忘记密码？")])],1)],1),n("v-uni-view",{staticClass:"login_s",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.app_login.apply(void 0,arguments)}}},[t._v("登录")]),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.type,expression:"type"}],staticClass:"three_s"},[n("v-uni-view",{staticClass:"titles"},[t._v("—————— 其他方式登录 ——————")]),n("v-uni-view",{staticClass:"weixin",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.weixin.apply(void 0,arguments)}}},[n("v-uni-view",[n("u-icon",{attrs:{name:"weixin-circle-fill",color:"#08BA06",size:"90"}}),n("v-uni-text",[t._v("微信")])],1)],1)],1)],1),t.page_show?n("zs-toast-hear",{on:{yesag:function(e){arguments[0]=e=t.$handleEvent(e),t.yesag.apply(void 0,arguments)},agreement:function(e){arguments[0]=e=t.$handleEvent(e),t.agreement.apply(void 0,arguments)}}}):t._e()],1)],1)},o=[]},"5e0c":function(t,e,n){"use strict";n.r(e);var i=n("5bb6"),a=n("591c");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("9342"),n("d9f9");var s,c=n("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"5ae2f5ca",null,!1,i["a"],s);e["default"]=r.exports},"655e":function(t,e,n){var i=n("28a9");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("4d468d7c",i,!0,{sourceMap:!1,shadowMode:!1})},"7cc1":function(t,e,n){"use strict";n.r(e);var i=n("127f"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},9342:function(t,e,n){"use strict";var i=n("b5a7"),a=n.n(i);a.a},ae0d:function(t,e,n){var i=n("06fd");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("ac32e546",i,!0,{sourceMap:!1,shadowMode:!1})},b5a7:function(t,e,n){var i=n("fa18");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("51ec96fb",i,!0,{sourceMap:!1,shadowMode:!1})},c973:function(t,e,n){"use strict";n.r(e);var i=n("01a3"),a=n("7cc1");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("ecbc");var s,c=n("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"7140d072",null,!1,i["a"],s);e["default"]=r.exports},d9f9:function(t,e,n){"use strict";var i=n("655e"),a=n.n(i);a.a},ecbc:function(t,e,n){"use strict";var i=n("ae0d"),a=n.n(i);a.a},fa18:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.top_tip[data-v-5ae2f5ca]{font-size:%?40?%;margin-top:%?75?%}.login_btn[data-v-5ae2f5ca]{color:#fff;background-color:#293c79;font-size:%?32?%;width:%?690?%;height:%?80?%;border-radius:%?40?%;margin-top:%?160?%}.wx_btn[data-v-5ae2f5ca]{width:%?690?%;height:%?80?%;padding:0;margin:0}.wx_btn[data-v-5ae2f5ca]::after{border:none}',""]),t.exports=e}}]);