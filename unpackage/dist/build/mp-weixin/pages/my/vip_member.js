(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/vip_member"],{3274:function(n,t,e){"use strict";e.r(t);var i=e("3c2a"),o=e("f209");for(var a in o)"default"!==a&&function(n){e.d(t,n,(function(){return o[n]}))}(a);e("91f3");var r,u=e("f0c5"),c=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"773fe2fc",null,!1,i["a"],r);t["default"]=c.exports},"3c2a":function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return i}));var i={zsTitle:function(){return e.e("components/zs-title/zs-title").then(e.bind(null,"f368"))},uIcon:function(){return e.e("uview-ui/components/u-icon/u-icon").then(e.bind(null,"c93f"))},uParse:function(){return Promise.all([e.e("common/vendor"),e.e("uview-ui/components/u-parse/u-parse")]).then(e.bind(null,"5073"))},uPopup:function(){return e.e("uview-ui/components/u-popup/u-popup").then(e.bind(null,"dc81"))},zsButton:function(){return e.e("components/zs-button/zs-button").then(e.bind(null,"e692"))}},o=function(){var n=this,t=n.$createElement;n._self._c},a=[]},"5d5a":function(n,t,e){},6022:function(n,t,e){"use strict";(function(n){function e(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function i(n){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?e(Object(i),!0).forEach((function(t){o(n,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(i,t))}))}return n}function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{list:[],buy_ind:-1,huiy_show:!1,datas:"",show:!1,pay:[{name:"支付宝",index:0},{name:"微信支付",index:1},{name:"余额支付",index:2}],pay_ind:0,title_val:"",ppid_number:0,people_invited:0}},onLoad:function(){a=this,this.pay=[{name:"微信支付",index:1},{name:"余额支付",index:2}],this.pay_ind=1,this.pag_data=n.getStorageSync("menber_json"),this.page_reader();var t=n.getStorageSync("viptype");console.log(t),this.huiy_show=!!t},onUnload:function(){clearInterval(this.time)},methods:{go_to:function(){this.com.navto("./aboutus")},page_reader:function(){var n=this;this.$api.get("vip").then((function(t){console.log(t),n.list=t.data,n.people_invited=t.data.people_invited,n.ppid_number=t.data.ppid_number,n.title_val=t.data.middle[0].content,console.log(n.people_invited),console.log(n.ppid_number)}))},app_share:function(){this.wxShare()},go_getvip:function(){var n=this;this.$api.put("vip").then((function(t){console.log(t),n.com.msg(t.message),n.page_reader()}))},pay_type:function(n){console.log(n),this.pay_ind=n},buy_cli:function(n){this.buy_ind=n.id,this.datas=n},cli_quest:function(n){this.title_val=n},zfb_alipay:function(t){n.requestPayment({provider:"alipay",orderInfo:t,success:function(t){n.showToast({title:"支付成功..",icon:"none"}),a.page_reader()},fail:function(t){n.showToast({title:"失败",icon:"none"})}})},weixin:function(t){var e={provider:"wxpay",timeStamp:t.timeStamp.toString(),nonceStr:t.nonceStr,package:t.package,signType:t.signType,paySign:t.paySign};console.log(e),n.requestPayment(i(i({},e),{},{success:function(t){n.showToast({title:"支付成功..",icon:"none"}),a.page_reader()},fail:function(t){console.log(t),n.showToast({title:"支付失败",icon:"none"})}}))},immediately_k:function(t){var e=this,i={vip_id:this.buy_ind,type:this.pay_ind,wechat_applet:2};this.$api.post("vippay",i).then((function(t){1==t.status?(0==e.pay_ind?e.zfb_alipay(t.data):1==e.pay_ind?e.weixin(t.data):(n.showToast({title:"支付成功..",icon:"none"}),e.page_reader()),e.show=!1):n.showToast({title:"支付失败..",icon:"none"})}))},go_imment:function(){-1==this.buy_ind?this.com.msg("请选择开通类型"):this.show=!0}}};t.default=r}).call(this,e("543d")["default"])},"8b46":function(n,t,e){"use strict";(function(n){e("4963");i(e("66fd"));var t=i(e("3274"));function i(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e("543d")["createPage"])},"91f3":function(n,t,e){"use strict";var i=e("5d5a"),o=e.n(i);o.a},f209:function(n,t,e){"use strict";e.r(t);var i=e("6022"),o=e.n(i);for(var a in i)"default"!==a&&function(n){e.d(t,n,(function(){return i[n]}))}(a);t["default"]=o.a}},[["8b46","common/runtime","common/vendor"]]]);