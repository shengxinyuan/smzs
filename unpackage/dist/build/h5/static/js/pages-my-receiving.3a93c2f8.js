(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-receiving"],{"01eb":function(t,n,e){"use strict";var i=e("d4b2"),o=e.n(i);o.a},"20d8":function(t,n,e){var i=e("f3b1");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("9a5ff38c",i,!0,{sourceMap:!1,shadowMode:!1})},"29b9":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content .conent_box[data-v-b89110a2]{width:100%}.content .conent_box .address_box[data-v-b89110a2]{padding:0 %?20?%;margin-top:%?4?%;background-color:#fff}.content .conent_box .address_box .address_box_child[data-v-b89110a2]{display:flex;justify-content:space-between}.content .conent_box .address_box .address_box_child .child_l[data-v-b89110a2]{width:70%;line-height:%?56?%;padding:%?30?% 0;color:#999}.content .conent_box .address_box .address_box_child .child_l uni-view[data-v-b89110a2]:nth-child(1){font-size:%?28?%}.content .conent_box .address_box .address_box_child .child_l .text[data-v-b89110a2]{font-size:%?26?%}.content .conent_box .address_box .address_box_child .child_l .more[data-v-b89110a2]{background-color:#007aff;line-height:%?40?%;color:#fff;font-size:%?24?%;display:inline-block;padding:0 %?20?%;border-radius:%?50?%;margin-left:%?20?%}.content .conent_box .address_box .address_box_child .child_l .more1[data-v-b89110a2]{background-color:#007aff;line-height:%?40?%;color:#fff;font-size:%?24?%;display:inline-block;padding:0 %?20?%;border-radius:%?50?%;margin-left:%?20?%}.content .conent_box .address_box .item[data-v-b89110a2]{margin-top:%?40?%}.content .conent_box .address_box .item .btns[data-v-b89110a2]{color:#999;text-align:center;border-left:%?2?% solid #eee;padding-right:%?20?%}.content .conent_box .address_box .item .btns uni-text[data-v-b89110a2]{display:inline-block;width:%?110?%;height:%?48?%;line-height:%?45?%;text-align:center;font-size:%?24?%}.content .btn[data-v-b89110a2]{font-size:%?30?%;position:fixed;left:%?30?%;bottom:%?65?%;width:%?690?%;height:%?80?%;line-height:%?74?%;color:#1e2f64;border-radius:%?40?%;border:%?2?% solid #1e2f64;text-align:center}',""]),t.exports=n},"2a3b":function(t,n,e){var i=e("29b9");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("969da29a",i,!0,{sourceMap:!1,shadowMode:!1})},"3c9b":function(t,n,e){"use strict";e("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"u-swipe-action",props:{index:{type:[Number,String],default:""},btnWidth:{type:[String,Number],default:180},disabled:{type:Boolean,default:!1},show:{type:Boolean,default:!1},bgColor:{type:String,default:"#ffffff"},vibrateShort:{type:Boolean,default:!1},options:{type:Array,default:function(){return[]}}},watch:{show:{immediate:!0,handler:function(t,n){t?this.open():this.close()}}},data:function(){return{moveX:0,scrollX:0,status:!1,movableAreaWidth:0,elId:this.$u.guid(),showBtn:!1}},computed:{movableViewWidth:function(){return this.movableAreaWidth+this.allBtnWidth+"px"},innerBtnWidth:function(){return uni.upx2px(this.btnWidth)},allBtnWidth:function(){return uni.upx2px(this.btnWidth)*this.options.length},btnStyle:function(){var t=this;return function(n){return n.width=t.btnWidth+"rpx",n}}},mounted:function(){this.getActionRect()},methods:{btnClick:function(t){this.status=!1,this.$emit("click",this.index,t)},change:function(t){this.scrollX=t.detail.x},close:function(){this.moveX=0,this.status=!1},open:function(){this.disabled||(this.moveX=-this.allBtnWidth,this.status=!0)},touchend:function(){this.moveX=this.scrollX,this.$nextTick((function(){var t=this;0==this.status?this.scrollX<=-this.allBtnWidth/4?(this.moveX=-this.allBtnWidth,this.status=!0,this.emitOpenEvent(),this.vibrateShort&&uni.vibrateShort()):(this.moveX=0,this.status=!1,this.emitCloseEvent()):this.scrollX>3*-this.allBtnWidth/4?(this.moveX=0,this.$nextTick((function(){t.moveX=101})),this.status=!1,this.emitCloseEvent()):(this.moveX=-this.allBtnWidth,this.status=!0,this.emitOpenEvent())}))},emitOpenEvent:function(){this.$emit("open",this.index)},emitCloseEvent:function(){this.$emit("close",this.index)},touchstart:function(){},getActionRect:function(){var t=this;this.$uGetRect(".u-swipe-action").then((function(n){t.movableAreaWidth=n.width,t.$nextTick((function(){t.showBtn=!0}))}))},contentClick:function(){1==this.status&&(this.status="close",this.moveX=0),this.$emit("content-click",this.index)}}};n.default=i},"3e32":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-swipe-action[data-v-17b8d570]{width:auto;height:auto;position:relative;overflow:hidden}.u-swipe-view[data-v-17b8d570]{display:flex;flex-direction:row;height:auto;position:relative\n  /* 这一句很关键，覆盖默认的绝对定位 */}.u-swipe-content[data-v-17b8d570]{flex:1}.u-swipe-del[data-v-17b8d570]{position:relative;font-size:%?30?%;color:#fff}.u-btn-text[data-v-17b8d570]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}',""]),t.exports=n},4995:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return i}));var i={uSwipeAction:e("cfee").default,uIcon:e("b4b8").default,uEmpty:e("52b8").default},o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[t.list_show?e("v-uni-view",{staticStyle:{"padding-top":"150rpx"}},[e("u-empty",{attrs:{text:"没有收货地址",mode:"address"}})],1):e("v-uni-view",{staticClass:"conent_box"},t._l(t.page_list,(function(n,i){return e("u-swipe-action",{key:n.id,staticClass:"address_box",attrs:{show:n.show,index:i,options:t.options},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.del(n.id)},open:function(n){arguments[0]=n=t.$handleEvent(n),t.open.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"address_box_child"},[e("v-uni-view",{staticClass:"child_l",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.add_pay(n,i)}}},[e("v-uni-view",[t._v(t._s(n.contact)+" "+t._s(n.mobile)),1==n.is_default?e("v-uni-text",{staticClass:"more"},[t._v("默认")]):t._e(),n.id_number?e("v-uni-text",{staticClass:"more1"},[t._v("实名")]):t._e()],1),e("v-uni-view",{staticClass:"text"},[t._v(t._s(n.province+n.city+n.area+n.address))])],1),e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"btns",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.Add(n,1)}}},[e("v-uni-view",{staticClass:"btns_icon"},[e("u-icon",{attrs:{name:"edit-pen",size:"50rpx"}})],1),e("v-uni-text",[t._v("编辑")])],1)],1)],1)],1)})),1),e("v-uni-button",{staticClass:"btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.Add1()}}},[t._v("添加地址")])],1)},s=[]},5219:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return i}));var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{},[e("v-uni-movable-area",{staticClass:"u-swipe-action",style:{backgroundColor:t.bgColor}},[e("v-uni-movable-view",{staticClass:"u-swipe-view",style:{width:t.movableViewWidth?t.movableViewWidth:"100%"},attrs:{direction:"horizontal",disabled:t.disabled,x:t.moveX},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.change.apply(void 0,arguments)},touchend:function(n){arguments[0]=n=t.$handleEvent(n),t.touchend.apply(void 0,arguments)},touchstart:function(n){arguments[0]=n=t.$handleEvent(n),t.touchstart.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"u-swipe-content",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.contentClick.apply(void 0,arguments)}}},[t._t("default")],2),t._l(t.options,(function(n,i){return t.showBtn?e("v-uni-view",{key:i,staticClass:"u-swipe-del",style:[t.btnStyle(n.style)],on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.btnClick(i)}}},[e("v-uni-view",{staticClass:"u-btn-text"},[t._v(t._s(n.text))])],1):t._e()}))],2)],1)],1)},s=[]},"52b8":function(t,n,e){"use strict";e.r(n);var i=e("fad5"),o=e("717c");for(var s in o)"default"!==s&&function(t){e.d(n,t,(function(){return o[t]}))}(s);e("9706");var a,c=e("f0c5"),r=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"78ae7d22",null,!1,i["a"],a);n["default"]=r.exports},5650:function(t,n,e){"use strict";var i=e("2a3b"),o=e.n(i);o.a},"717c":function(t,n,e){"use strict";e.r(n);var i=e("8e54"),o=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=o.a},8894:function(t,n,e){"use strict";e.r(n);var i=e("4995"),o=e("d1f2");for(var s in o)"default"!==s&&function(t){e.d(n,t,(function(){return o[t]}))}(s);e("01eb"),e("5650");var a,c=e("f0c5"),r=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"b89110a2",null,!1,i["a"],a);n["default"]=r.exports},"8e54":function(t,n,e){"use strict";e("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"u-empty",props:{src:{type:String,default:""},text:{type:String,default:""},color:{type:String,default:"#c0c4cc"},iconColor:{type:String,default:"#c0c4cc"},iconSize:{type:[String,Number],default:120},fontSize:{type:[String,Number],default:26},mode:{type:String,default:"data"},imgWidth:{type:[String,Number],default:120},imgHeight:{type:[String,Number],default:"auto"},show:{type:Boolean,default:!0},marginTop:{type:[String,Number],default:0},iconStyle:{type:Object,default:function(){return{}}}},data:function(){return{icons:{car:"购物车为空",page:"页面不存在",search:"没有搜索结果",address:"没有收货地址",wifi:"没有WiFi",order:"订单为空",coupon:"没有优惠券",favor:"暂无收藏",permission:"无权限",history:"无历史记录",news:"无新闻列表",message:"消息列表为空",list:"列表为空",data:"数据为空"}}}};n.default=i},9348:function(t,n,e){"use strict";var i=e("eafb"),o=e.n(i);o.a},9706:function(t,n,e){"use strict";var i=e("20d8"),o=e.n(i);o.a},b132:function(t,n,e){"use strict";e.r(n);var i=e("3c9b"),o=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=o.a},ccb4:function(t,n,e){"use strict";e("d81d"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{name:"设置为默认地址",page_list:[],options:[{text:"删除",style:{backgroundColor:"#dd524d"}}],list_show:!0,is_mine:1,type:0,current:0}},onShow:function(){this.page_t()},onLoad:function(t){console.log(t),this.is_mine=t.is_mine,this.type=t.type,this.current=t.current},methods:{add_pay:function(t,n){if(console.log(t),0==this.type&&(0!=this.current&&3!=this.current||1==this.is_mine&&(uni.setStorageSync("address",t),uni.navigateBack()),1==this.current))if(1==this.is_mine){var e=this.page_list[n].id_number,i=this.page_list[n].truename;if(""==e||""==i){this.com.msg("请您先实名认证~");var o=this;setTimeout((function(){o.Add(t,2)}),1500)}else uni.setStorageSync("address_send",t),uni.navigateBack()}else uni.setStorageSync("address_bier",t),uni.navigateBack()},open:function(t){var n=this;this.list[t].show=!0,this.list.map((function(e,i){t!=i&&(n.list[i].show=!1)}))},page_t:function(){var t=this;this.$api.get("address",{is_mine:this.is_mine}).then((function(n){console.log(n),1==n.status&&(t.page_list=n.data,console.log(t.page_list)),void 0===n.data||""==n.data?t.list_show=!0:t.list_show=!1}))},Add:function(t,n){1==n&&this.com.navto("./addAddress?type="+JSON.stringify(t)+"&is_mine="+this.is_mine+"&onShow=0"),2==n&&this.com.navto("./addAddress?type="+JSON.stringify(t)+"&is_mine="+this.is_mine+"&onShow=1")},Add1:function(){this.com.navto("../my/addAddress?is_mine="+this.is_mine+"&onShow=0")},del:function(t){var n=this,e={id:t};uni.showModal({content:"确定删除这个地址吗？",success:function(t){t.confirm&&n.$api.del("address",e).then((function(t){console.log(t),1==t.status&&(n.com.msg(t.message),n.page_t())}))}})}}};n.default=i},cfee:function(t,n,e){"use strict";e.r(n);var i=e("5219"),o=e("b132");for(var s in o)"default"!==s&&function(t){e.d(n,t,(function(){return o[t]}))}(s);e("9348");var a,c=e("f0c5"),r=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"17b8d570",null,!1,i["a"],a);n["default"]=r.exports},d1f2:function(t,n,e){"use strict";e.r(n);var i=e("ccb4"),o=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=o.a},d4b2:function(t,n,e){var i=e("fb19");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("b059ef9e",i,!0,{sourceMap:!1,shadowMode:!1})},eafb:function(t,n,e){var i=e("3e32");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("b5b188c8",i,!0,{sourceMap:!1,shadowMode:!1})},f3b1:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-empty[data-v-78ae7d22]{display:flex;flex-direction:row;flex-direction:column;justify-content:center;align-items:center;height:100%}.u-image[data-v-78ae7d22]{margin-bottom:%?20?%}.u-slot-wrap[data-v-78ae7d22]{display:flex;flex-direction:row;justify-content:center;align-items:center;margin-top:%?20?%}',""]),t.exports=n},fad5:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return i}));var i={uIcon:e("b4b8").default},o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.show?e("v-uni-view",{staticClass:"u-empty",style:{marginTop:t.marginTop+"rpx"}},[e("u-icon",{attrs:{name:t.src?t.src:"empty-"+t.mode,"custom-style":t.iconStyle,label:t.text?t.text:t.icons[t.mode],"label-pos":"bottom","label-color":t.color,"label-size":t.fontSize,size:t.iconSize,color:t.iconColor,"margin-top":"14"}}),e("v-uni-view",{staticClass:"u-slot-wrap"},[t._t("bottom")],2)],1):t._e()},s=[]},fb19:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,"uni-page-body[data-v-b89110a2]{background-color:#f6f6f6}body.?%PAGE?%[data-v-b89110a2]{background-color:#f6f6f6}",""]),t.exports=n}}]);