(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/vip-confirm-order/added-services","components/drag-button/drag-button"],{"07bc":function(t,i,e){"use strict";var n=e("35b5"),o=e.n(n);o.a},"11a0":function(t,i,e){},"35b5":function(t,i,e){},"5d06":function(t,i,e){"use strict";var n=e("11a0"),o=e.n(n);o.a},6543:function(t,i,e){"use strict";e.r(i);var n=e("6a00"),o=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=o.a},"6a00":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;n(e("eeb7"));function n(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{premium:"3",giftList:[],baof:0,itemid:0,total:0,datas:""}},onLoad:function(t){console.log(t),this.baof=t.price,t.data?(this.datas=JSON.parse(t.data),console.log(this.datas.list),this.giftList=this.datas.list,this.itemid=this.datas.list[0].id,this.totalMoney()):this.page_reader()},methods:{totalMoney:function(){var t=this;this.total=0,this.giftList.forEach((function(i){i.counds>0&&(t.total+=i.price*i.counds)}))},btnClick:function(){this.com.navto("../../pages/service/service")},item_cli:function(t,i){this.itemid=t,0==this.giftList[i].counds&&(this.giftList[i].counds=1,this.totalMoney(),this.$forceUpdate())},page_reader:function(){var t=this;this.$api.get("accessories").then((function(i){console.log(i),1==i.status&&(t.giftList=i.data,t.itemid=i.data[0].id,i.data.forEach((function(t){t.counds=0})))}))},valChange:function(t,i){this.giftList[i].counds=t.value,this.totalMoney(),this.$forceUpdate()},skipVipConfirmOrder:function(){var i="",e="",n=this.giftList;this.giftList.forEach((function(t){t.counds>0&&(i+=t.id+",",e+=t.counds+",",n.forEach((function(i){t.id==i.id&&(i.counds=t.counds)})))}));var o={id:i.substr(0,i.length-1),count:e.substr(0,e.length-1),total:this.total,list:n};t.setStorageSync("ids",o),t.navigateBack()}}};i.default=o}).call(this,e("543d")["default"])},"6aeb":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var o=function(){var t=this,i=t.$createElement;t._self._c},s=[]},"80ff":function(t,i,e){"use strict";e.r(i);var n=e("84ab"),o=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=o.a},"84ab":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={name:"drag-button",props:{isDock:{type:Boolean,default:!1},existTabBar:{type:Boolean,default:!1}},data:function(){return{top:0,left:0,width:0,height:0,offsetWidth:0,offsetHeight:0,windowWidth:0,windowHeight:0,isMove:!0,edge:10,text:"按钮"}},mounted:function(){var i=this,e=t.getSystemInfoSync();this.windowWidth=e.windowWidth,this.windowHeight=e.windowHeight,e.windowTop&&(this.windowHeight+=e.windowTop);var n=t.createSelectorQuery().in(this);n.select("#_drag_button").boundingClientRect((function(t){i.width=t.width,i.height=t.height,i.offsetWidth=t.width/2,i.offsetHeight=t.height/2,i.left=i.windowWidth-i.width-i.edge,i.top=i.windowHeight-i.height-i.edge})).exec()},methods:{click:function(){this.$emit("btnClick")},touchstart:function(t){this.$emit("btnTouchstart")},touchmove:function(t){if(1!==t.touches.length)return!1;this.isMove=!0,this.left=t.touches[0].clientX-this.offsetWidth;var i=t.touches[0].clientY-this.offsetHeight,e=this.windowHeight-this.height-this.edge;i<this.edge?this.top=this.edge:this.top=i>e?e:i},touchend:function(t){if(this.isDock){var i=this.windowWidth-this.width-this.edge;this.left<this.windowWidth/2-this.offsetWidth?this.left=this.edge:this.left=i}this.isMove=!1,this.$emit("btnTouchend")}}};i.default=e}).call(this,e("543d")["default"])},"93ad":function(t,i,e){"use strict";e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var n={uIcon:function(){return e.e("uview-ui/components/u-icon/u-icon").then(e.bind(null,"10332"))},uNumberBox:function(){return e.e("uview-ui/components/u-number-box/u-number-box").then(e.bind(null,"85d4"))},dragButton:function(){return Promise.resolve().then(e.bind(null,"eeb7"))}},o=function(){var t=this,i=t.$createElement,e=(t._self._c,t.total.toFixed(2));t.$mp.data=Object.assign({},{$root:{g0:e}})},s=[]},ea12:function(t,i,e){"use strict";e.r(i);var n=e("93ad"),o=e("6543");for(var s in o)"default"!==s&&function(t){e.d(i,t,(function(){return o[t]}))}(s);e("07bc");var u,a=e("f0c5"),c=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);i["default"]=c.exports},eeb7:function(t,i,e){"use strict";e.r(i);var n=e("6aeb"),o=e("80ff");for(var s in o)"default"!==s&&function(t){e.d(i,t,(function(){return o[t]}))}(s);e("5d06");var u,a=e("f0c5"),c=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);i["default"]=c.exports},fce9:function(t,i,e){"use strict";(function(t){e("b7aa");n(e("66fd"));var i=n(e("ea12"));function n(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,e("543d")["createPage"])}},[["fce9","common/runtime","common/vendor"]]]);