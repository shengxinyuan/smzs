(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/orderDetails"],{7998:function(t,o,e){"use strict";e.r(o);var a=e("7aca"),n=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(o,t,(function(){return a[t]}))}(r);o["default"]=n.a},"7aca":function(t,o,e){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={data:function(){return{timestamp:0,order_id:0,shop_det:"",status:"",all_goods_price:0,all_labor_price:0,all_total:0}},watch:{timestamp:function(o){10==this.shop_det.status&&o<=0&&t.navigateBack()}},onLoad:function(t){console.log(t),this.order_id=t.page_type,this.page_reader()},methods:{page_reader:function(){var t=this;this.$api.get("order_goods",{id:this.order_id}).then((function(o){if(console.log(o),1==o.status){t.shop_det=o.data;var e=new Date,a=e.getTime(),n=1e3*o.data.cancel_time;console.log(n);var r=n-a;for(var s in t.timestamp=Math.floor(r/1e3),o.data.order_goods)t.all_goods_price+=(o.data.order_goods[s].total/1-o.data.order_goods[s].labor_price/1)/1,t.all_labor_price+=o.data.order_goods[s].labor_price/1,t.all_total+=o.data.order_goods[s].total/1}}))},order_logist_wl:function(t){this.com.navto("../my/logistr?cont="+t)},shouh:function(){this.com.navto("../service/service")},sure_details:function(o){var e=this;t.showModal({content:"您确定收到货物了吗？",success:function(t){t.confirm&&e.$api.put("orders",{id:o,type:1}).then((function(t){console.log(t),1==t.status?e.com.redto("./order?state=30&index=3"):e.com.msg(t.message)}))}})},del_order:function(o,e){var a=this;t.showModal({content:"您确定删除该订单吗？？",success:function(t){t.confirm&&a.$api.del("orders",{id:o}).then((function(t){console.log(t),1==t.status?a.com.redto("../my/order?state=50&index=5"):a.com.msg(t.message)}))}})},make:function(o){t.setClipboardData({data:o,success:function(){console.log("success")}})},no_order:function(o){var e=this;t.showModal({content:"确认取消该订单吗？",success:function(t){t.confirm&&e.$api.put("orders",{id:o,type:2}).then((function(t){1==t.status?e.com.redto("./order?state=10&index=1"):e.com.msg(t.message)}))}})},goto_pages:function(){var o={vip:this.shop_det.vip,menber_price:this.shop_det.member_money,shop_price:JSON.parse(this.shop_det.total)};t.navigateTo({url:"../my/payments?data="+this.shop_det.bn+"&shop="+JSON.stringify(o)})}}};o.default=e}).call(this,e("543d")["default"])},a2c7:function(t,o,e){"use strict";var a=e("cabe"),n=e.n(a);n.a},ac1c:function(t,o,e){"use strict";var a=e("b819"),n=e.n(a);n.a},b819:function(t,o,e){},cabe:function(t,o,e){},e11b:function(t,o,e){"use strict";e.d(o,"b",(function(){return n})),e.d(o,"c",(function(){return r})),e.d(o,"a",(function(){return a}));var a={uCountDown:function(){return e.e("uview-ui/components/u-count-down/u-count-down").then(e.bind(null,"3112"))}},n=function(){var t=this,o=t.$createElement,e=(t._self._c,t.all_goods_price.toFixed(2)),a=((t.shop_det.order_goods[0].labor_price/1+t.shop_det.order_goods[0].labor_price_add/1)/(t.shop_det.order_goods[0].sku.weight/1)).toFixed(2),n=t.__map(t.shop_det.order_goods,(function(o,e){var a=t.__get_orig(o),n=1==o.is_height?(o.gold_price/1/(o.sku.weight/1)).toFixed(2):null,r=1==o.is_height?((o.labor_price/1+o.labor_price_add/1)/(o.sku.weight/1)).toFixed(2):null,s=(o.total/1-o.labor_price/1).toFixed(2);return{$orig:a,g2:n,g3:r,g4:s}}));t.$mp.data=Object.assign({},{$root:{g0:e,g1:a,l0:n}})},r=[]},e72e:function(t,o,e){"use strict";(function(t){e("b7aa");a(e("66fd"));var o=a(e("fad4"));function a(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,e("543d")["createPage"])},fad4:function(t,o,e){"use strict";e.r(o);var a=e("e11b"),n=e("7998");for(var r in n)"default"!==r&&function(t){e.d(o,t,(function(){return n[t]}))}(r);e("a2c7"),e("ac1c");var s,i=e("f0c5"),c=Object(i["a"])(n["default"],a["b"],a["c"],!1,null,"331c6a61",null,!1,a["a"],s);o["default"]=c.exports}},[["e72e","common/runtime","common/vendor"]]]);