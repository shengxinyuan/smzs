(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set-shop-add-bank-card"],{"0d4b":function(t,e,a){"use strict";var i=a("3f69"),n=a.n(i);n.a},"175c":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{valueId:"",placeholder01:"请输入银行卡账号",valueName:"",placeholder02:"请输入您的真实姓名",valueTelephone:"",placeholder03:"请输入绑定手机号码",valueCode:"",placeholder04:"请输入验证码",timetit:"获取验证码",time:60,setInt:"",code_show:!0,note:"",xg_id:""}},onUnload:function(){clearInterval(this.time)},onLoad:function(t){console.log(t),t.datas&&(this.xg_id=JSON.parse(t.datas),this.valueId=this.xg_id.account_number,this.valueName=this.xg_id.name,this.valueTelephone=this.xg_id.mobile)},methods:{skipSetWithdraws:function(){var t=this;if(""==this.valueId||""==this.valueName||""==this.valueTelephone||""==this.valueCode)return this.com.msg("请确认信息填写完整"),!1;if(this.note!=this.valueCode)return this.com.msg("验证码错误"),!1;var e={type:1,account_number:this.valueId,name:this.valueName,mobile:this.valueTelephone,id:void 0==this.xg_id?"":this.xg_id};this.$api.post("information",e).then((function(e){console.log(e),1==e.status&&(""!=t.xg_id||void 0!==t.xg_id?t.com.redto("../set-shop/set-withdraw?tit=修改成功"):t.com.redto("../set-shop/set-withdraw?tit=提交成功"))}))},go_note:function(){var t=this;""!=this.valueTelephone&&/^1[3456789]\d{9}$/.test(this.valueTelephone)?(this.time=60,this.code_show=!1,this.setInt=setInterval((function(){0==t.time?(t.timetit="再次获取",t.code_show=!0,clearInterval(t.setInt)):t.time-=1}),1e3),this.$api.get("messagecode",{mobile:this.valueTelephone}).then((function(e){console.log(e),1==e.status&&(t.note=e.data.note)}))):this.com.msg("请检查手机号")}}};e.default=i},"3f69":function(t,e,a){var i=a("9689");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("5b322708",i,!0,{sourceMap:!1,shadowMode:!1})},"76a8":function(t,e,a){"use strict";a.r(e);var i=a("175c"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},9689:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.zl-box .add-box[data-v-4f9eafc4]{margin-bottom:%?40?%}.zl-box .add-box .add-min-box[data-v-4f9eafc4]{height:%?110?%;display:flex;align-items:center;border-top:solid %?2?% #eee;position:relative}.zl-box .add-box .add-min-box .title[data-v-4f9eafc4]{width:35%;font-size:%?28?%;padding-left:%?30?%}.zl-box .add-box .add-min-box .input[data-v-4f9eafc4]{font-size:%?26?%}.zl-box .add-box .add-min-box .get-code[data-v-4f9eafc4]{width:%?174?%;height:%?52?%;border:solid %?2?% #2b3f7d;font-size:%?26?%;color:#2b3f7d;display:flex;justify-content:center;align-items:center;border-radius:%?26?%;position:absolute;right:%?30?%}.zl-box .bottom-btn[data-v-4f9eafc4]{width:100%;padding:0 %?30?%;margin-top:%?100?%}.zl-box .bottom-btn .btn[data-v-4f9eafc4]{font-size:%?30?%;color:#fff;background-image:linear-gradient(90deg,#2b3f7d,#1b2c60);border-radius:%?40?%}',""]),t.exports=e},a5bc:function(t,e,a){"use strict";a.r(e);var i=a("e2cd"),n=a("76a8");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("0d4b");var s,l=a("f0c5"),d=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"4f9eafc4",null,!1,i["a"],s);e["default"]=d.exports},e2cd:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"zl-box"},[a("v-uni-view",{staticClass:"add-box"},[a("v-uni-view",{staticClass:"add-min-box"},[a("v-uni-view",{staticClass:"title"},[t._v("银行卡账号：")]),a("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:t.placeholder01},model:{value:t.valueId,callback:function(e){t.valueId=e},expression:"valueId"}})],1),a("v-uni-view",{staticClass:"add-min-box"},[a("v-uni-view",{staticClass:"title"},[t._v("银行卡姓名：")]),a("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:t.placeholder02},model:{value:t.valueName,callback:function(e){t.valueName=e},expression:"valueName"}})],1),a("v-uni-view",{staticClass:"add-min-box"},[a("v-uni-view",{staticClass:"title"},[t._v("绑定手机号码：")]),a("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:t.placeholder03,maxlength:"11"},model:{value:t.valueTelephone,callback:function(e){t.valueTelephone=e},expression:"valueTelephone"}})],1),a("v-uni-view",{staticClass:"add-min-box"},[a("v-uni-view",{staticClass:"title"},[t._v("请输入验证码：")]),a("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:t.placeholder04},model:{value:t.valueCode,callback:function(e){t.valueCode=e},expression:"valueCode"}}),t.code_show?a("v-uni-view",{staticClass:"get-code",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go_note.apply(void 0,arguments)}}},[t._v(t._s(t.timetit))]):a("v-uni-view",{staticClass:"get-code"},[t._v(t._s(t.time))])],1)],1),a("v-uni-view",{staticClass:"bottom-btn"},[a("v-uni-button",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.skipSetWithdraws.apply(void 0,arguments)}}},[t._v("保存")])],1)],1)},o=[]}}]);