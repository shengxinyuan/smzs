(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-goto_vip"],{"27b5":function(t,i,a){"use strict";a.r(i);var e=a("3dd2"),n=a("78b4");for(var o in n)"default"!==o&&function(t){a.d(i,t,(function(){return n[t]}))}(o);a("610f");var s,r=a("f0c5"),c=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"06bba9be",null,!1,e["a"],s);i["default"]=c.exports},"3dd2":function(t,i,a){"use strict";a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return o})),a.d(i,"a",(function(){return e}));var e={uPopup:a("66ac").default},n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticStyle:{padding:"3% 4%"}},[a("v-uni-view",{staticClass:"inp_it"},[a("v-uni-view",{},[t._v("姓名:")]),a("v-uni-input",{attrs:{type:"text",placeholder:"请输入"},model:{value:t.name,callback:function(i){t.name=i},expression:"name"}})],1),a("v-uni-view",{staticClass:"inp_it"},[a("v-uni-view",{},[t._v("联系方式:")]),a("v-uni-input",{attrs:{type:"text",placeholder:"请输入",maxlength:"11"},model:{value:t.phone,callback:function(i){t.phone=i},expression:"phone"}})],1),a("v-uni-view",{staticClass:"inp_it",staticStyle:{padding:"0 10%"}},[a("v-uni-label",{staticClass:"radio",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.radio_cli(1)}}},[a("v-uni-radio",{attrs:{color:"#293C79",value:"r1",checked:1==t.is_city}}),t._v("区域合伙人")],1),a("v-uni-label",{staticClass:"radio",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.radio_cli(2)}}},[a("v-uni-radio",{attrs:{color:"#293C79",value:"r2",checked:2==t.is_city}}),t._v("城市合伙人")],1)],1),a("v-uni-view",{staticClass:"inp_it",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.show=!0}}},[a("v-uni-view",{},[t._v("所属省份:")]),a("v-uni-input",{attrs:{type:"text",placeholder:"请选择",disabled:!0},model:{value:t.reg_val,callback:function(i){t.reg_val=i},expression:"reg_val"}})],1),t.city_show?a("v-uni-view",{staticClass:"inp_it",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.show_two=!0}}},[a("v-uni-view",{},[t._v("所属城市:")]),a("v-uni-input",{attrs:{type:"text",placeholder:"请选择",disabled:!0},model:{value:t.reg_val_city,callback:function(i){t.reg_val_city=i},expression:"reg_val_city"}})],1):t._e(),t.area_show?a("v-uni-view",{staticClass:"inp_it",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.show_therr=!0}}},[a("v-uni-view",{},[t._v("所属区域:")]),a("v-uni-input",{attrs:{type:"text",placeholder:"请选择",disabled:!0},model:{value:t.reg_val_area,callback:function(i){t.reg_val_area=i},expression:"reg_val_area"}})],1):t._e(),a("v-uni-view",{staticClass:"btn-box"},[a("v-uni-button",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.good.apply(void 0,arguments)}}},[t._v("提交申请")])],1),a("u-popup",{attrs:{mode:"bottom"},model:{value:t.show,callback:function(i){t.show=i},expression:"show"}},[a("v-uni-view",{staticClass:"popup"},[a("v-uni-view",{staticClass:"popup_child"},t._l(t.provicon_data,(function(i){return a("v-uni-view",{staticClass:"popup_child_it",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.ragin(i)}}},[t._v(t._s(i.title))])})),1)],1)],1),a("u-popup",{attrs:{mode:"bottom"},model:{value:t.show_two,callback:function(i){t.show_two=i},expression:"show_two"}},[a("v-uni-view",{staticClass:"popup"},[a("v-uni-view",{staticClass:"popup_child"},t._l(t.city_data,(function(i){return a("v-uni-view",{staticClass:"popup_child_it",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.ragin_s(i)}}},[t._v(t._s(i.title))])})),1)],1)],1),a("u-popup",{attrs:{mode:"bottom"},model:{value:t.show_therr,callback:function(i){t.show_therr=i},expression:"show_therr"}},[a("v-uni-view",{staticClass:"popup"},[a("v-uni-view",{staticClass:"popup_child"},t._l(t.area_data,(function(i){return a("v-uni-view",{staticClass:"popup_child_it",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.ragin_three(i)}}},[t._v(t._s(i.title))])})),1)],1)],1)],1)},o=[]},"610f":function(t,i,a){"use strict";var e=a("f5aa"),n=a.n(e);n.a},"78b4":function(t,i,a){"use strict";a.r(i);var e=a("c9fe"),n=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(i,t,(function(){return e[t]}))}(o);i["default"]=n.a},"7ad3":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.popup[data-v-06bba9be]{padding:%?40?%;text-align:center}.popup .popup_child[data-v-06bba9be]{height:%?400?%}.popup .popup_child .popup_child_it[data-v-06bba9be]{height:%?70?%;line-height:%?70?%;overflow-y:scroll;font-size:%?34?%}.inp_it[data-v-06bba9be]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:%?56?%;margin-bottom:%?50?%}.inp_it uni-radio[data-v-06bba9be]{-webkit-transform:scale(.8);transform:scale(.8)}.inp_it uni-view[data-v-06bba9be]{width:20%;text-align:center;font-size:%?30?%}.inp_it uni-input[data-v-06bba9be]{height:%?56?%;padding-left:%?20?%;margin-left:2%;width:78%;font-size:%?28?%;border:%?2?% solid #eee}.btn-box[data-v-06bba9be]{padding:0 %?30?%;margin-top:%?100?%}.btn-box uni-button[data-v-06bba9be]{font-size:%?30?%;background:#293c79;color:#fff;border-radius:%?40?%}',""]),t.exports=i},c9fe:function(t,i,a){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{show:!1,show_two:!1,show_therr:!1,reg_val:"",reg_val_city:"",reg_val_area:"",phone:"",name:"",is_city:1,provicon_data:"",city_data:"",area_data:"",rogin:"",city_show:!1,area_show:!1,area_id:0}},onLoad:function(){this.province()},methods:{province:function(){var i=this;this.$api.get("partner",{id:this.rogin}).then((function(a){t("log",a," at pages/my/goto_vip.vue:101"),1==a.status&&(i.provicon_data=a.data)}))},ragin:function(i){var a=this;this.show=!1,this.reg_val=i.title,this.$api.get("partner",{id:i.id}).then((function(i){t("log",i," at pages/my/goto_vip.vue:111"),1==i.status&&(a.city_data=i.data,a.city_show=!0)}))},ragin_s:function(i){var a=this;this.show_two=!1,this.reg_val_city=i.title,1==this.is_city?this.$api.get("partner",{id:i.id}).then((function(i){t("log",i," at pages/my/goto_vip.vue:127"),1==i.status&&(a.area_data=i.data,a.area_show=!0)})):this.area_id=i.id},ragin_three:function(t){this.show_therr=!1,this.reg_val_area=t.title,this.area_id=t.id},good:function(){var t=this,i={real_name:this.name,mobile:this.phone,area_id:this.area_id,is_city:this.is_city};this.$api.post("partner",i).then((function(i){t.com.msg(i.message)}))},radio_cli:function(t){this.is_city=t,this.reg_val="",this.reg_val_city="",this.reg_val_area="",this.area_id="",this.city_show=!1,2==t&&(this.area_show=!1)}}};i.default=a}).call(this,a("0de9")["log"])},f5aa:function(t,i,a){var e=a("7ad3");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("c195f952",e,!0,{sourceMap:!1,shadowMode:!1})}}]);