(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-logistr"],{"148b":function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uSteps:i("4679").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticStyle:{"background-color":"#fff","font-size":"36rpx","font-weight":"bold",padding:"2% 0"}},[t._v("待签收")]),i("v-uni-view",{staticStyle:{margin:"20rpx 0","font-weight":"bold"}},[t._v("顺丰快递："+t._s(t.numList.ship_bn))]),i("v-uni-view",{staticClass:"p1"},[i("u-steps",{attrs:{list:t.numList.logistic_detail,current:t.numList.logistic_detail.length,activeColor:"#000",direction:"column"}})],1)],1)},o=[]},"16b0":function(t,e,i){var n=i("6c2f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("be218e9c",n,!0,{sourceMap:!1,shadowMode:!1})},"184c":function(t,e,i){"use strict";i.r(e);var n=i("5aea"),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},"24e1":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-steps[data-v-27657bf9]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row\n}.u-steps .u-steps__item[data-v-27657bf9]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;position:relative;min-width:%?100?%;font-size:%?26?%;color:#8799a3;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-steps .u-steps__item--row[data-v-27657bf9]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\nflex-direction:column}.u-steps .u-steps__item--row .u-steps__item__line[data-v-27657bf9]{position:absolute;z-index:0;left:75%;width:50%}.u-steps .u-steps__item--row .u-steps__item__line--dot[data-v-27657bf9]{top:calc(%?20?% / 2)}.u-steps .u-steps__item--row .u-steps__item__line--number[data-v-27657bf9]{top:calc(%?44?% / 2)}.u-steps .u-steps__item--column[data-v-27657bf9]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\nflex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;min-height:%?120?%}.u-steps .u-steps__item--column .u-steps__item__line[data-v-27657bf9]{position:absolute;z-index:0;height:50%;top:75%}.u-steps .u-steps__item--column .u-steps__item__line--dot[data-v-27657bf9]{left:calc(%?20?% / 2)}.u-steps .u-steps__item--column .u-steps__item__line--number[data-v-27657bf9]{left:calc(%?44?% / 2)}.u-steps .u-steps__item__num[data-v-27657bf9]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?44?%;height:%?44?%;border:1px solid #8799a3;border-radius:50%;overflow:hidden}.u-steps .u-steps__item__dot[data-v-27657bf9]{width:%?20?%;height:%?20?%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\nborder-radius:50%}.u-steps .u-steps__item__text--row[data-v-27657bf9]{margin-top:%?14?%}.u-steps .u-steps__item__text--column[data-v-27657bf9]{margin-left:%?14?%}',""]),t.exports=e},"362e":function(t,e,i){"use strict";i.r(e);var n=i("148b"),r=i("3cbb");for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);i("6900"),i("3b9e");var a,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"2991915a",null,!1,n["a"],a);e["default"]=c.exports},"3b9e":function(t,e,i){"use strict";var n=i("998b"),r=i.n(n);r.a},"3c64":function(t,e,i){var n=i("8273");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("2467008d",n,!0,{sourceMap:!1,shadowMode:!1})},"3cbb":function(t,e,i){"use strict";i.r(e);var n=i("c1b2"),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},4679:function(t,e,i){"use strict";i.r(e);var n=i("62c9"),r=i("184c");for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);i("bcfe");var a,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"27657bf9",null,!1,n["a"],a);e["default"]=c.exports},"5aea":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-steps",props:{mode:{type:String,default:"dot"},list:{type:Array,default:function(){return[]}},type:{type:String,default:"primary"},current:{type:[Number,String],default:0},activeColor:{type:String,default:"#2979ff"},unActiveColor:{type:String,default:"#909399"},icon:{type:String,default:"checkmark"},direction:{type:String,default:"row"}},data:function(){return{}}};e.default=n},"62c9":function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uIcon:i("c039").default,uLine:i("a692").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},[i("v-uni-view",{staticClass:"u-steps",style:{flexDirection:t.direction}},t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-steps__item",class:["u-steps__item--"+t.direction]},["number"==t.mode?i("v-uni-view",{staticClass:"u-steps__item__num",style:{backgroundColor:t.current<n?"transparent":t.activeColor,borderColor:t.current<n?t.unActiveColor:t.activeColor}},[t.current<n?i("v-uni-text",{style:{color:t.current<n?t.unActiveColor:t.activeColor}},[t._v(t._s(n+1))]):i("u-icon",{attrs:{size:"22",color:"#ffffff",name:t.icon}})],1):t._e(),"dot"==t.mode?i("v-uni-view",{staticClass:"u-steps__item__dot",style:{backgroundColor:n<=t.current?t.activeColor:t.unActiveColor}}):t._e(),i("v-uni-text",{staticClass:"u-line-1",class:["u-steps__item__text--"+t.direction],staticStyle:{width:"100%","white-space":"normal","margin-top":"10rpx","text-align":"left"},style:{color:n<=t.current?t.activeColor:t.unActiveColor}},[t._v(t._s(e.status)),i("v-uni-view",{staticStyle:{color:"#999"}},[t._v(t._s(e.time))])],1),n<t.list.length-1?i("v-uni-view",{staticClass:"u-steps__item__line",class:["u-steps__item__line--"+t.mode]},[i("u-line",{attrs:{direction:t.direction,length:"100%","hair-line":!1,color:t.unActiveColor}})],1):t._e()],1)})),1)],1)},o=[]},"63fb":function(t,e,i){"use strict";var n=i("16b0"),r=i.n(n);r.a},6900:function(t,e,i){"use strict";var n=i("3c64"),r=i.n(n);r.a},"6c2f":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-line[data-v-c7c48cc8]{vertical-align:middle}',""]),t.exports=e},"6f7a":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-2991915a]{padding:3%}.content .shop_list[data-v-2991915a]{width:100%;height:%?250?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:%?1?% solid #f6f6f6;background-color:#fff;padding:%?10?% %?20?%;border-radius:%?10?%;margin:%?20?% 0}.content .shop_list uni-image[data-v-2991915a]{width:%?200?%;height:%?200?%}.content .shop_list .list_right[data-v-2991915a]{display:-webkit-box;display:-webkit-flex;display:flex;width:%?420?%;height:%?200?%;margin-left:%?20?%;-webkit-flex-wrap:wrap;flex-wrap:wrap}.content .shop_list .list_right .title[data-v-2991915a]{width:100%}.content .shop_list .list_right .title uni-text[data-v-2991915a]{color:#c7ab6e}.content .shop_list .list_right .price[data-v-2991915a]{width:100%;color:#ba1a30}.content .shop_list .list_right .price uni-text[data-v-2991915a]{color:#999;text-decoration:line-through;margin-left:%?20?%}.content .shop_list .list_right .Specifications[data-v-2991915a]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;color:#999}.content .shop_list .list_right .Specifications .num[data-v-2991915a]{color:#999}.content .p1[data-v-2991915a]{background-color:#fff;padding:%?30?% %?30?%;border-radius:%?12?%}.content .p1 .item[data-v-2991915a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?30?%}.content .p1 .item uni-image[data-v-2991915a]{width:%?80?%;height:%?80?%;margin-right:%?10?%}.content .box[data-v-2991915a]{background-color:#fff;margin-top:%?30?%}.content .box .address[data-v-2991915a]{margin-left:%?18?%;color:#333}.content .box .text[data-v-2991915a]{color:#999}.content .box .p2[data-v-2991915a]{padding-right:%?30?%}',""]),t.exports=e},"7dfa":function(t,e,i){"use strict";i.r(e);var n=i("fed7"),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},8273:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-2991915a]{background-color:#f6f6f6}body.?%PAGE?%[data-v-2991915a]{background-color:#f6f6f6}",""]),t.exports=e},"998b":function(t,e,i){var n=i("6f7a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("270c88c8",n,!0,{sourceMap:!1,shadowMode:!1})},a1c3:function(t,e,i){var n=i("24e1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("87d59910",n,!0,{sourceMap:!1,shadowMode:!1})},a692:function(t,e,i){"use strict";i.r(e);var n=i("bf79"),r=i("7dfa");for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);i("63fb");var a,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"c7c48cc8",null,!1,n["a"],a);e["default"]=c.exports},bcfe:function(t,e,i){"use strict";var n=i("a1c3"),r=i.n(n);r.a},bf79:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-line",style:[t.lineStyle]})},o=[]},c1b2:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{options:[],page_cont:"",wl_cont:"",numList:[],mailNo:""}},onLoad:function(e){t("log",e.cont," at pages/my/logistr.vue:37"),this.page_cont=e.cont,this.page_type()},onShow:function(){},methods:{page_type:function(){var e=this;this.$api.post("logistics",{bn_id:this.page_cont}).then((function(i){t("log",i.data," at pages/my/logistr.vue:48"),e.numList=i.data}))}}};e.default=i}).call(this,i("0de9")["log"])},fed7:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-line",props:{color:{type:String,default:"#e4e7ed"},length:{type:String,default:"100%"},direction:{type:String,default:"row"},hairLine:{type:Boolean,default:!0},margin:{type:String,default:"0"},borderStyle:{type:String,default:"solid"}},computed:{lineStyle:function(){var t={};return t.margin=this.margin,"row"==this.direction?(t.borderBottomWidth="1px",t.borderBottomStyle=this.borderStyle,t.width=this.$u.addUnit(this.length),this.hairLine&&(t.transform="scaleY(0.5)")):(t.borderLeftWidth="1px",t.borderLeftStyle=this.borderStyle,t.height=this.$u.addUnit(this.length),this.hairLine&&(t.transform="scaleX(0.5)")),t.borderColor=this.color,t}}};e.default=n}}]);