(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-community-platform-gold-prices"],{"001c":function(t,a,e){"use strict";e.r(a);var i=e("89c0"),n=e("d8f5");for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("0751");var o,d=e("f0c5"),c=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"03f904a8",null,!1,i["a"],o);a["default"]=c.exports},"0751":function(t,a,e){"use strict";var i=e("f16c"),n=e.n(i);n.a},"2f76":function(t,a,e){var i=e("d3ea");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("f3a1723a",i,!0,{sourceMap:!1,shadowMode:!1})},"4a8a":function(t,a,e){"use strict";e.r(a);var i=e("c667"),n=e("d9be");for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("5da8");var o,d=e("f0c5"),c=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"b9ea68d6",null,!1,i["a"],o);a["default"]=c.exports},"5da8":function(t,a,e){"use strict";var i=e("2f76"),n=e.n(i);n.a},"6b60":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.my-tabs[data-v-03f904a8]{height:%?62?%;font-size:%?24?%;display:flex;justify-content:space-around;box-sizing:border-box;\n  /* border-top: 2upx solid #dddddd;\n\tborder-bottom: 2upx solid #dddddd; */min-width:100%;overflow-x:auto;background-color:#f6f6f6;border-radius:%?30?%}.my-tabs .tab-item[data-v-03f904a8]{width:100%;line-height:%?62?%;\n  /* padding: 20upx; */\n  /* min-width: 100upx; */text-align:center}.my-tabs .tab-item.active[data-v-03f904a8]{position:relative;color:#fff;border-radius:%?30?%;background-image:linear-gradient(90deg,#2b3f7d,#1b2c60)}.my-tabs .tab-item.active[data-v-03f904a8]::after{content:"";position:absolute;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:100%;\n  /* border-bottom: 4upx solid #3682FF; */-webkit-animation:test-data-v-03f904a8 ease 1 1.5s;animation:test-data-v-03f904a8 ease 1 1.5s}.my-tabs.space-between[data-v-03f904a8]{justify-content:space-between}@-webkit-keyframes test-data-v-03f904a8{0%{width:100%}50%{width:150%}100%{width:100%}}@keyframes test-data-v-03f904a8{0%{width:100%}50%{width:150%}100%{width:100%}}',""]),t.exports=a},"89c0":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{class:{"my-tabs":!0,"space-between":t.formatBe}},t._l(t.getModelData,(function(a,i){return e("v-uni-view",{key:i,class:{"tab-item":!0,active:t.activeIndex==i},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tap(i)}}},[t._v(t._s(a.label))])})),1)},s=[]},a438:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={props:["modelData","initIndex"],data:function(){return{defaultInfo:{data:[{label:"测试1"},{label:"测试2"}]},activeIndex:0}},mounted:function(){console.log(this.modelData,this.initIndex)},computed:{getModelData:function(){return this.modelData||this.defaultInfo.data},formatBe:function(){return!!this.modelData&&this.modelData.length>4}},methods:{tap:function(t){t!==this.activeIndex&&this.$emit("change",t),this.activeIndex=t},initActive:function(){this.activeIndex=this.initIndex||this.activeIndex}},created:function(){this.initActive()}};a.default=i},aae0:function(t,a,e){"use strict";var i=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("001c")),s={components:{stzhangTab:n.default},data:function(){return{modelData:[{label:"平台金价"},{label:"其他金价"}],initIndex:0,navtype:0,updateTime:"2020/10/14 13:52:32",tiptext:"扫码进店",gold_price:[]}},onLoad:function(){var t=this,a=uni.getStorageSync("member_info");console.log(a),this.$api.get("gold_price",{member_id:a.id}).then((function(a){1==a.status&&(t.gold_price=a)}))},methods:{tabsChange:function(t){this.navtype=t},shares:function(t){var a="https://zuanshi.semoh.cn/smsj/index.html#/pages/community/my-gold-prices?goldname=奢美饰界&gold_price="+JSON.stringify(this.gold_price)+"&tiptext=扫码注册下载";0==t||1==t||2==t&&uni.setClipboardData({data:a,success:function(){}})}}};a.default=s},c667:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return i}));var i={stzhangTab:e("001c").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"zl-box"},[e("v-uni-view",{staticClass:"tabs-box"},[e("stzhang-tab",{attrs:{modelData:t.modelData,initIndex:t.initIndex},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.tabsChange.apply(void 0,arguments)}}})],1),0==t.navtype?e("v-uni-view",{staticClass:"king_pic"},[e("v-uni-view",{staticClass:"king_pic_a"},[e("v-uni-view",{staticClass:"times"},[t._v("更新时间：\n\t\t\t\t"+t._s(t.gold_price.time))])],1),e("v-uni-view",{staticClass:"tabs"},[e("v-uni-view",{staticClass:"tabs_tr"},[e("v-uni-view",[t._v("品种")]),e("v-uni-view",[t._v("销售")]),e("v-uni-view",[t._v("回购")]),e("v-uni-view",[t._v("最高")]),e("v-uni-view",[t._v("最低")])],1),e("v-uni-view",{staticClass:"swipers_d"},t._l(t.gold_price.data,(function(a,i){return e("v-uni-view",{key:i,class:i%2!=0?"tabs_tr":"tabs_td"},[e("v-uni-view",[t._v(t._s(a.title))]),e("v-uni-view",[t._v(t._s(a.new_price))]),e("v-uni-view",[t._v(t._s(a.buy_price))]),e("v-uni-view",{staticStyle:{color:"#f5553f"}},[t._v(t._s(a.max_price))]),e("v-uni-view",{staticStyle:{color:"#5cb671"}},[t._v(t._s(a.min_price))])],1)})),1)],1)],1):t._e(),1==t.navtype?e("v-uni-view",[e("v-uni-view",{staticClass:"tabs-one-title"},[e("v-uni-text",[t._v("更新时间："+t._s(t.updateTime))])],1),e("v-uni-view",{staticClass:"tabs"},[e("v-uni-view",{staticClass:"tabs_tr"},[e("v-uni-view",{staticClass:"tab-min-box"},[t._v("品种名称")]),e("v-uni-view",{staticClass:"tab-min-box"},[t._v("产品名称")]),e("v-uni-view",{staticClass:"tab-min-box"},[t._v("价格")])],1),t._l(5,(function(a,i){return e("v-uni-view",{key:i,class:i%2!=0?"tabs_tr":"tabs_td"},[e("v-uni-view",{staticClass:"tab-min-box"},[t._v("周大福")]),e("v-uni-view",{staticClass:"tab-min-box"},[t._v("黄金99.95")]),e("v-uni-view",{staticClass:"tab-min-box"},[t._v("357.01")])],1)}))],2)],1):t._e(),e("v-uni-view",{staticClass:"bottom-box"},[e("v-uni-view",{staticClass:"share-box"},[e("v-uni-view",{staticClass:"share-min-box",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.shares(0)}}},[e("v-uni-view",{staticClass:"share-logo"},[e("v-uni-image",{attrs:{src:"https://zuanshi.semoh.cn/applet_static/community/haoyou.png",mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"share-title"},[t._v("微信好友")])],1)],1),e("v-uni-view",{staticClass:"share-box"},[e("v-uni-view",{staticClass:"share-min-box",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.shares(1)}}},[e("v-uni-view",{staticClass:"share-logo"},[e("v-uni-image",{attrs:{src:"https://zuanshi.semoh.cn/applet_static/community/pyq.png",mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"share-title"},[t._v("朋友圈")])],1)],1),e("v-uni-view",{staticClass:"share-box"},[e("v-uni-view",{staticClass:"share-min-box",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.shares(2)}}},[e("v-uni-view",{staticClass:"share-logo"},[e("v-uni-image",{attrs:{src:"https://zuanshi.semoh.cn/applet_static/community/lianjie.png",mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"share-title"},[t._v("分享链接")])],1)],1)],1)],1)},s=[]},d3ea:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.zl-box[data-v-b9ea68d6]{padding:3%}.tabs-one-title[data-v-b9ea68d6]{font-size:%?22?%;color:#666;margin:%?20?% 0}.tabs[data-v-b9ea68d6]{width:100%;font-size:%?20?%}.tabs .tabs_tr[data-v-b9ea68d6]{display:flex}.tabs .tabs_tr uni-view[data-v-b9ea68d6]{width:20%;text-align:center;height:%?68?%;line-height:%?70?%;background-color:#fff0d7;margin:%?2?%;border-radius:%?4?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tabs .tabs_tr .tab-min-box[data-v-b9ea68d6]{width:33.3%;text-align:center;height:%?68?%;line-height:%?70?%;background-color:#fff0d7;margin:%?2?%;border-radius:%?4?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tabs .tabs_td[data-v-b9ea68d6]{display:flex}.tabs .tabs_td uni-view[data-v-b9ea68d6]{width:20%;text-align:center;height:%?68?%;line-height:%?70?%;background-color:#fffcf7;margin:%?2?%;border-radius:%?4?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tabs .tabs_td .tab-min-box[data-v-b9ea68d6]{width:33.3%;text-align:center;height:%?68?%;line-height:%?70?%;background-color:#fffcf7;margin:%?2?%;border-radius:%?4?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.scan-code-box[data-v-b9ea68d6]{margin-top:%?150?%;display:flex;justify-content:center;align-items:center}.scan-code-box .scan-code-min-box[data-v-b9ea68d6]{width:%?200?%}.scan-code-box .scan-code-min-box .scan-code-logo[data-v-b9ea68d6]{width:%?200?%;height:%?200?%;display:flex}.scan-code-box .scan-code-min-box .scan-code-logo uni-image[data-v-b9ea68d6]{width:100%}.scan-code-box .scan-code-min-box .scan-code-title[data-v-b9ea68d6]{margin-top:%?20?%;font-size:%?26?%;font-weight:700;text-align:center;color:#2d407a}.bottom-box[data-v-b9ea68d6]{width:100%;padding-bottom:%?50?%;display:flex;position:fixed;bottom:0;left:0}.bottom-box .share-box[data-v-b9ea68d6]{width:33.3%;display:flex;justify-content:center}.bottom-box .share-box .share-min-box .share-logo[data-v-b9ea68d6]{display:flex;justify-content:center;align-items:center}.bottom-box .share-box .share-min-box .share-logo uni-image[data-v-b9ea68d6]{width:%?80?%;height:%?80?%}.bottom-box .share-box .share-min-box .share-title[data-v-b9ea68d6]{font-size:%?22?%;text-align:center;margin-top:%?10?%}.king_pic[data-v-b9ea68d6]{margin-bottom:%?20?%;background-color:#fff;border-radius:%?10?%}.king_pic .king_pic_a[data-v-b9ea68d6]{display:flex;justify-content:space-between}.king_pic .king_pic_a .times[data-v-b9ea68d6]{color:#999;line-height:%?60?%;font-size:%?24?%}.king_pic .tabs[data-v-b9ea68d6]{width:100%;font-size:%?22?%}.king_pic .tabs .swipers_d[data-v-b9ea68d6]{height:%?304?%;overflow-y:scroll}.king_pic .tabs .tabs_tr[data-v-b9ea68d6]{display:flex}.king_pic .tabs .tabs_tr uni-view[data-v-b9ea68d6]{width:20%;text-align:center;height:%?58?%;line-height:%?60?%;background-color:#fff0d7;margin:%?2?%;border-radius:%?4?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.king_pic .tabs .tabs_td[data-v-b9ea68d6]{display:flex}.king_pic .tabs .tabs_td uni-view[data-v-b9ea68d6]{width:20%;text-align:center;height:%?58?%;line-height:%?60?%;background-color:#fffcf7;margin:%?2?%;border-radius:%?4?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',""]),t.exports=a},d8f5:function(t,a,e){"use strict";e.r(a);var i=e("a438"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},d9be:function(t,a,e){"use strict";e.r(a);var i=e("aae0"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},f16c:function(t,a,e){var i=e("6b60");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("9f0b0196",i,!0,{sourceMap:!1,shadowMode:!1})}}]);