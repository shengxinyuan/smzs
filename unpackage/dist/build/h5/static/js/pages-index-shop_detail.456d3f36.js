(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-shop_detail"],{"146f":function(t,e,i){var a=i("94f1");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("29e87778",a,!0,{sourceMap:!1,shadowMode:!1})},"2f16":function(t,e,i){"use strict";i.r(e);var a=i("317d"),n=i("ee93");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("ca01"),i("9cbf");var s,c=i("f0c5"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"6ae0e675",null,!1,a["a"],s);e["default"]=r.exports},"317d":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={zsHxNavbar:i("d1b1").default,uIcon:i("b4b8").default,uParse:i("9a03").default,zsShoppingList:i("c2ea").default,uPopup:i("3862").default,uNumberBox:i("348c").default,zsShare:i("ab3f").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("zs-hx-navbar",{ref:"hxnb",attrs:{config:t.config},on:{clickBtn:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickBtn.apply(void 0,arguments)}}},[t.isShow?i("template",{attrs:{slot:"center"},slot:"center"},[i("v-uni-view",{staticClass:"center"},t._l(t.headlist,(function(e,a){return i("v-uni-view",{key:a,staticClass:"center_it",class:{active:t.head_ind==a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.head_nav_cli(a)}}},[t._v(t._s(e.name))])})),1)],1):t._e()],2),i("v-uni-view",{staticClass:"carousel"},[t.videoShow?[i("v-uni-swiper",{attrs:{duration:400,interval:3e3},on:{transition:function(e){arguments[0]=e=t.$handleEvent(e),t.transition.apply(void 0,arguments)}}},[i("v-uni-swiper-item",{staticClass:"swiper-item"},[i("v-uni-view",{staticClass:"video-wrapper"},[i("v-uni-video",{attrs:{id:"myVideo",src:t.shop_det.video,autoplay:!0,loop:!0,"enable-progress-gesture":!1,"show-fullscreen-btn":!1},on:{pause:function(e){arguments[0]=e=t.$handleEvent(e),t.stop_video.apply(void 0,arguments)},ended:function(e){arguments[0]=e=t.$handleEvent(e),t.end_video.apply(void 0,arguments)}}})],1)],1)],1)]:[i("v-uni-swiper",{attrs:{circular:!0,autoplay:t.sw_autoplay,duration:400,interval:3e3},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},t._l(t.shop_det.album,(function(e,a){return i("v-uni-swiper-item",{key:a,staticClass:"swiper-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.banner_cli(a)}}},[t.videoShow?t._e():[i("v-uni-view",{staticClass:"image-wrapper"},[i("v-uni-image",{staticClass:"loaded",attrs:{src:e.img0,mode:"aspectFill"}})],1),t.shop_det.video&&0==a?i("v-uni-image",{staticClass:"bofang",attrs:{src:"https://zuanshi.semoh.cn/applet_static/bofang.png",mode:""}}):t._e()]],2)})),1)],i("v-uni-view",{staticClass:"swiper-dots"},[i("v-uni-text",{staticClass:"num"},[t._v(t._s(t.swiperCurrent+1))]),i("v-uni-text",{staticClass:"sign"},[t._v("/")]),t.shop_det.album?i("v-uni-text",{staticClass:"num"},[t._v(t._s(t.shop_det.album.length))]):t._e()],1)],2),i("v-uni-view",{staticClass:"introduce-section"},[i("v-uni-view",{staticClass:"price-box"},[t.vip_type?i("v-uni-view",{staticClass:"price-box_l",staticStyle:{color:"#e95069"}},[i("v-uni-text",{staticClass:"price-tip"},[t._v("¥")]),i("v-uni-text",{staticClass:"price"},[t._v(t._s(t.shop_det.price_vip))])],1):i("v-uni-view",{staticClass:"price-box_l"},[i("v-uni-text",{staticClass:"price-tip"},[t._v("¥")]),i("v-uni-text",{staticClass:"price"},[t._v(t._s(t.shop_det.price))]),i("v-uni-text",{staticClass:"m-price-tip"},[t._v("¥")]),i("v-uni-text",{staticClass:"m-price"},[t._v(t._s(t.shop_det.price_vip))]),i("v-uni-image",{attrs:{src:"https://zuanshi.semoh.cn/applet_static/index/pf.png",mode:"aspectFill"}})],1),i("v-uni-view",{staticClass:"price-box_r"},[i("v-uni-view",{staticClass:"min-box"},[t.shop_det.T_F_collect?i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.like_collect(t.shop_det.id)}}},[i("u-icon",{staticClass:"s_icon",attrs:{name:"heart-fill",color:"#DD524D",size:"38"}}),i("v-uni-view",{staticStyle:{color:"#DD524D"}},[t._v("已收藏")])],1):i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.like_collect(t.shop_det.id)}}},[i("u-icon",{staticClass:"s_icon",attrs:{name:"heart",size:"38"}}),i("v-uni-view",[t._v("收藏")])],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.vip_type,expression:"vip_type"}],staticClass:"min-box-tt",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.skipShare.apply(void 0,arguments)}}},[i("u-icon",{attrs:{name:"share",size:"42"}}),i("v-uni-view",[t._v("分享")])],1)],1)],1)],1),i("v-uni-view",{staticClass:"shopping_text"},[i("v-uni-view",{staticClass:"shop_names"},[i("v-uni-text",{staticClass:"zp"},[t._v("正品")]),i("v-uni-text",{staticClass:"shopname"},[t._v(t._s(t.shop_det.title))])],1),i("v-uni-view",{staticClass:"shop_introduce"},[t._v(t._s(t.shop_det.remark))])],1),t.vip_type?t._e():i("v-uni-view",{staticClass:"text-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goto_page("../my/vip_member")}}},[i("v-uni-view",{staticClass:"text-box"},[i("v-uni-view",{},[i("v-uni-text",[t._v("开通")]),i("v-uni-text",{staticStyle:{"font-weight":"bold"}},[t._v("超级会员")]),i("v-uni-text",[t._v("，预估额外省")]),i("v-uni-text",{staticStyle:{color:"#df3636"}},[t._v(t._s((t.shop_det.price-t.shop_det.price_vip).toFixed(2))+"元")])],1),i("v-uni-view",{staticClass:"text-item_r"},[i("v-uni-text",{staticStyle:{"margin-right":"10upx"}},[t._v("立即开通")]),i("u-icon",{attrs:{name:"arrow-right"}})],1)],1)],1),i("v-uni-view",{staticClass:"text-des"},[i("v-uni-text",[t._v(t._s(t.shop_det.remark))])],1),i("v-uni-view",{staticClass:"Rapid_delivery"},[i("v-uni-image",{attrs:{src:"https://zuanshi.semoh.cn/applet_static/index/ji.png",mode:"aspectFill"}}),i("v-uni-text",{staticStyle:{"margin-right":"16upx"}},[t._v(t._s(t.shop_det.letter))])],1),i("v-uni-view",{staticClass:"specification"},t._l(t.stynumber,(function(e,a){return i("v-uni-view",{staticClass:"child"},[t._v(t._s(e.name)+"："+t._s(e.num))])})),1),i("v-uni-view",{staticClass:"eva-section evaluate",attrs:{id:"evaluate"}},[t.commentlist?i("v-uni-view",{staticClass:"section_title",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goto_page("./evaluate?id="+t.shop_id)}}},[i("v-uni-view",{staticClass:"tit_l"},[i("v-uni-text",{staticClass:"pk"}),i("v-uni-text",{staticClass:"pj"},[t._v("宝贝评价")]),i("v-uni-text",{staticClass:"numbers"},[t._v("（"+t._s(t.commentlist.total)+"）")])],1),i("v-uni-view",{staticStyle:{color:"#999","font-size":"24upx"}},[t._v("查看更多"),i("u-icon",{attrs:{name:"arrow-right"}})],1)],1):t._e(),i("v-uni-view",{staticClass:"eva-box"},t._l(t.commentlist.data,(function(e,a){return i("v-uni-view",{staticClass:"eval_con"},[i("v-uni-view",{staticClass:"order_head"},[i("v-uni-view",{staticClass:"img"},[i("v-uni-image",{attrs:{src:e.avatar,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"shop_name"},[t._v(t._s(e.nickname))])],1),i("v-uni-view",{staticClass:"shop_name_f"}),i("v-uni-view",{staticClass:"order_time"},[t._v(t._s(e.create_time))])],1),i("v-uni-view",{staticClass:"order_con"},[t._v(t._s(e.remark))]),i("v-uni-view",{staticClass:"order_img"},t._l(e.img,(function(t){return i("v-uni-image",{attrs:{src:t,mode:"aspectFill"}})})),1)],1)})),1)],1),i("v-uni-view",{staticClass:"detail-desc details_parse",attrs:{id:"details_parse"}},[i("v-uni-view",{staticClass:"d-header"},[i("v-uni-text",[t._v("宝贝详情")])],1),i("u-parse",{attrs:{html:t.shop_det.content}})],1),i("v-uni-view",{staticClass:"tuijian",attrs:{id:"tuijian"}},[i("v-uni-image",{staticStyle:{width:"100%",height:"80rpx","margin-top":"20rpx"},attrs:{src:"https://zuanshi.semoh.cn/applet_static/my/tuijain_bgimg.png",mode:""}}),i("v-uni-view",{staticStyle:{"margin-bottom":"120rpx"}},[i("zs-shopping-list",{attrs:{shop_list:t.shop_list,lv:t.member.lv}})],1)],1),i("v-uni-view",{staticClass:"add_bottom"},[i("v-uni-view",{staticClass:"add_con"},[i("v-uni-view",{staticClass:"three_icons",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.skipIndex.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"https://zuanshi.semoh.cn/applet_static/index/index.png",mode:"widthFix"}}),i("v-uni-view",[t._v("首页")])],1),i("v-uni-view",{staticClass:"three_icons",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goto_page("../service/service")}}},[i("v-uni-image",{attrs:{src:"https://zuanshi.semoh.cn/applet_static/index/kf.png",mode:"widthFix"}}),i("v-uni-view",[t._v("客服")])],1),i("v-uni-view",{staticClass:"three_icons",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goto_cart.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"https://zuanshi.semoh.cn/applet_static/index/cart.png",mode:"widthFix"}}),i("v-uni-view",[t._v("购物车")])],1),i("v-uni-view",{staticClass:"anniu"},[i("v-uni-view",{staticClass:"add_car",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.payment_yes(0)}}},[t._v("加入购物车")]),i("v-uni-view",{staticClass:"buy",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.payment_yes(1)}}},[t._v("立即购买")])],1)],1)],1),i("u-popup",{attrs:{mode:"bottom"},model:{value:t.skuShow,callback:function(e){t.skuShow=e},expression:"skuShow"}},[i("v-uni-scroll-view",{attrs:{"scroll-y":"true"}},[i("v-uni-view",{staticClass:"attr-content",staticStyle:{height:"900rpx",position:"relative"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[t._l(t.shopsku.title,(function(e,a){return i("v-uni-view",{staticClass:"attr-list"},[i("v-uni-text",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(e.title.title))]),i("v-uni-view",{staticClass:"item-list"},t._l(e.data,(function(n,o){return n.pid===e.id&&3!=n.pid?i("v-uni-text",{key:o,staticClass:"tit",class:{selected:n.selected},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectSpec(a,o,n.pid)}}},[t._v(t._s(n.title))]):t._e()})),1)],1)})),""!=t.previewImage?i("v-uni-view",{},[i("v-uni-image",{staticStyle:{width:"160rpx",height:"160rpx"},attrs:{src:t.previewImage,mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.perview.apply(void 0,arguments)}}})],1):t._e()],2),t._l(t.details,(function(e,a){return i("v-uni-view",{key:a,staticClass:"jg_sty",class:{jactive:t.jg_ind==e.id},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.zhifu(e)}}},[i("v-uni-view",{staticClass:"jg_sty_t"},[i("v-uni-view",[t._v("条码："+t._s(e.bar_code))]),i("v-uni-view",[t._v("克重："+t._s((e.weight/1).toFixed(2))+"g")])],1),i("v-uni-view",{staticClass:"jg_sty_b"},[t.vip_type?[i("v-uni-view",[t._v("工费：￥"+t._s((e.vip_labor/1/(e.weight/1)).toFixed(2))),i("v-uni-text",[t._v("/g")])],1)]:[i("v-uni-view",[t._v("工费：￥"+t._s((e.normal_labor/1/(e.weight/1)).toFixed(2))),i("v-uni-text",[t._v("/g")])],1)],i("v-uni-view",{},[t._v("库存："+t._s(e.stock))])],2),i("v-uni-view",{staticClass:"jg_sty_t",staticStyle:{"line-height":"40rpx"}},[i("v-uni-text",{staticStyle:{width:"50%"}},[t._v("手寸："+t._s(e.ring_arm_size||"无"))]),i("v-uni-text",{staticStyle:{width:"50%"}},[t._v("备注："+t._s(e.remark||"无"))])],1),t.vip_type?i("v-uni-view",{staticClass:"jg_r"},[t._v("￥"),i("v-uni-text",[t._v(t._s(e.price_vip))])],1):i("v-uni-view",{staticClass:"jg_r"},[t._v("￥"),i("v-uni-text",[t._v(t._s(e.price_normal))])],1)],1)})),i("v-uni-view",{staticStyle:{height:"180rpx"}}),i("v-uni-view",{staticStyle:{position:"fixed",bottom:"0",left:"0",right:"0",padding:"0 20rpx","background-color":"#FFFFFF"}},[i("v-uni-view",{staticStyle:{margin:"20rpx 0",display:"flex","align-items":"center","justify-content":"space-between",flex:"1"}},[i("v-uni-view",{staticStyle:{"font-weight":"bold"}},[t._v("数量")]),i("u-number-box",{attrs:{min:1,max:t.stocks,step:1,"long-press":!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.valChange.apply(void 0,arguments)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),1==t.shop_type?i("v-uni-button",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.shop_pay(1)}}},[t._v("立即购买")]):i("v-uni-button",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.shop_pay(2)}}},[t._v("加入购物车")])],1)],2)],1)],1),t.return_top?i("v-uni-view",{staticClass:"teturn_top",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.head_nav_cli(0)}}},[i("u-icon",{attrs:{name:"arrow-upward"}})],1):t._e(),i("zs-share",{ref:"share",attrs:{contentHeight:400},on:{shaer_app:function(e){arguments[0]=e=t.$handleEvent(e),t.shaer_app.apply(void 0,arguments)}}})],1)},o=[]},"5d6b":function(t,e,i){"use strict";(function(t){i("4160"),i("ac1f"),i("5319"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i("f723");var a={data:function(){return{isShow:!1,config:{centerSlot:!0,barPlaceholder:!1,backgroundColor:[0,"#ffffff"],slideBackgroundColor:[1,"#ffffff"],rightButton:[{key:"btn1",icon:"&#xe6eb;",position:"left"}]},value:1,shop_num:1,vip_type:!1,shop_type:0,jg_ind:"",bgcolor:"",opacity:0,head_ind:0,specClass:"none",specSelected:[],swiperCurrent:0,favorite:!0,shareList:[],imgList:[],headlist:[{name:"商品"},{name:"评价"},{name:"详情"},{name:"推荐"}],pingl:0,tuij:0,detail_shop:0,shop_id:0,shop_det:"",stynumber:[],shop_list:"",member:"",shopsku:"",shoptype_id:"",sku_ids:"",details:"",commentlist:"",autoplay:!1,return_top:!1,videoShow:!1,stock:0,skuShow:!1,stocks:1,isLogin:!1,sw_autoplay:!0,previewImage:""}},onPageScroll:function(t){this.$refs.hxnb.pageScroll(t),t.scrollTop>50?this.isShow=!0:this.isShow=!1,t.scrollTop>=this.pingl&&t.scrollTop<this.detail_shop?this.head_ind=1:t.scrollTop>=this.detail_shop&&t.scrollTop<this.tuij?this.head_ind=2:t.scrollTop>=this.tuij?this.head_ind=3:0==t.scrollTop&&(this.head_ind=0)},onLoad:function(e){var i=uni.getStorageSync("token");this.isLogin=!!i,t.log(e),this.shop_id=e.shop_id,this.member=uni.getStorageSync("member_info");var a=uni.getStorageSync("viptype");this.vip_type=!!a,this.page_render()},onShow:function(){},methods:{onClickBtn:function(t){"btn1"==t.key&&this.share()},stop_video:function(){this.videoShow=!1,this.sw_autoplay=!0},end_video:function(){this.videoShow=!1,this.sw_autoplay=!0},onc_bj:function(t){plus.runtime.openURL("https://uland.taobao.com/sem/tbsearch?refpid=mm_26632258_3504122_32538762&keyword="+t)},valChange:function(e){t.log("当前值为: "+e.value),this.shop_num=e.value},page_render:function(){var e=this,i=this.member.id||0;this.$api.get("goods/"+this.shop_id+"&member_id="+i).then((function(i){1==i.status&&(e.shop_det=i.data,t.log(e.shop_det),e.shoptype_id=i.data.id,e.stynumber=[{name:"款号",num:i.data.model_no},{name:"库存",num:i.data.stock},{name:"成色",num:i.data.texture},{name:"销量",num:i.data.sale}],e.sku())})),this.$api.post("goods",{is_recommend:1}).then((function(t){1==t.status&&(e.shop_list=t.data.data)})),this.$api.get("commentlist/"+this.shop_id).then((function(t){1==t.status&&(e.commentlist=t.data)}))},like_collect:function(t){var e=this;this.$api.put("collect",{id:t}).then((function(t){1==t.status&&e.page_render()}))},shop_pay:function(t){var e=this;if(!this.isLogin)return this.skuShow=!1,void uni.showModal({content:"您还未登录,是否登录?",success:function(t){t.confirm&&e.com.rel("/pages/login/login")},fail:function(){},complete:function(){}});var i={goods_id:this.shop_id,sku_id:this.jg_ind,count:this.shop_num,type:0};""!=this.jg_ind?this.shop_num>this.stock?this.com.msg("库存不足~"):(this.toggleSpec(),1==t?(this.skuShow=!1,this.com.navto("../vip-confirm-order/vip-confirm-order?data="+JSON.stringify(i))):this.$api.post("cart",{shop_goods_id:this.shop_id,count:this.shop_num,shop_goods_sku_id:this.jg_ind}).then((function(t){e.com.msg(t.message),e.skuShow=!1}))):this.com.msg("请选择规格")},zhifu:function(e){t.log(e),this.previewImage=e.image,this.value=1,this.jg_ind=e.id,this.stock=e.stock,this.stocks=e.stock,t.log(this.stocks)},goto_cart:function(){uni.redirectTo({url:"../cart/cart"})},goto_page:function(t){this.com.navto(t)},skipIndex:function(){uni.redirectTo({url:"./index"})},head_nav_cli:function(e){this.head_ind=e;var i=this;0==e?uni.pageScrollTo({scrollTop:160,duration:0,success:function(t){this.head_ind=0}}):1==e?uni.pageScrollTo({scrollTop:i.pingl,duration:0,success:function(t){this.head_ind=1}}):2==e?uni.pageScrollTo({scrollTop:i.detail_shop,duration:0,success:function(t){this.head_ind=2}}):3==e&&(t.log(e),uni.pageScrollTo({scrollTop:i.tuij,duration:200,success:function(t){this.head_ind=3}}))},swiperChange:function(t){this.swiperCurrent=t.detail.current},transition:function(t){this.videoShow=!1,this.sw_autoplay=!0},banner_cli:function(t){if(this.shop_det.video)if(0==t)this.videoShow=!0,this.sw_autoplay=!1;else{var e=[];this.shop_det.album.forEach((function(t,i){0!=i&&e.push(t.img0)})),uni.previewImage({urls:e,loop:!0})}else{var i=[];this.shop_det.album.forEach((function(t,e){i.push(t.img0)})),uni.previewImage({urls:i,loop:!0})}},perview:function(){var t=[];this.details.forEach((function(e,i){t.push(e.image)})),uni.previewImage({current:this.previewImage,urls:t,loop:!0})},payment_yes:function(t){this.skuShow=!0,this.shop_type=t,this.sku()},sku:function(){var e=this;this.$api.get("sku",{type:0,id:this.shoptype_id}).then((function(i){t.log(i),1==i.status?(e.shopsku=i.data,e.details=i.data.data,t.log(e.details)):uni.showToast({title:i.message,icon:"none"})}))},goto_top:function(){uni.navigateBack()},toggleSpec:function(){},selectSpec:function(e,i,a){var n=this,o=this.shopsku.title[e];o.data.forEach((function(t){t.pid===a&&n.$set(t,"selected",!1)})),this.$set(o.data[i],"selected",!0),this.specSelected="",this.shopsku.title.forEach((function(e){e.data.forEach((function(i){if(1==i.selected){n.specSelected+=i.id+",";var a="";n.sku_ids=n.specSelected.substr(0,n.specSelected.length-1),a=n.sku_ids.replace(/\,/g,""),e.data.length==a.length&&n.$api.get("sku",{type:0,id:n.shoptype_id,sku_ids:n.sku_ids}).then((function(e){t.log(e),1==e.status&&(n.details=e.data.data)}))}}))}))},share:function(){this.$refs.share.toggleMask()},shaer_app:function(e){t.log(e),t.log(this.shop_det),t.log(this.shop_id);this.shop_id,this.member.id},onShareAppMessage:function(){},onShareTimeline:function(){},toFavorite:function(){this.favorite=!this.favorite},buy:function(){uni.navigateTo({url:"/pages/order/createOrder"})},stopPrevent:function(){},skipShare:function(){uni.navigateTo({url:"./mshare?data="+JSON.stringify(this.shop_det)})}},mounted:function(){var e=this,i=uni.createSelectorQuery();i.select("#evaluate").boundingClientRect((function(i){t.log(i),e.pingl=i.top+50})).exec(),i.select("#details_parse").boundingClientRect((function(i){t.log(i),e.detail_shop=i.top+50})).exec(),i.select("#tuijian").boundingClientRect((function(i){t.log(i),e.tuij=i.top+50})).exec()}};e.default=a}).call(this,i("5a52")["default"])},"94f1":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-6ae0e675]{padding-bottom:%?20?%}.center_tit[data-v-6ae0e675]{font-size:%?32?%;font-weight:700}.center[data-v-6ae0e675]{width:100%;font-size:%?28?%;display:flex;align-items:center;justify-content:center}.center .center_it[data-v-6ae0e675]{width:25%;text-align:center;position:relative}.center .center_it.active[data-v-6ae0e675]{color:#2d407a}.center .center_it.active[data-v-6ae0e675]:before{content:"";position:absolute;left:31%;bottom:16%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:%?6?%;width:38%;background-color:#2d407a;border-radius:4px;opacity:.8}.teturn_top[data-v-6ae0e675]{width:%?90?%;height:%?90?%;position:fixed;right:3%;bottom:%?130?%;background-color:#fff;border-radius:50%;text-align:center;line-height:%?90?%;font-size:%?40?%;box-shadow:1px 1px 3px #888}.header_bait[data-v-6ae0e675]{width:100%;height:%?160?%;background-color:#fff;padding-top:%?60?%;position:fixed;left:0;top:0;z-index:99}.header_bait .toubu[data-v-6ae0e675]{padding:0 3%;display:flex;justify-content:space-between;align-items:center}.header[data-v-6ae0e675]{width:100%;height:%?100?%;display:flex;justify-content:space-between;padding:0 4%;position:absolute;left:0;top:%?60?%;z-index:20}.header .header_left uni-image[data-v-6ae0e675]{width:%?64?%;height:%?64?%}.icon-you[data-v-6ae0e675]{\n  /* font-size: $font-base + 2upx; */color:#888}.carousel[data-v-6ae0e675]{height:%?720?%;position:relative}.carousel .video-wrapper[data-v-6ae0e675]{width:100%;height:100%;position:relative;display:flex;align-items:center;justify-content:center}.carousel uni-video[data-v-6ae0e675]{width:%?750?%;height:%?720?%}.carousel .swiper-dots[data-v-6ae0e675]{position:absolute;right:%?30?%;bottom:%?20?%;background-color:rgba(0,0,0,.5);display:inline-block;padding:%?4?% %?18?% %?6?% %?18?%;border-radius:%?50?%;color:#fff;font-size:%?24?%}.carousel uni-swiper[data-v-6ae0e675]{height:100%}.carousel .image-wrapper[data-v-6ae0e675]{width:100%;height:100%;position:relative}.carousel .swiper-item[data-v-6ae0e675]{display:flex;justify-content:center;align-content:center;height:%?750?%;overflow:hidden;position:relative}.carousel .swiper-item .bofang[data-v-6ae0e675]{position:absolute;top:46%;width:%?76?%;height:%?76?%}.carousel .swiper-item .loaded[data-v-6ae0e675]{width:100%;height:100%}.trabecula[data-v-6ae0e675]{width:100%;background-color:#1e2f65;height:%?62?%;color:#fff;line-height:%?62?%;padding:0 3%;font-size:%?26?%}\n/* 标题简介 */.introduce-section[data-v-6ae0e675]{background:#fff;padding:%?30?%;margin-top:%?10?%}.introduce-section .title[data-v-6ae0e675]{font-size:%?32?%\n  /* color: $font-color-dark; */}.introduce-section .price-box[data-v-6ae0e675]{display:flex;justify-content:space-between;align-items:center\n  /* color:$uni-color-primary; */}.introduce-section .price-box .price-box_l[data-v-6ae0e675]{display:flex;align-items:center}.introduce-section .price-box .price-box_l uni-image[data-v-6ae0e675]{width:%?58?%;height:%?24?%;margin-left:%?16?%}.introduce-section .price-box .price-box_l .m-price-tip[data-v-6ae0e675]{font-size:%?22?%;color:#e95069;margin-left:%?20?%}.introduce-section .price-box .price-box_r[data-v-6ae0e675]{text-align:center;display:flex;align-items:center}.introduce-section .price-box .price-box_r uni-image[data-v-6ae0e675]{width:%?38?%;height:%?38?%}.introduce-section .price-box .price-box_r uni-view[data-v-6ae0e675]{font-size:%?18?%}.introduce-section .price-box .price-box_r .min-box[data-v-6ae0e675]{margin-right:%?20?%}.introduce-section .price[data-v-6ae0e675]{font-size:%?54?%;font-weight:700;margin:0 %?10?%}.introduce-section .m-price[data-v-6ae0e675]{color:#e95069;font-size:%?30?%;margin-left:%?10?%}.introduce-section .coupon-tip[data-v-6ae0e675]{align-items:center;padding:%?4?% %?10?%;color:#fff;border-radius:%?6?%;line-height:1;-webkit-transform:translateY(%?-4?%);transform:translateY(%?-4?%)}.introduce-section .bot-row[data-v-6ae0e675]{display:flex;align-items:center;height:%?50?%\n  /* font-size: $font-sm; */\n  /* color: $font-color-light; */}.introduce-section .bot-row uni-text[data-v-6ae0e675]{flex:1}.shop_names[data-v-6ae0e675]{background-color:#fff;font-size:%?30?%;display:flex;align-items:center}.shop_names .zp[data-v-6ae0e675]{font-size:%?20?%;background-image:linear-gradient(90deg,#ff4362,#fd5538);padding:0 %?4?%;color:#fff;border-radius:%?6?%}.shop_names .shopname[data-v-6ae0e675]{font-weight:700;padding-left:%?10?%}.shopping_text[data-v-6ae0e675]{background-color:#fff;padding:0 0 %?20?% 3%;display:flex}.text-des[data-v-6ae0e675]{padding:0 %?20?% %?20?% %?20?%;font-size:%?24?%;background-color:#fff}.Rapid_delivery[data-v-6ae0e675]{padding:%?20?%;color:#999;font-size:%?22?%;background-color:#fff;display:flex;align-items:center}.Rapid_delivery uni-image[data-v-6ae0e675]{width:%?24?%;height:%?24?%;margin-right:%?16?%}.text-item[data-v-6ae0e675]{padding:0 %?20?% %?20?% %?20?%;color:#333;font-size:%?24?%;background-color:#fff}.text-item .text-box[data-v-6ae0e675]{width:100%;height:%?70?%;padding:0 %?30?%;background-color:#f6f8ff;border-radius:%?8?%;display:flex;justify-content:space-between;align-items:center}.specification[data-v-6ae0e675]{width:100%;display:flex;flex-wrap:wrap;font-size:%?24?%;margin:%?10?% 0;background-color:#fff;padding:0 3%;line-height:%?50?%;color:#666}.specification .child[data-v-6ae0e675]{width:50%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n/* 评价 */.eva-section[data-v-6ae0e675]{padding:%?20?% %?30?%;background:#fff}.eva-section .section_title[data-v-6ae0e675]{width:100%;display:flex;justify-content:space-between}.eva-section .section_title .tit_l[data-v-6ae0e675]{display:flex;align-items:center}.eva-section .section_title .tit_l .pk[data-v-6ae0e675]{display:inline-block;width:%?12?%;height:100%;background-image:linear-gradient(#445589,#fff);margin-right:%?16?%}.eva-section .section_title .tit_l .pj[data-v-6ae0e675]{font-size:%?28?%}.eva-section .section_title .tit_l .numbers[data-v-6ae0e675]{font-size:%?22?%}.eva-section .eva-box[data-v-6ae0e675]{width:100%}.eva-section .eva-box .eval_con[data-v-6ae0e675]{width:100%;display:flex;background-color:#fff;padding:2%;flex-wrap:wrap;border-bottom:%?1?% solid #f6f6f6}.eva-section .eva-box .eval_con .order_head[data-v-6ae0e675]{width:100%;height:%?80?%;display:flex;justify-content:space-between}.eva-section .eva-box .eval_con .order_head .img[data-v-6ae0e675]{display:flex}.eva-section .eva-box .eval_con .order_head .img uni-image[data-v-6ae0e675]{width:%?80?%;height:%?80?%;border-radius:%?80?%;background-color:#eee}.eva-section .eva-box .eval_con .order_head .img .shop_name[data-v-6ae0e675]{width:%?180?%;line-height:%?80?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:%?28?%;margin-left:%?20?%;font-weight:700}.eva-section .eva-box .eval_con .order_head .order_time[data-v-6ae0e675]{width:40%;line-height:%?70?%;text-align:right;font-size:%?26?%;color:#999}.eva-section .eva-box .eval_con .order_con[data-v-6ae0e675]{width:100%;font-size:%?30?%;line-height:%?52?%;padding:%?6?% 0}.eva-section .eva-box .eval_con .order_img[data-v-6ae0e675]{width:100%;display:flex}.eva-section .eva-box .eval_con .order_img uni-image[data-v-6ae0e675]{width:%?216?%;height:%?216?%;margin:%?10?%;background-color:#eee}\n/*  详情 */.detail-desc[data-v-6ae0e675]{background:#fff;margin-top:%?10?%}.detail-desc .d-header[data-v-6ae0e675]{display:flex;justify-content:center;align-items:center;height:%?80?%;font-size:%?30?%;\n  /* font-size: $font-base + 2upx; */\n  /* color: $font-color-dark; */position:relative}.detail-desc .d-header uni-text[data-v-6ae0e675]{padding:0 %?20?%;background:#fff;position:relative;z-index:1}.detail-desc .d-header[data-v-6ae0e675]:after{position:absolute;left:50%;top:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:%?300?%;height:0;content:"";border-bottom:1px solid #f6f6f6}\n/* 规格选择弹窗 */.attr-content[data-v-6ae0e675]{padding:%?10?% %?30?%}.attr-content .a-t[data-v-6ae0e675]{display:flex}.attr-content .a-t uni-image[data-v-6ae0e675]{width:%?170?%;height:%?170?%;flex-shrink:0;margin-top:%?-40?%;border-radius:%?8?%}.attr-content .a-t .right[data-v-6ae0e675]{display:flex;flex-direction:column;padding-left:%?24?%;\n  /* font-size: $font-sm + 2upx; */\n  /* color: $font-color-base; */line-height:%?42?%}.attr-content .a-t .right .price[data-v-6ae0e675]{\n  /* font-size: $font-lg; */\n  /* color: $uni-color-primary; */margin-bottom:%?10?%}.attr-content .a-t .right .selected-text[data-v-6ae0e675]{margin-right:%?10?%}.attr-content .attr-list[data-v-6ae0e675]{display:flex;flex-direction:column;\n  /* font-size: $font-base + 2upx; */\n  /* color: $font-color-base; */padding-top:%?30?%;padding-left:%?10?%}.attr-content .jg_sty[data-v-6ae0e675]{font-size:%?24?%;padding:%?20?%;width:100%;background-color:#f6f6f6;border-radius:%?20?%;margin:%?10?% 0;border:%?1?% solid #f6f6f6;position:relative}.attr-content .jg_sty.jactive[data-v-6ae0e675]{color:#2d407a;background-color:#f6f8ff;border:%?2?% solid #2d407a}.attr-content .jg_sty .jg_sty_t[data-v-6ae0e675]{display:flex;align-items:center;line-height:%?40?%}.attr-content .jg_sty .jg_sty_t uni-view[data-v-6ae0e675]{width:50%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.attr-content .jg_sty .jg_sty_b[data-v-6ae0e675]{display:flex;line-height:%?40?%;justify-content:space-between}.attr-content .jg_sty .jg_sty_b uni-view[data-v-6ae0e675]{width:50%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.attr-content .jg_sty .jg_sty_b .jg_r[data-v-6ae0e675]{color:#ef2d2d}.attr-content .jg_sty .jg_sty_b .jg_r uni-text[data-v-6ae0e675]{font-size:%?32?%;font-weight:700}.attr-content .jg_sty .jg_r[data-v-6ae0e675]{color:#ef2d2d;position:absolute;top:38%;right:0}.attr-content .jg_sty .jg_r uni-text[data-v-6ae0e675]{font-size:%?32?%;font-weight:700}.attr-content .item-list[data-v-6ae0e675]{padding:%?20?% 0 0;display:flex;flex-wrap:wrap}.attr-content .item-list uni-text[data-v-6ae0e675]{font-size:%?24?%;display:flex;align-items:center;justify-content:center;background:#eee;margin-right:%?20?%;margin-bottom:%?20?%;border-radius:%?40?%;min-width:%?60?%;height:%?50?%;padding:0 %?40?%\n  /* font-size: $font-base; */\n  /* color: $font-color-dark; */}.attr-content .item-list .selected[data-v-6ae0e675]{background:#f6f8ff;border:%?2?% solid #2d407a;color:#2d407a}.attr-content .btn[data-v-6ae0e675]{height:%?66?%;font-size:%?30?%;line-height:%?66?%;border-radius:%?100?%;background:#273b76;\n  /* font-size: $font-base + 2upx; */color:#fff;margin:%?30?% auto %?20?%}\n/* 购买 */.add_bottom[data-v-6ae0e675]{z-index:99;position:fixed;left:0;bottom:0;width:100%;height:%?130?%;background-color:#fff;display:flex;align-items:center;border-top:%?1?% solid #e2e2e2}.add_bottom .add_con[data-v-6ae0e675]{width:%?695?%;margin:0 auto;display:flex;justify-content:space-between;align-items:center}.add_bottom .add_con .s_icon[data-v-6ae0e675]{margin-left:%?27?%}.add_bottom .add_con .three_icons[data-v-6ae0e675]{width:%?100?%;display:flex;flex-direction:column;align-items:center;font-size:%?20?%;color:#333}.add_bottom .add_con .three_icons uni-view[data-v-6ae0e675]{width:100%;text-align:center;margin-top:%?10?%}.add_bottom .add_con .three_icons uni-image[data-v-6ae0e675]{width:%?36?%;height:auto}.add_bottom .add_con .anniu[data-v-6ae0e675]{display:flex;justify-content:flex-end;align-items:center;width:%?400?%}.add_bottom .add_con .anniu .add_car[data-v-6ae0e675]{width:45%;height:%?62?%;line-height:%?62?%;background-image:linear-gradient(90deg,#354a8b,#1b2c60);border-radius:%?30?%;font-size:%?24?%;color:#fff;text-align:center}.add_bottom .add_con .anniu .buy[data-v-6ae0e675]{width:45%;height:%?62?%;line-height:%?62?%;background-image:linear-gradient(90deg,#f3c44f,#f2b827 50%,#f0ab00);border-radius:%?30?%;font-size:%?24?%;color:#fff;text-align:center;margin-left:%?10?%}.video-popup[data-v-6ae0e675]{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.6);z-index:999}.video-popup .video[data-v-6ae0e675]{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.video-popup .video uni-video[data-v-6ae0e675]{width:100%;height:%?500?%}',""]),t.exports=e},"9cbf":function(t,e,i){"use strict";var a=i("146f"),n=i.n(a);n.a},a481:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-6ae0e675]{background:#f1f1f1}body.?%PAGE?%[data-v-6ae0e675]{background:#f1f1f1}",""]),t.exports=e},c915:function(t,e,i){var a=i("a481");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6f29a64c",a,!0,{sourceMap:!1,shadowMode:!1})},ca01:function(t,e,i){"use strict";var a=i("c915"),n=i.n(a);n.a},ee93:function(t,e,i){"use strict";i.r(e);var a=i("5d6b"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a}}]);