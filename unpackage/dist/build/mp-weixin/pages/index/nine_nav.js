(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/nine_nav"],{"077f":function(t,a,e){"use strict";e.r(a);var n=e("f5d6"),i=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);a["default"]=i.a},"166d":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return n}));var n={zsHxNavbar:function(){return e.e("components/zs-hx-navbar/zs-hx-navbar").then(e.bind(null,"0b00"))},zsShoplistType:function(){return e.e("components/zs-shoplist-type/zs-shoplist-type").then(e.bind(null,"6090"))}},i=function(){var t=this,a=t.$createElement;t._self._c},s=[]},"39ff":function(t,a,e){"use strict";var n=e("e232"),i=e.n(n);i.a},"5f66":function(t,a,e){"use strict";e.r(a);var n=e("166d"),i=e("077f");for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);e("39ff"),e("8432");var r,o=e("f0c5"),l=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"6f3b8f92",null,!1,n["a"],r);a["default"]=l.exports},8432:function(t,a,e){"use strict";var n=e("dc49"),i=e.n(n);i.a},"95fd":function(t,a,e){"use strict";(function(t){e("b7aa");n(e("66fd"));var a=n(e("5f66"));function n(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("543d")["createPage"])},dc49:function(t,a,e){},e232:function(t,a,e){},f5d6:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{config:{backgroundColor:[1,"#293C79"],color:"#ffffff",search:{value:"",placeholder:"",disabled:!0,bgColor:"#ffffff"}},nav:[],currend:0,shop_list:[],lists:[],page_login:!0,lv:0,params:[],filtrate:0,current_page:1,last_page:1,loadingText:"上拉加载更多",label_list:{}}},onReachBottom:function(){if(this.current_page!==this.last_page){if("正在加载中..."!==this.loadingText){this.loadingText="正在加载中...",this.current_page=this.current_page+1,this.params.page=this.current_page;var t={shop_label_texture_id:this.currend,page:this.current_page};1==this.filtrate?this.get_data(this.params):this.get_data(t)}}else this.loadingText="没有更多了"},onLoad:function(a){var e=t.getStorageSync("member_info");this.lv=e.lv,this.nav=JSON.parse(a.data),this.currend=a.id,this.get_label_list(),this.nav_cli(a.id)},methods:{get_label_list:function(){var t=this;this.$api.get("screen_label").then((function(a){1==a.status&&(t.label_list=a.data)}))},searchClick:function(){this.com.navto("./search")},shop_confim:function(t){this.current_page=1,this.shop_list=[],this.filtrate=1;var a={};a=t,a.page=this.current_page,a.shop_label_texture_id=this.currend,this.params=a,this.get_data(this.params)},nav_cli:function(t){var a=this;this.page_login=!1,this.currend=t,this.current_page=1,this.filtrate=0,this.shop_list=[];var e={shop_label_texture_id:t,page:this.current_page};this.get_data(e),this.$api.get("screen",{type:2}).then((function(t){1==t.status&&(a.lists=t.data)}))},get_data:function(t){var a=this;console.log(t),this.$api.post("goods",t).then((function(t){if(1==t.status){var e=t.data.current_page,n=t.data.last_page;t.data.data&&(a.page_login=!0,a.last_page=t.data.last_page,a.current_page=t.data.current_page,a.shop_list=a.shop_list.concat(t.data.data),console.log(a.shop_list),a.loadingText=e==n?"没有更多了":"上拉加载更多")}}))}}};a.default=e}).call(this,e("543d")["default"])}},[["95fd","common/runtime","common/vendor"]]]);