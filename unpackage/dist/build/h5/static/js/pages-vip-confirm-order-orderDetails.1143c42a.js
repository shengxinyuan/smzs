(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-vip-confirm-order-orderDetails"],{"0212":function(t,s,e){var a=e("30df");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("1181863c",a,!0,{sourceMap:!1,shadowMode:!1})},"1edd":function(t,s,e){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e={data:function(){return{timestamp:0,order_id:0,shop_det:"",status:""}},watch:{},onLoad:function(s){t("log",s," at pages/vip-confirm-order/orderDetails.vue:153"),this.order_id=s.page_type,this.page_reader()},methods:{page_reader:function(){var s=this;this.$api.get("order_goods",{id:this.order_id,is_h5:1}).then((function(e){t("log",e," at pages/vip-confirm-order/orderDetails.vue:161"),1==e.status&&(s.shop_det=e.data)}))},order_logist_wl:function(t){this.com.navto("../my/logistr?cont="+t)},shouh:function(){this.com.navto("../service/service")},sure_details:function(s){var e=this;uni.showModal({content:"您确定收到货物了吗？",success:function(a){a.confirm&&e.$api.put("orders",{id:s,type:1}).then((function(s){t("log",s," at pages/vip-confirm-order/orderDetails.vue:182"),1==s.status?e.com.redto("./order?state=30&index=3"):e.com.msg(s.message)}))}})},del_order:function(s,e){var a=this;uni.showModal({content:"您确定删除该订单吗？？",success:function(e){e.confirm&&a.$api.del("orders",{id:s}).then((function(s){t("log",s," at pages/vip-confirm-order/orderDetails.vue:201"),1==s.status?a.com.redto("../my/order?state=50&index=5"):a.com.msg(s.message)}))}})},make:function(s){uni.setClipboardData({data:s,success:function(){t("log","success"," at pages/vip-confirm-order/orderDetails.vue:217")}})},no_order:function(t){var s=this;uni.showModal({content:"确认取消该订单吗？",success:function(e){e.confirm&&s.$api.put("orders",{id:t,type:2,is_h5:1}).then((function(t){1==t.status?s.com.redto("./order?state=10&index=1"):s.com.msg(t.message)}))}})},goto_pages:function(t){var s={bn:t,current:1};this.com.navto("../vip-confirm-order/vip-confirm-order?data="+JSON.stringify(s))}}};s.default=e}).call(this,e("0de9")["log"])},"30df":function(t,s,e){var a=e("24fb");s=a(!1),s.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.sure[data-v-2262ea3a]{padding:3%;font-size:%?38?%;font-weight:700}.toast_order[data-v-2262ea3a]{width:100%;padding:3%}.toast_order .toast_title[data-v-2262ea3a]{font-size:%?30?%;font-weight:700;margin-bottom:%?30?%}.toast_order .toast_but[data-v-2262ea3a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.toast_order .toast_but .toast_but_r[data-v-2262ea3a]{width:60%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.toast_order .toast_but .toast_but_r .toast_but_no[data-v-2262ea3a]{height:%?60?%;line-height:%?56?%;font-size:%?28?%;color:#999;border:%?2?% solid #999;border-radius:%?50?%;padding:0 %?20?%}.toast_order .toast_but .toast_but_r .toast_but_pay[data-v-2262ea3a]{height:%?60?%;line-height:%?60?%;font-size:%?28?%;color:#fff;background-color:#ee453f;border-radius:%?50?%;padding:0 %?20?%}.address[data-v-2262ea3a]{padding:%?20?% 3%;background-color:#fff;margin-top:%?20?%}.address .address_top[data-v-2262ea3a]{margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex}.address .address_b[data-v-2262ea3a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.address .address_l[data-v-2262ea3a]{width:%?160?%;white-space:nowrap;color:#999}.address .address_l uni-text[data-v-2262ea3a]{display:inline-block;color:#fff;background-color:#2b3f7d;padding:0 %?16?%;margin-left:%?14?%;border-radius:%?50?%}.address .address_r[data-v-2262ea3a]{width:100%;color:#333}.address .address_r .address_r_l[data-v-2262ea3a]{line-height:%?40?%}.address .address_r .address_r_r[data-v-2262ea3a]{line-height:%?80?%;margin-left:%?28?%;color:#999}.st_data[data-v-2262ea3a]{margin:%?20?% 0}.st_data .statis[data-v-2262ea3a]{width:100%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?20?% 3%;font-size:%?30?%}.st_data .statis uni-textarea[data-v-2262ea3a]{width:100%;font-size:%?28?%}.st_data .statis .statis_r uni-text[data-v-2262ea3a]{color:#293c79;margin-right:%?28?%}.shop[data-v-2262ea3a]{width:100%;padding:%?20?% 3% 0 3%;background-color:#fff;margin-top:%?20?%}.shop .shop_title[data-v-2262ea3a]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-bottom:%?20?%;border-bottom:%?1?% solid #eee;line-height:%?50?%}.shop .shop_title .title_l[data-v-2262ea3a]{color:#999;font-size:%?30?%}.shop .shop_title .title_r[data-v-2262ea3a]{color:#273b76;font-size:%?32?%}.shop .shop_list[data-v-2262ea3a]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;border-bottom:%?1?% solid #f6f6f6;padding-top:%?20?%}.shop .shop_list uni-image[data-v-2262ea3a]{width:%?200?%;height:%?200?%}.shop .shop_list .list_right[data-v-2262ea3a]{width:%?430?%;margin-left:%?20?%;position:relative}.shop .shop_list .list_right .go_buy_abs[data-v-2262ea3a]{position:absolute;right:%?10?%;bottom:%?6?%;background-repeat:no-repeat;background-size:cover;width:%?146?%;height:%?53?%;margin-left:%?25?%;color:#fff;text-align:center;line-height:%?53?%;z-index:20}.shop .shop_list .list_right .list_right_its[data-v-2262ea3a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.shop .shop_list .list_right .list_right_its uni-text[data-v-2262ea3a]{display:inline-block;padding:%?2?% %?10?%;background-color:#eee;font-size:%?24?%;margin:%?4?% %?10?%;white-space:nowrap;border-radius:%?6?%;color:#999}.shop .shop_list .list_right .title[data-v-2262ea3a]{font-weight:700;font-size:%?32?%;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.shop .shop_list .list_right .price[data-v-2262ea3a]{width:100%;line-height:%?70?%;color:#ba1a30;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.shop .shop_list .list_right .price uni-text[data-v-2262ea3a]{color:#999}.shop .shop_list .list_right .Specifications[data-v-2262ea3a]{width:100%;color:#999;line-height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.shop .shop_list .list_right .Specifications .num[data-v-2262ea3a]{color:#999}.shop .heji[data-v-2262ea3a]{line-height:%?80?%;border-top:%?2?% solid #eee}.shop .heji .heji_l[data-v-2262ea3a]{font-size:%?26?%;color:#999;margin-right:%?26?%}.shop .heji .heji_r[data-v-2262ea3a]{font-size:%?28?%}.shop .heji .heji_r uni-text[data-v-2262ea3a]{color:#ee453f;font-size:%?34?%}',""]),t.exports=s},6177:function(t,s,e){var a=e("c13f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("cecf9dc6",a,!0,{sourceMap:!1,shadowMode:!1})},9229:function(t,s,e){"use strict";var a=e("0212"),i=e.n(a);i.a},bec0:function(t,s,e){"use strict";e.r(s);var a=e("1edd"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(s,t,(function(){return a[t]}))}(o);s["default"]=i.a},c13f:function(t,s,e){var a=e("24fb");s=a(!1),s.push([t.i,"uni-page-body[data-v-2262ea3a]{background-color:#f6f6f6}body.?%PAGE?%[data-v-2262ea3a]{background-color:#f6f6f6}",""]),t.exports=s},cc01:function(t,s,e){"use strict";var a;e.d(s,"b",(function(){return i})),e.d(s,"c",(function(){return o})),e.d(s,"a",(function(){return a}));var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-uni-view",[10==t.shop_det.status?e("v-uni-view",{staticClass:"sure"},[t._v("待确认")]):t._e(),30==t.shop_det.status?e("v-uni-text",{staticClass:"sure"},[t._v("待完成")]):t._e(),50==t.shop_det.status?e("v-uni-text",{staticClass:"sure"},[t._v("已完成")]):t._e(),e("v-uni-view",{staticClass:"address"},[e("v-uni-view",{staticClass:"address_top"},[e("v-uni-view",{staticClass:"address_l"},[t._v("收货人")]),t._v(t._s(t.shop_det.address_id.contact)+" "+t._s(t.shop_det.address_id.mobile))],1),e("v-uni-view",{staticClass:"address_b"},[e("v-uni-view",{staticClass:"address_l"},[t._v("收货地址")]),e("v-uni-view",{staticClass:"address_r"},[t.shop_det.address_id?e("v-uni-view",{staticClass:"address_r_l"},[t._v(t._s(t.shop_det.address_id.province+","+t.shop_det.address_id.city+","+t.shop_det.address_id.area+","+t.shop_det.address_id.address))]):t._e()],1)],1)],1),e("v-uni-view",{staticClass:"shop"},[e("v-uni-view",{staticClass:"shop_title"},[e("v-uni-view",{staticClass:"title_l"},[t._v("订单编号："+t._s(t.shop_det.bn))])],1),t._l(t.shop_det.order_goods,(function(s,a){return e("v-uni-view",{staticClass:"shop_list"},[e("v-uni-image",{attrs:{src:s.image,mode:"aspectFill"},on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.order_detail(t.item.id,10)}}}),e("v-uni-view",{staticClass:"list_right"},[e("v-uni-view",{on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.order_detail(t.item.id)}}},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(s.title))]),e("v-uni-view",{staticClass:"Specifications"},[t._v("金重："+t._s(s.sku.weight)+"g"),e("v-uni-text",{staticClass:"num"},[t._v("条码："+t._s(t.shop_det.bar_code))])],1),e("v-uni-view",{staticClass:"list_right_its"},[e("v-uni-text",[t._v("金料:￥"+t._s(s.gold_price))]),e("v-uni-text",[t._v("工费:￥"+t._s(s.labor_price)+"/g")])],1),e("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(s.total)),e("v-uni-text",[t._v("*"+t._s(s.count))])],1)],1)],1)],1)})),e("v-uni-view",{staticClass:"heji"},[e("v-uni-text",{staticClass:"heji_l"},[t._v("共 "+t._s(t.shop_det.count)+" 件")]),e("v-uni-text",{staticClass:"heji_r"},[t._v("合计："),e("v-uni-text",[t._v("￥"+t._s(t.shop_det.total))])],1)],1)],2),e("v-uni-view",{staticClass:"st_data"},[e("v-uni-view",{staticClass:"statis"},[e("v-uni-view",{staticClass:"statis_l"},[t._v("商品汇总")]),e("v-uni-view",{staticClass:"statis_r"},[t._v("共 "+t._s(t.shop_det.count)+" 件 ￥"+t._s(t.shop_det.total))])],1),e("v-uni-view",{staticClass:"statis"},[e("v-uni-view",{staticClass:"statis_l"},[t._v("工费")]),e("v-uni-view",{staticClass:"statis_r"},[t._v("￥"+t._s(t.shop_det.total_labor_price))])],1)],1),e("v-uni-view",{staticClass:"st_data",staticStyle:{"margin-bottom":"60rpx"}},[t.shop_det.message?e("v-uni-view",{staticClass:"statis"},[e("v-uni-textarea",{attrs:{placeholder:"备注"+t.shop_det.message,disabled:!0}})],1):t._e(),e("v-uni-view",{staticClass:"statis"},[e("v-uni-view",{staticClass:"statis_l"},[t._v("订单编号")]),e("v-uni-view",{staticClass:"statis_r"},[e("v-uni-text",{on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.make(t.shop_det.bn)}}},[t._v("复制")]),t._v(t._s(t.shop_det.bn))],1)],1),e("v-uni-view",{staticClass:"statis"},[e("v-uni-view",{staticClass:"statis_l"},[t._v("创建时间")]),e("v-uni-view",{staticClass:"statis_r"},[t._v(t._s(t.shop_det.create_time))])],1)],1),e("v-uni-view",{staticClass:"toast_order"},[e("v-uni-view",{staticClass:"toast_but"},[e("v-uni-view"),10==t.shop_det.status?e("v-uni-view",{staticClass:"toast_but_r"},[e("v-uni-view",{staticClass:"toast_but_no",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.no_order(t.shop_det.id)}}},[t._v("取消订单")]),e("v-uni-view",{staticClass:"toast_but_pay",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.goto_pages(t.shop_det.bn)}}},[t._v("平台下单")])],1):t._e(),30==t.shop_det.status?e("v-uni-view",{staticClass:"toast_but_r"},[e("v-uni-view",{staticClass:"toast_but_no",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.order_logist_wl(t.shop_det.bn)}}},[t._v("查看物流")]),e("v-uni-view",{staticClass:"toast_but_pay",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.sure_details(t.shop_det.id)}}},[t._v("确认收货")])],1):t._e(),50==t.shop_det.status?e("v-uni-view",{staticClass:"toast_but_r"},[e("v-uni-view",{staticClass:"toast_but_no",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.shouh.apply(void 0,arguments)}}},[t._v("售后服务")]),e("v-uni-view",{staticClass:"toast_but_pay",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.del_order(t.shop_det.id,t.shop_det.status)}}},[t._v("删除订单")])],1):t._e(),60==t.shop_det.status?e("v-uni-view",{staticClass:"toast_but_r"},[60==t.shop_det.status&&1==t.shop_det.return_type?e("v-uni-view",{staticClass:"toast_but_pay",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.shen_details(t.shop_det.id)}}},[t._v("撤销")]):t._e(),60==t.shop_det.status&&2==t.shop_det.return_type?e("v-uni-view",{staticClass:"toast_but_pay",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.order_logist(t.shop_det)}}},[t._v("再次申请")]):t._e(),60==t.shop_det.status&&3==t.shop_det.return_type?e("v-uni-view",{staticClass:"toast_but_pay",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.del_order(t.shop_det.id,t.shop_det.status)}}},[t._v("删除订单")]):t._e()],1):t._e()],1)],1)],1)},o=[]},d6ff:function(t,s,e){"use strict";e.r(s);var a=e("cc01"),i=e("bec0");for(var o in i)"default"!==o&&function(t){e.d(s,t,(function(){return i[t]}))}(o);e("f055"),e("9229");var n,d=e("f0c5"),r=Object(d["a"])(i["default"],a["b"],a["c"],!1,null,"2262ea3a",null,!1,a["a"],n);s["default"]=r.exports},f055:function(t,s,e){"use strict";var a=e("6177"),i=e.n(a);i.a}}]);