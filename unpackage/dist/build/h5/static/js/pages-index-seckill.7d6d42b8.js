(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-seckill"],{"04ab":function(t,e,i){"use strict";i.r(e);var n=i("7185"),a=i("a097");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("9524");var o,c=i("f0c5"),d=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"0c169771",null,!1,n["a"],o);e["default"]=d.exports},"114b":function(t,e,i){var n=i("b8d8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("dd72aeca",n,!0,{sourceMap:!1,shadowMode:!1})},3418:function(t,e,i){"use strict";i.r(e);var n=i("aafe"),a=i("5dd1");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("aec8"),i("7ab6");var o,c=i("f0c5"),d=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"30723d65",null,!1,n["a"],o);e["default"]=d.exports},4540:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.nav_head[data-v-30723d65]{padding:%?16?% 3%;background-color:#fff;white-space:nowrap;display:flex}.nav_head .head_item[data-v-30723d65]{width:33%;text-align:center;display:inline-block}.nav_head .head_item .it_tiem[data-v-30723d65]{font-size:%?36?%;font-weight:700}.nav_head .head_item .acts[data-v-30723d65]{color:#e8372f}.nav_head .head_item .it_tit[data-v-30723d65]{display:inline-block;font-size:%?28?%;color:#666}.nav_head .head_item .active[data-v-30723d65]{padding:0 %?20?%;border-radius:%?50?%;color:#fff;background-color:#e8372f}.down_time[data-v-30723d65]{width:100%;padding:0 3%;margin-top:%?20?%;display:flex;justify-content:space-between}.down_time .s-header_child[data-v-30723d65]{color:#333}.down_time .s-header_child .hour_timer[data-v-30723d65]{display:inline-block;margin:0 %?20?%;color:#e8372f;font-size:%?30?%}.shop_cont[data-v-30723d65]{padding:0 3%}',""]),t.exports=e},"537a":function(t,e,i){"use strict";i("4160"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{list:[{time:"14:00",title:"抢购中"},{time:"14:00",title:"即将开抢"},{time:"14:00",title:"即将开抢"}],navIndex:0,end_time:"",end_seckill:"00:00:00:00",type_id:"",titles:"",second:0}},onLoad:function(t){console.log(t),this.page_reader()},watch:{titles:function(t){console.log(t)}},methods:{navhead_cli:function(t,e){var i=this;this.titles=e,this.navIndex=t,this.$api.get("activity",{type:2,type_id:t}).then((function(e){if(console.log(e),1==e.status){var n=0,a=(new Date).getTime();e.data.top.forEach((function(e){n=new Date(1e3*e.start_time).getHours()<10?0+new Date(1e3*e.start_time).getHours():new Date(1e3*e.start_time).getHours(),e.time=n+":00";var s=1e3*e.start_time,o=1e3*e.end_time;s<a&&o>a?e.title="抢购中":o<a?e.title="已结束":s>a&&(e.title="即将开始"),e.id==t&&(i.end_time=e.end_time)})),i.list=e.data,console.log(i.list)}}))},page_reader:function(){var t=this;this.$api.get("activity",{type:2,type_id:this.type_id}).then((function(e){if(console.log(e),1==e.status){var i=0,n=(new Date).getTime();e.data.top.forEach((function(e){i=new Date(1e3*e.start_time).getHours()<10?0+new Date(1e3*e.start_time).getHours():new Date(1e3*e.start_time).getHours(),e.time=i+":00";var a=1e3*e.start_time,s=1e3*e.end_time;a<n&&s>n?(e.title="抢购中",t.navhead_cli(e.id,"抢购中")):s<n?(e.title="已结束",t.titles="已结束"):a>n&&(e.title="即将开始",t.titles="即将开始"),2==e.T_F&&(t.end_time=e.end_time,t.navIndex=e.id)})),t.list=e.data,t.ent_time_s()}}))},ent_time_s:function(){var t=this,e=new Date,i=e.getTime(),n=1e3*this.end_time-i;this.second=Math.floor(n/1e3);var a=setInterval((function(){n<=0?(clearInterval(a),t.end_seckill="00:00:00:00"):(n-=1e3,t.end_seckill=t.ss(n))}),1e3)},ss:function(t){var e=0,i=0,n=0,a=0;e=Math.floor(t/1e3/60/60/24),i=Math.floor(t/1e3/60/60%24),n=Math.floor(t/1e3/60%60),a=Math.floor(t/1e3%60);var s=e>9?e:"0"+e,o=i>9?i:"0"+i,c=n>9?n:"0".concat(n),d=a>9?a:"0".concat(a);return s+":"+o+":"+c+":"+d}}};e.default=n},"5dd1":function(t,e,i){"use strict";i.r(e);var n=i("537a"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"5ff0":function(t,e,i){var n=i("4540");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("37aafc48",n,!0,{sourceMap:!1,shadowMode:!1})},7185:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"cont"},[i("v-uni-view",{staticClass:"cont_list_two"},t._l(t.lists,(function(e,n){return i("v-uni-view",{key:n,staticClass:"cont_item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.go_shopdetail(e.id)}}},[i("v-uni-view",{staticClass:"item_img"},[i("v-uni-image",{staticClass:"images",attrs:{src:e.image,mode:"aspectFill"}})],1),i("v-uni-view",{staticClass:"it_text"},[i("v-uni-view",{staticClass:"it_tit"},[t._v(t._s(e.title))]),2==t.types?i("v-uni-view",{staticClass:"seckill_pic"},[t._v("秒杀价")]):t._e(),1==t.types?i("v-uni-view",{staticClass:"seckill_pic"},[t._v("团购价")]):t._e(),i("v-uni-view",{staticClass:"it_selt_r"},[t._v("剩余"+t._s(e.stock)+"件")]),i("v-uni-view",{staticClass:"it_text_cen"},[i("v-uni-view",{staticStyle:{display:"flex","padding-top":"6rpx"}},[i("v-uni-view",{staticClass:"it_price"},[t._v("￥"+t._s(e.price))]),i("v-uni-view",{staticClass:"it_selt_l"},[i("v-uni-text",[t._v("￥"+t._s(e.price_make))])],1)],1),i("v-uni-view",{staticClass:"go_seck"},[t._v("去抢购")])],1)],1)],1)})),1)],1)},s=[]},"7ab6":function(t,e,i){"use strict";var n=i("5ff0"),a=i.n(n);a.a},9524:function(t,e,i){"use strict";var n=i("114b"),a=i.n(n);a.a},a097:function(t,e,i){"use strict";i.r(e);var n=i("f53b"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},aafe:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={zsShoplistSeckill:i("04ab").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-scroll-view",{staticClass:"nav_head",attrs:{"scroll-x":"true"}},t._l(t.list.top,(function(e,n){return i("v-uni-view",{key:n,staticClass:"head_item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navhead_cli(e.id,e.title)}}},[i("v-uni-view",{staticClass:"it_tiem",class:{acts:t.navIndex==e.id}},[t._v(t._s(e.time))]),i("v-uni-text",{staticClass:"it_tit",class:{active:t.navIndex==e.id}},[t._v(t._s(e.title))])],1)})),1),i("v-uni-view",{staticClass:"down_time"},[i("v-uni-view",{staticClass:"s-header_child"},[t._v("距结束"),i("v-uni-text",{staticClass:"hour_timer"},[t._v(t._s(t.end_seckill))])],1),i("v-uni-view",{staticStyle:{color:"#666"}},[t._v("限时秒杀最后疯抢")])],1),i("v-uni-view",{staticClass:"shop_cont"},[i("zs-shoplist-seckill",{attrs:{types:2,second:t.second,titles:t.titles,lists:t.list.data}})],1)],1)},s=[]},aec8:function(t,e,i){"use strict";var n=i("fdb7"),a=i.n(n);a.a},b8d8:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cont_list_two[data-v-0c169771]{width:100%;padding-bottom:%?60?%}.cont_list_two .cont_item[data-v-0c169771]{width:100%;margin-right:2%;border-radius:%?16?%;background-color:#fff;margin-top:%?20?%;overflow:hidden;padding:%?20?% %?20?% %?10?% %?10?%;display:flex}.cont_list_two .cont_item .item_img .images[data-v-0c169771]{width:%?240?%;height:%?240?%}.cont_list_two .cont_item .it_text[data-v-0c169771]{width:100%}.cont_list_two .cont_item .it_text .it_tit[data-v-0c169771]{font-size:%?30?%;width:96%;height:%?80?%;overflow:hidden}.cont_list_two .cont_item .it_text .seckill_pic[data-v-0c169771]{display:inline-block;font-size:%?26?%;color:#fff;margin-top:%?15?%;padding:0 %?16?%;background-color:#e8372f}.cont_list_two .cont_item .it_text .it_text_cen[data-v-0c169771]{width:100%;display:flex;white-space:nowrap;justify-content:space-between;margin:%?8?% 0}.cont_list_two .cont_item .it_text .it_text_cen .it_price[data-v-0c169771]{font-weight:700;font-size:%?30?%;width:%?150?%;color:#e8372f}.cont_list_two .cont_item .it_text .it_text_cen .it_selt_l[data-v-0c169771]{padding-top:%?4?%;display:flex}.cont_list_two .cont_item .it_text .it_text_cen .it_selt_l uni-text[data-v-0c169771]{font-size:%?26?%;color:#999;text-decoration:line-through}.cont_list_two .cont_item .it_text .it_text_cen .go_seck[data-v-0c169771]{display:inline-block;padding:%?6?% %?20?% %?8?% %?20?%;border-radius:%?50?%;background-color:#e8372f;color:#fff}.cont_list_two .cont_item .it_text .it_label[data-v-0c169771]{width:100%;display:flex}.cont_list_two .cont_item .it_text .it_label uni-view[data-v-0c169771]{font-size:%?22?%;padding:0 %?8?%;border:%?2?% solid #dd524d;color:#dd524d;border-radius:%?6?%}.cont_list_two .cont_item .it_text .it_selt_r[data-v-0c169771]{color:#998;font-size:%?26?%;margin-top:%?14?%}',""]),t.exports=e},c265:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-30723d65]{background-color:#f6f6f6}body.?%PAGE?%[data-v-30723d65]{background-color:#f6f6f6}",""]),t.exports=e},f53b:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{list:[{name:"新品"},{name:"热销"}],type:0,heat_ind:-1,price_type:2}},props:{lists:{},types:{},titles:{},second:{}},methods:{go_shopdetail:function(t){this.titles?"抢购中"==this.titles?this.com.navto("../../pages/index/Activityshop_detail?shop_id="+t+"&type="+this.types+"&second="+this.second):this.com.msg("本轮秒杀已经结束，请期待下一期"):this.com.navto("../../pages/index/Activityshop_detail?shop_id="+t+"&type="+this.types)},cli_type:function(t){console.log(t),1==this.type?this.type=2:this.type=1},shai_cli:function(t,e){console.log(e),this.heat_ind=t,this.price_type=2==e?1:2}}};e.default=n},fdb7:function(t,e,i){var n=i("c265");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("7d47a4b3",n,!0,{sourceMap:!1,shadowMode:!1})}}]);