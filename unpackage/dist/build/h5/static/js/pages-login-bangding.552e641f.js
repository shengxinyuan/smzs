(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-bangding"],{"0637":function(e,t,n){var i=n("1b5f");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("672fb3f4",i,!0,{sourceMap:!1,shadowMode:!1})},"1b5f":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.login_s[data-v-1e581abc]{width:90%;margin-left:5%;height:%?80?%;text-align:center;line-height:%?80?%;border-radius:%?50?%;background-color:#1e3066;color:#fff;margin-top:%?100?%}.login[data-v-1e581abc]{width:100%;height:100vh;background-color:#f6f6f6;display:flex;flex-wrap:wrap;padding:%?30?% 0}.login .box[data-v-1e581abc]{width:100%}.login .box .message[data-v-1e581abc]{width:100%;background-color:#fff;padding:0 %?30?%;display:flex;height:%?120?%;align-items:center;justify-content:space-between;border-bottom:%?1?% solid #f6f6f6}.login .box .message .tack[data-v-1e581abc]{padding:%?20?%;background-color:#1e3066;color:#fff;border-radius:%?40?%}',""]),e.exports=t},"9ca6":function(e,t,n){"use strict";n.r(t);var i=n("fdd6"),a=n("b745");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("c03f");var s,c=n("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"1e581abc",null,!1,i["a"],s);t["default"]=r.exports},b745:function(e,t,n){"use strict";n.r(t);var i=n("e0ea"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},c03f:function(e,t,n){"use strict";var i=n("0637"),a=n.n(i);a.a},e0ea:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{pass_type:"password",phone:"",pass:"",yzm_show:!0,get_code_tit:"获取验证码",bn:"",codes:"",note:"",time:60,noclick:!0,but_show:!0}},methods:{getcode:function(){var e=this;this.time=60,""!=this.phone&&/^1[3456789]\d{9}$/.test(this.phone)?(this.yzm_show=!1,this.$api.get("messagecode",{mobile:this.phone}).then((function(t){if(console.log(t),1==t.status){e.note=t.data.note;var n=setInterval((function(){e.time--,0==e.time&&(clearInterval(n),e.hq_note="重新获取",e.yzm_show=!0)}),1e3)}else e.com.msg(t.message)}))):this.com.msg("请检查手机号")},go_ind:function(){var e=""==this.bn?0:this.bn;if(""==this.phone||""==this.codes)this.com.msg("请填写手机号或验证码");else if(this.note!=this.codes)this.com.msg("验证码错误");else if(this.but_show){var t={mobile:this.phone,note:this.codes,openid:uni.getStorageSync("openid"),bn:e};console.log(t)}},next:function(e){var t=this;this.but_show=!1;var n=(new Date).getTime(),i=1e3*e.data.member_info.vip_time;i<=n?uni.setStorageSync("viptype",!1):uni.setStorageSync("viptype",!0),uni.setStorageSync("token",e.data.token),uni.setStorageSync("member_info",e.data.member_info),uni.setStorageSync("member_info_img",e.data.member_info.avatar),uni.setStorageSync("coupon",0),uni.showToast({title:"请稍后...",icon:"loading",duration:2e3});var a=2,o=setInterval((function(){0==a?(clearInterval(o),t.com.rel("../index/index")):a-=1}),1e3)}}};t.default=i},fdd6:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"login"},[n("v-uni-view",{staticClass:"box"},[n("v-uni-view",{staticClass:"message"},[n("v-uni-input",{staticStyle:{flex:"1"},attrs:{type:"text",value:"",placeholder:"手机号码",maxlength:"11"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),n("v-uni-view",{staticClass:"message"},[n("v-uni-input",{staticStyle:{flex:"1"},attrs:{type:"text",placeholder:"验证码",maxlength:"6"},model:{value:e.codes,callback:function(t){e.codes=t},expression:"codes"}}),e.yzm_show?n("v-uni-view",{staticClass:"tack",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getcode.apply(void 0,arguments)}}},[e._v(e._s(e.get_code_tit))]):n("v-uni-view",{staticClass:"but"},[e._v(e._s(e.time)+"s")])],1),n("v-uni-view",{staticClass:"message"},[n("v-uni-view",{staticClass:"left_s",staticStyle:{flex:"1"}},[n("v-uni-input",{attrs:{type:"text",placeholder:"请输入邀请码"},model:{value:e.bn,callback:function(t){e.bn=t},expression:"bn"}})],1)],1),n("v-uni-view",{staticClass:"login_s",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.go_ind.apply(void 0,arguments)}}},[e._v("登录")])],1)],1)},o=[]}}]);