(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/searchResult"],{"199f":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}));var n={zsHxNavbar:function(){return a.e("components/zs-hx-navbar/zs-hx-navbar").then(a.bind(null,"0b00"))},zsShoplistType:function(){return a.e("components/zs-shoplist-type/zs-shoplist-type").then(a.bind(null,"6090"))}},i=function(){var t=this,e=t.$createElement;t._self._c},s=[]},"4a08":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{config:{backgroundColor:[1,"#293C79"],color:"#ffffff",search:{value:"",placeholder:"",disabled:!0,bgColor:"#ffffff"}},nav:[],currend:0,shop_list:[],lists:[],page_login:!0,lv:0,params:[],filtrate:0,current_page:1,last_page:1,loadingText:"上拉加载更多",key:"",label_list:{}}},onReachBottom:function(){if(this.current_page!==this.last_page){if("正在加载中..."!==this.loadingText){this.loadingText="正在加载中...",this.current_page=this.current_page+1,this.params.page=this.current_page;var t={key:this.key,page:this.current_page};1==this.filtrate?this.get_data(this.params):this.get_data(t)}}else this.loadingText="没有更多了"},onLoad:function(e){var a=t.getStorageSync("member_info");this.lv=a.lv,e.key&&(this.config.search.value=e.key,this.key=e.key),this.get_label_list(),this.get_screen()},methods:{get_label_list:function(){var t=this;this.$api.get("screen_label").then((function(e){1==e.status&&(t.label_list=e.data)}))},searchClick:function(){t.navigateBack()},shop_confim:function(t){this.current_page=1,this.shop_list=[],this.filtrate=1;var e={};e=t,e.page=this.current_page,e.key=this.key,this.params=e,this.get_data(this.params)},nav_cli:function(t){this.page_login=!1,this.currend=t,this.current_page=1,this.filtrate=0,this.shop_list=[]},get_screen:function(){var t=this;this.$api.get("screen",{cate_id:0}).then((function(e){if(1==e.status){t.lists=e.data;var a={key:t.key,page:t.current_page};t.get_data(a)}}))},get_data:function(t){var e=this;console.log(t),this.$api.post("goods",t).then((function(t){if(1==t.status){var a=t.data.current_page,n=t.data.last_page;t.data.data&&(e.page_login=!0,e.last_page=t.data.last_page,e.current_page=t.data.current_page,e.shop_list=e.shop_list.concat(t.data.data),console.log(e.shop_list),e.loadingText=a==n?"没有更多了":"上拉加载更多")}}))}}};e.default=a}).call(this,a("543d")["default"])},"73d9":function(t,e,a){"use strict";(function(t){a("b7aa");n(a("66fd"));var e=n(a("89bc"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])},"77cd":function(t,e,a){"use strict";a.r(e);var n=a("4a08"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},"89bc":function(t,e,a){"use strict";a.r(e);var n=a("199f"),i=a("77cd");for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("d1c5"),a("e7b6");var r,c=a("f0c5"),o=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"f95ea988",null,!1,n["a"],r);e["default"]=o.exports},acfde:function(t,e,a){},d1c5:function(t,e,a){"use strict";var n=a("ecfd"),i=a.n(n);i.a},e7b6:function(t,e,a){"use strict";var n=a("acfde"),i=a.n(n);i.a},ecfd:function(t,e,a){}},[["73d9","common/runtime","common/vendor"]]]);