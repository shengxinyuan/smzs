(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-Activityshop_detail"],{"025d":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-e5de0070]{background:#f1f1f1}body.?%PAGE?%[data-v-e5de0070]{background:#f1f1f1}",""]),t.exports=e},"210b":function(t,e,i){"use strict";var n=i("cc95"),a=i.n(n);a.a},"2f11":function(t,e,i){var n=i("5f3bc");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("03888dde",n,!0,{sourceMap:!1,shadowMode:!1})},4434:function(t,e,i){"use strict";var n=i("5a3e"),a=i.n(n);a.a},"4b76":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={zsHxNavbar:i("d1b1").default,uCountDown:i("ddbe").default,uIcon:i("b4b8").default,uParse:i("9a03").default,zsShoppingList:i("c2ea").default,uPopup:i("3862").default,uNumberBox:i("348c").default,zsShare:i("ab3f").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("zs-hx-navbar",{ref:"hxnb",attrs:{config:t.config}},[t.isShow?i("template",{attrs:{slot:"center"},slot:"center"},[i("v-uni-view",{staticClass:"center"},t._l(t.headlist,(function(e,n){return i("v-uni-view",{key:n,staticClass:"center_it",class:{active:t.head_ind==n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.head_nav_cli(n)}}},[t._v(t._s(e.name))])})),1)],1):t._e()],2),i("v-uni-view",{staticClass:"carousel"},[i("v-uni-swiper",{attrs:{hidden:t.autoplay,circular:!0,autoplay:!0,duration:400,interval:3e3},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},t._l(t.shop_det.album,(function(e,n){return i("v-uni-swiper-item",{key:n,staticClass:"swiper-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.banner_cli(n)}}},[i("v-uni-view",{staticClass:"image-wrapper"},[i("v-uni-image",{staticClass:"loaded",attrs:{src:e.img0,mode:"aspectFill"}})],1),t.shop_det.video&&0==n?i("v-uni-image",{staticClass:"bofang",attrs:{src:"https://zuanshi.semoh.cn/applet_static/bofang.png",mode:""}}):t._e()],1)})),1),i("v-uni-view",{staticClass:"swiper-dots"},[i("v-uni-text",{staticClass:"num"},[t._v(t._s(t.swiperCurrent+1))]),i("v-uni-text",{staticClass:"sign"},[t._v("/")]),t.shop_det.album?i("v-uni-text",{staticClass:"num"},[t._v(t._s(t.shop_det.album.length))]):t._e()],1)],1),1==t.detail_type?i("v-uni-view",{staticClass:"trabecula"},[i("v-uni-text",{staticClass:"trabecula_l"},[t._v("超值拼团中")]),i("v-uni-text",{staticStyle:{"margin-left":"20rpx"}},[t._v("已拼"+t._s(t.shop_det.sale)+"件，剩余"+t._s(t.shop_det.stock)+"件")])],1):t._e(),2==t.detail_type?i("v-uni-view",{staticClass:"trabecula"},[i("v-uni-text",{staticClass:"trabecula_l"},[t._v("限时秒杀中")]),i("v-uni-view",{staticStyle:{"margin-left":"20rpx"}},[t._v("距结束"),i("u-count-down",{attrs:{timestamp:t.second,color:"white","bg-color":"#E8372F"}})],1)],1):t._e(),1==t.detail_type?i("v-uni-view",{staticClass:"shop_names"},[i("v-uni-text",{staticStyle:{"margin-right":"20rpx"}},[t._v("拼团价")]),t._v(t._s(t.shop_det.title))],1):t._e(),2==t.detail_type?i("v-uni-view",{staticClass:"shop_names"},[i("v-uni-text",{staticStyle:{"margin-right":"20rpx"}},[t._v("秒杀价")]),t._v(t._s(t.shop_det.title))],1):t._e(),i("v-uni-view",{staticClass:"introduce-section"},[i("v-uni-view",{staticClass:"price-box"},[i("v-uni-view",{staticClass:"price-box_l"},[i("v-uni-text",{staticClass:"price-tip"},[t._v("¥")]),i("v-uni-text",{staticClass:"price"},[t._v(t._s(t.shop_det.price))])],1)],1),i("v-uni-view",{staticClass:"price-box_r"},[t._v("剩余"+t._s(t.shop_det.stock)+"件")])],1),i("v-uni-view",{staticClass:"Rapid_delivery"},[i("v-uni-image",{attrs:{src:"https://zuanshi.semoh.cn/applet_static/index/ji.png",mode:"aspectFill"}}),i("v-uni-text",{staticStyle:{"margin-right":"16upx"}},[t._v("急速出货")]),i("v-uni-text",[t._v("16:30前下单当日货品可发货，定制产品除外。")])],1),1==t.detail_type&&t.pi_group.length>0?i("v-uni-view",{staticClass:"group_sty"},t._l(t.pi_group,(function(e,n){return i("v-uni-view",{key:n,staticClass:"group_child"},[i("v-uni-view",{staticClass:"child_l"},t._l(e.member,(function(t){return i("v-uni-image",{attrs:{src:t.avatar,mode:"aspectFill"}})})),1),i("v-uni-view",{staticClass:"child_r",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.go_single(e.id)}}},[t._v("仅剩 "+t._s(e.member_count-e.count)+" 个名额"),i("v-uni-text",[t._v("去拼单")])],1)],1)})),1):t._e(),i("v-uni-view",{staticClass:"specification"},t._l(t.stynumber,(function(e,n){return i("v-uni-view",{staticClass:"child"},[t._v(t._s(e.name)+"："+t._s(e.num))])})),1),i("v-uni-view",{staticClass:"eva-section",attrs:{id:"evaluate"}},[t.commentlist?i("v-uni-view",{staticClass:"section_title",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goto_page("./evaluate?id="+t.shop_id)}}},[i("v-uni-view",{staticClass:"tit_l"},[i("v-uni-text",{staticClass:"pk"}),i("v-uni-text",{staticClass:"pj"},[t._v("宝贝评价")]),i("v-uni-text",{staticClass:"numbers"},[t._v("（"+t._s(t.commentlist.total)+"）")])],1),i("v-uni-view",{staticStyle:{color:"#999","font-size":"24upx"}},[i("v-uni-text",[t._v("查看更多")]),i("u-icon",{attrs:{name:"arrow-right"}})],1)],1):t._e(),i("v-uni-view",{staticClass:"eva-box"},t._l(t.commentlist.data,(function(e,n){return i("v-uni-view",{staticClass:"eval_con"},[i("v-uni-view",{staticClass:"order_head"},[i("v-uni-view",{staticClass:"img"},[i("v-uni-image",{attrs:{src:e.avatar,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"shop_name"},[t._v(t._s(e.nickname))])],1),i("v-uni-view",{staticClass:"shop_name_f"}),i("v-uni-view",{staticClass:"order_time"},[t._v(t._s(e.create_time))])],1),i("v-uni-view",{staticClass:"order_con"},[t._v(t._s(e.remark))]),i("v-uni-view",{staticClass:"order_img"},t._l(e.img,(function(t){return i("v-uni-image",{attrs:{src:t,mode:"aspectFill"}})})),1)],1)})),1)],1),i("v-uni-view",{staticClass:"detail-desc",attrs:{id:"detail"}},[i("v-uni-view",{staticClass:"d-header"},[i("v-uni-text",[t._v("宝贝详情")])],1),i("u-parse",{attrs:{html:t.shop_det.content}})],1),i("v-uni-view",{attrs:{id:"tuijina"}},[i("v-uni-image",{staticStyle:{width:"100%",height:"80rpx","margin-top":"20rpx"},attrs:{src:"https://zuanshi.semoh.cn/applet_static/my/tuijain_bgimg.png",mode:""}}),i("v-uni-view",{staticStyle:{padding:"0 3%","margin-bottom":"120rpx"}},[i("zs-shopping-list",{attrs:{shop_list:t.shop_list,lv:t.member.lv}})],1)],1),i("v-uni-view",{staticClass:"add_bottom"},[i("v-uni-view",{staticClass:"add_con"},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center",flex:"1"}},[i("v-uni-view",{staticClass:"three_icons",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.like_collect.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"https://zuanshi.semoh.cn/applet_static/index/index.png",mode:"aspectFill"}}),i("v-uni-view",[t._v("首页")])],1),i("v-uni-view",{staticClass:"three_icons",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goto_page("../service/service")}}},[i("v-uni-image",{attrs:{src:"https://zuanshi.semoh.cn/applet_static/index/kf.png",mode:"aspectFill"}}),i("v-uni-view",[t._v("客服")])],1),i("v-uni-view",{staticClass:"three_icons",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goto_cart.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"https://zuanshi.semoh.cn/applet_static/index/cart.png",mode:"aspectFill"}}),i("v-uni-view",[t._v("购物车")])],1)],1),1==t.detail_type?i("v-uni-view",{staticClass:"anniu"},[i("v-uni-view",{staticClass:"add_car",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.payment_yes(0)}}},[t._v("单独购买")]),i("v-uni-view",{staticClass:"buy",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.payment_yes(1)}}},[t._v("拼团购买")])],1):t._e(),2==t.detail_type?i("v-uni-view",{staticClass:"anniu"},[i("v-uni-view",{staticClass:"buy_s",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.payment_yes(1)}}},[t._v("立即抢购")])],1):t._e()],1)],1),i("u-popup",{attrs:{mode:"bottom"},model:{value:t.skuShow,callback:function(e){t.skuShow=e},expression:"skuShow"}},[i("v-uni-scroll-view",{attrs:{"scroll-y":"true"}},[i("v-uni-view",{staticClass:"attr-content",staticStyle:{height:"900rpx",position:"relative"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[t._l(t.shopsku.title,(function(e,n){return i("v-uni-view",{staticClass:"attr-list"},[i("v-uni-text",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(e.title.title))]),i("v-uni-view",{staticClass:"item-list"},t._l(e.data,(function(a,o){return a.pid===e.id&&3!=a.pid?i("v-uni-text",{key:o,staticClass:"tit",class:{selected:a.selected},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectSpec(n,o,a.pid)}}},[t._v(t._s(a.title))]):t._e()})),1)],1)})),t._l(t.details,(function(e,n){return i("v-uni-view",{key:n,staticClass:"jg_sty",class:{jactive:t.jg_ind==e.id},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.zhifu(e)}}},[i("v-uni-view",{staticClass:"jg_sty_t"},[i("v-uni-view",[t._v("条码："+t._s(e.bar_code))]),i("v-uni-view",[t._v("克重："+t._s((e.weight/1).toFixed(2))+"g")])],1),i("v-uni-view",{staticClass:"jg_sty_b"},[i("v-uni-view",[t._v("工费：￥"+t._s((e.labor/1/(e.weight/1)).toFixed(2))),i("v-uni-text",[t._v("/g")])],1),i("v-uni-view",{},[t._v("库存："+t._s(e.stock))]),t.vip_type?i("v-uni-view",{staticClass:"jg_r"},[t._v("￥"),i("v-uni-text",[t._v(t._s(e.price_vip))])],1):i("v-uni-view",{staticClass:"jg_r"},[t._v("￥"),i("v-uni-text",[t._v(t._s(e.price_normal))])],1)],1),i("v-uni-view",{staticStyle:{"line-height":"40rpx"}},[t._v("备注："+t._s(e.remark||"无"))])],1)})),i("v-uni-view",{staticStyle:{height:"180rpx"}}),i("v-uni-view",{staticStyle:{position:"fixed",bottom:"0",left:"0",right:"0",padding:"0 20rpx","background-color":"#FFFFFF"}},[i("v-uni-view",{staticStyle:{margin:"20rpx 0",display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-view",{staticStyle:{"font-weight":"bold"}},[t._v("数量")]),i("u-number-box",{attrs:{min:1,step:1,max:t.stocks,"long-press":!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.valChange.apply(void 0,arguments)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),i("v-uni-button",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.shop_pay(1)}}},[t._v("完成")])],1)],2)],1)],1),t.return_top?i("v-uni-view",{staticClass:"teturn_top",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.head_nav_cli(0)}}},[i("u-icon",{attrs:{name:"arrow-upward"}})],1):t._e(),i("zs-share",{ref:"share",attrs:{contentHeight:400}}),t.videoShow?i("v-uni-view",{staticClass:"video-popup",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.zanting.apply(void 0,arguments)},touchmove:function(e){e.preventDefault(),arguments[0]=e=t.$handleEvent(e)}}},[i("v-uni-view",{staticClass:"video"},[i("v-uni-video",{attrs:{id:"myVideo",src:t.shop_det.video,autoplay:!0,loop:!0,muted:!0,"show-play-btn":!0,controls:!0,objectFit:"cover"},on:{pause:function(e){arguments[0]=e=t.$handleEvent(e),t.ZhanTing.apply(void 0,arguments)},ended:function(e){arguments[0]=e=t.$handleEvent(e),t.ZhanTing.apply(void 0,arguments)}}})],1)],1):t._e()],1)},o=[]},"5a3e":function(t,e,i){var n=i("b800");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("5f1e5634",n,!0,{sourceMap:!1,shadowMode:!1})},"5f3bc":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-e5de0070]{padding-bottom:%?160?%}.center[data-v-e5de0070]{width:100%;font-size:%?30?%;display:flex;align-items:center;justify-content:center}.center .center_it[data-v-e5de0070]{width:25%;text-align:center;position:relative}.center .center_it.active[data-v-e5de0070]{color:#2d407a}.center .center_it.active[data-v-e5de0070]:before{content:"";position:absolute;left:31%;bottom:16%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:%?6?%;width:38%;background-color:#2d407a;border-radius:4px;opacity:.8}.teturn_top[data-v-e5de0070]{width:%?90?%;height:%?90?%;position:fixed;right:3%;bottom:%?130?%;background-color:#fff;border-radius:50%;text-align:center;line-height:%?90?%;font-size:%?40?%;box-shadow:1px 1px 3px #888}.header_bait[data-v-e5de0070]{width:100%;height:%?160?%;background-color:#fff;padding-top:%?60?%;position:fixed;left:0;top:0;z-index:99;line-height:%?100?%}.header_bait .toubu[data-v-e5de0070]{padding:0 3%;display:flex;align-items:center}.header_bait .toubu .header_left-c[data-v-e5de0070]{width:24%;display:flex;align-items:center}.header[data-v-e5de0070]{width:100%;height:%?100?%;display:flex;justify-content:space-between;padding:0 4%;position:absolute;left:0;top:%?66?%;z-index:20}.header .header_left uni-image[data-v-e5de0070]{width:%?64?%;height:%?64?%}.icon-you[data-v-e5de0070]{\n  /* font-size: $font-base + 2upx; */color:#888}.carousel[data-v-e5de0070]{height:%?722?%;position:relative}.carousel .swiper-dots[data-v-e5de0070]{position:absolute;right:%?30?%;bottom:%?20?%;background-color:rgba(0,0,0,.4);display:inline-block;padding:%?4?% %?18?% %?6?% %?18?%;border-radius:%?50?%;color:#fff}.carousel uni-swiper[data-v-e5de0070]{height:100%}.carousel .image-wrapper[data-v-e5de0070]{width:100%;height:100%}.carousel .swiper-item[data-v-e5de0070]{display:flex;justify-content:center;align-content:center;height:%?750?%;overflow:hidden;position:relative}.carousel .swiper-item .bofang[data-v-e5de0070]{position:absolute;top:46%;width:%?76?%;height:%?76?%}.carousel .swiper-item .loaded[data-v-e5de0070]{width:100%;height:100%}.trabecula[data-v-e5de0070]{width:100%;background-color:#e8372f;height:%?80?%;color:#fff;line-height:%?80?%;padding:0 3%;display:flex;justify-content:space-between}.trabecula .trabecula_l[data-v-e5de0070]{font-weight:700;font-size:%?30?%}\n/* 标题简介 */.introduce-section[data-v-e5de0070]{background:#fff;padding:%?10?% %?30?%;display:flex;justify-content:space-between}.introduce-section .title[data-v-e5de0070]{font-size:%?32?%;\n  /* color: $font-color-dark; */height:%?50?%;line-height:%?50?%}.introduce-section .price-box_r[data-v-e5de0070]{padding-top:%?26?%;color:#666}.introduce-section .price-box[data-v-e5de0070]{display:flex;justify-content:space-between;align-items:baseline;font-size:%?26?%;color:#e8372f}.introduce-section .price-box .price-box_l[data-v-e5de0070]{padding-top:%?20?%}.introduce-section .price-box .price-box_l .m-price[data-v-e5de0070]{color:#999;text-decoration:line-through}.introduce-section .price-box .price-box_r[data-v-e5de0070]{color:#999;width:%?100?%;text-align:center}.introduce-section .price-box .price-box_r uni-image[data-v-e5de0070]{width:%?40?%;height:%?40?%}.introduce-section .price-box .price-box_r uni-view[data-v-e5de0070]{font-size:%?24?%}.introduce-section .price[data-v-e5de0070]{font-size:%?38?%;font-weight:700;margin:0 %?16?% 0 %?14?%}.introduce-section .m-price[data-v-e5de0070]{margin-left:%?30?%;color:#e8372f\n  /* color: $font-color-light; */}.introduce-section .coupon-tip[data-v-e5de0070]{align-items:center;padding:%?4?% %?10?%;\n  /* background: $uni-color-primary; */\n  /* font-size: $font-sm; */color:#fff;border-radius:%?6?%;line-height:1;-webkit-transform:translateY(%?-4?%);transform:translateY(%?-4?%)}.introduce-section .bot-row[data-v-e5de0070]{display:flex;align-items:center;height:%?50?%\n  /* font-size: $font-sm; */\n  /* color: $font-color-light; */}.introduce-section .bot-row uni-text[data-v-e5de0070]{flex:1}.shop_names[data-v-e5de0070]{background-color:#fff;overflow:hidden;line-height:%?50?%;font-size:%?32?%;font-weight:700;padding:0 0 %?20?% 3%}.shop_names uni-text[data-v-e5de0070]{display:inline-block;font-size:%?24?%;font-weight:none;background-color:#df3636;padding:0 %?4?%;color:#fff;height:%?36?%;line-height:%?36?%;border-radius:%?6?%}.shopping_text[data-v-e5de0070]{background-color:#fff;background-color:#fff;padding:0 3%}.shopping_text .text-item[data-v-e5de0070]{font-weight:700;display:flex;justify-content:space-between;background-color:#f6f8ff;line-height:%?68?%;padding:0 %?20?%;color:#333;border-radius:%?8?%}.shopping_text .shop_introduce[data-v-e5de0070]{font-size:%?28?%;color:#333;line-height:%?42?%;padding:%?10?% 0}.Rapid_delivery[data-v-e5de0070]{padding:%?20?%;color:#999;font-size:%?22?%;background-color:#fff;display:flex;align-items:center}.Rapid_delivery uni-image[data-v-e5de0070]{width:%?24?%;height:%?24?%;margin-right:%?16?%}.group_sty[data-v-e5de0070]{width:100%;height:%?220?%;overflow-y:scroll;padding:0 3%;background-color:#fff;margin-top:%?20?%}.group_sty .group_child[data-v-e5de0070]{border-bottom:%?2?% solid #f6f6f6;padding:%?10?% 0;display:flex;justify-content:space-between}.group_sty .group_child .child_l[data-v-e5de0070]{height:%?86?%;display:flex}.group_sty .group_child .child_l uni-image[data-v-e5de0070]{background-color:#eee;width:%?80?%;height:%?80?%;border-radius:50%;margin-right:%?8?%}.group_sty .group_child .child_r[data-v-e5de0070]{line-height:%?86?%}.group_sty .group_child .child_r uni-text[data-v-e5de0070]{display:inline-block;background-color:#df3636;color:#fff;line-height:0;padding:%?22?%;margin:0 %?10?%;border-radius:%?50?%}.specification[data-v-e5de0070]{width:100%;display:flex;flex-wrap:wrap;font-size:%?28?%;margin:%?20?% 0;background-color:#fff;padding:0 3%;line-height:%?70?%;color:#666}.specification .child[data-v-e5de0070]{width:35%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.specification .child[data-v-e5de0070]:nth-child(3n+3){width:30%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n/* 评价 */.eva-section[data-v-e5de0070]{padding:%?20?% %?30?%;background:#fff;margin-top:%?16?%}.eva-section .section_title[data-v-e5de0070]{width:100%;display:flex;justify-content:space-between;padding-bottom:%?20?%;line-height:%?44?%}.eva-section .section_title .tit_l[data-v-e5de0070]{display:flex;align-items:center}.eva-section .section_title .tit_l .pk[data-v-e5de0070]{display:inline-block;width:%?12?%;height:100%;background-image:linear-gradient(#445589,#fff);margin-right:%?16?%}.eva-section .section_title .tit_l .pj[data-v-e5de0070]{font-size:%?28?%}.eva-section .section_title .tit_l .numbers[data-v-e5de0070]{font-size:%?22?%}.eva-section .eva-box[data-v-e5de0070]{width:100%}.eva-section .eva-box .eval_con[data-v-e5de0070]{width:100%;display:flex;background-color:#fff;padding:2%;flex-wrap:wrap;border-bottom:%?1?% solid #f6f6f6}.eva-section .eva-box .eval_con .order_head[data-v-e5de0070]{width:100%;height:%?80?%;display:flex;justify-content:space-between}.eva-section .eva-box .eval_con .order_head .img[data-v-e5de0070]{display:flex}.eva-section .eva-box .eval_con .order_head .img uni-image[data-v-e5de0070]{width:%?80?%;height:%?80?%;border-radius:%?80?%}.eva-section .eva-box .eval_con .order_head .img .shop_name[data-v-e5de0070]{width:%?180?%;line-height:%?80?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:%?28?%;margin-left:%?20?%;font-weight:700}.eva-section .eva-box .eval_con .order_head .order_time[data-v-e5de0070]{width:40%;line-height:%?70?%;text-align:right;font-size:%?26?%;color:#999}.eva-section .eva-box .eval_con .order_con[data-v-e5de0070]{width:100%;font-size:%?30?%;line-height:%?52?%;padding:%?6?% 0}.eva-section .eva-box .eval_con .order_img[data-v-e5de0070]{width:100%;display:flex}.eva-section .eva-box .eval_con .order_img uni-image[data-v-e5de0070]{width:%?216?%;height:%?216?%;margin:%?10?%}\n/*  详情 */.detail-desc[data-v-e5de0070]{background:#fff;margin-top:%?16?%}.detail-desc .d-header[data-v-e5de0070]{display:flex;justify-content:center;align-items:center;height:%?80?%;\n  /* font-size: $font-base + 2upx; */\n  /* color: $font-color-dark; */position:relative}.detail-desc .d-header uni-text[data-v-e5de0070]{padding:0 %?20?%;background:#fff;position:relative;z-index:1}.detail-desc .d-header[data-v-e5de0070]:after{position:absolute;left:50%;top:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:%?300?%;height:0;content:"";border-bottom:1px solid #ccc}\n/* 规格选择弹窗 */.attr-content[data-v-e5de0070]{padding:%?10?% %?30?%}.attr-content .a-t[data-v-e5de0070]{display:flex}.attr-content .a-t uni-image[data-v-e5de0070]{width:%?170?%;height:%?170?%;flex-shrink:0;margin-top:%?-40?%;border-radius:%?8?%}.attr-content .a-t .right[data-v-e5de0070]{display:flex;flex-direction:column;padding-left:%?24?%;\n  /* font-size: $font-sm + 2upx; */\n  /* color: $font-color-base; */line-height:%?42?%}.attr-content .a-t .right .price[data-v-e5de0070]{\n  /* font-size: $font-lg; */\n  /* color: $uni-color-primary; */margin-bottom:%?10?%}.attr-content .a-t .right .selected-text[data-v-e5de0070]{margin-right:%?10?%}.attr-content .attr-list[data-v-e5de0070]{display:flex;flex-direction:column;\n  /* font-size: $font-base + 2upx; */\n  /* color: $font-color-base; */padding-top:%?30?%;padding-left:%?10?%}.attr-content .jg_sty[data-v-e5de0070]{font-size:%?24?%;padding:%?20?%;width:100%;background-color:#f6f6f6;border-radius:%?20?%;margin:%?10?% 0;border:%?1?% solid #f6f6f6}.attr-content .jg_sty.jactive[data-v-e5de0070]{color:#2d407a;background-color:#f6f8ff;border:%?2?% solid #2d407a}.attr-content .jg_sty .jg_sty_t[data-v-e5de0070]{display:flex;align-items:center;line-height:%?40?%}.attr-content .jg_sty .jg_sty_t uni-view[data-v-e5de0070]{width:50%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.attr-content .jg_sty .jg_sty_b[data-v-e5de0070]{display:flex;line-height:%?40?%;justify-content:space-between}.attr-content .jg_sty .jg_sty_b uni-view[data-v-e5de0070]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.attr-content .jg_sty .jg_sty_b .jg_r[data-v-e5de0070]{color:#ef2d2d}.attr-content .jg_sty .jg_sty_b .jg_r uni-text[data-v-e5de0070]{font-size:%?32?%;font-weight:700}.attr-content .item-list[data-v-e5de0070]{padding:%?20?% 0 0;display:flex;flex-wrap:wrap}.attr-content .item-list uni-text[data-v-e5de0070]{font-size:%?24?%;display:flex;align-items:center;justify-content:center;background:#eee;margin-right:%?20?%;margin-bottom:%?20?%;border-radius:%?40?%;min-width:%?60?%;height:%?50?%;padding:0 %?40?%\n  /* font-size: $font-base; */\n  /* color: $font-color-dark; */}.attr-content .item-list .selected[data-v-e5de0070]{background:#f6f8ff;border:%?2?% solid #2d407a;color:#2d407a}.attr-content .btn[data-v-e5de0070]{height:%?66?%;width:100%;font-size:%?30?%;line-height:%?66?%;border-radius:%?100?%;background:#273b76;\n  /* font-size: $font-base + 2upx; */color:#fff;margin:%?30?% auto %?20?%}\n/* 购买 */.add_bottom[data-v-e5de0070]{z-index:99;position:fixed;left:0;bottom:0;width:100%;height:%?100?%;background-color:#fff;display:flex;border-top:%?1?% solid #e2e2e2}.add_bottom .add_con[data-v-e5de0070]{width:%?695?%;height:%?70?%;margin:%?15?% auto;display:flex;justify-content:space-between}.add_bottom .add_con .s_icon[data-v-e5de0070]{margin-left:%?27?%}.add_bottom .add_con .three_icons[data-v-e5de0070]{width:%?100?%;display:flex;flex-wrap:wrap;font-size:%?20?%;color:#333}.add_bottom .add_con .three_icons uni-view[data-v-e5de0070]{width:100%;text-align:center;margin-top:%?10?%}.add_bottom .add_con .three_icons uni-image[data-v-e5de0070]{width:%?36?%;height:%?36?%;margin-left:%?28?%}.add_bottom .add_con .anniu[data-v-e5de0070]{display:flex;flex:1;width:%?400?%;height:%?70?%}.add_bottom .add_con .anniu .add_car[data-v-e5de0070]{width:%?190?%;height:%?70?%;line-height:%?70?%;background-image:linear-gradient(0deg,#34498a,#1d2f65);border-radius:%?34?% %?0?% %?0?% %?36?%;font-size:%?26?%;color:#fff;text-align:center}.add_bottom .add_con .anniu .buy[data-v-e5de0070]{width:%?190?%;height:%?70?%;line-height:%?70?%;background-image:linear-gradient(0deg,#f0534c,#e93928);border-radius:%?0?% %?36?% %?34?% %?0?%;font-size:%?26?%;color:#fff;text-align:center}.add_bottom .add_con .anniu .buy_s[data-v-e5de0070]{width:%?301?%;height:%?70?%;line-height:%?70?%;background-image:linear-gradient(0deg,#f0534c,#e93928);border-radius:%?50?%;font-size:%?28?%;color:#fff;text-align:center;margin-left:%?50?%}.video-popup[data-v-e5de0070]{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.6);z-index:999}.video-popup .video[data-v-e5de0070]{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.video-popup .video uni-video[data-v-e5de0070]{width:100%;height:%?500?%}',""]),t.exports=e},"629a":function(t,e,i){"use strict";var n=i("2f11"),a=i.n(n);a.a},a5bf:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-countdown"},[t.showDays&&(t.hideZeroDay||!t.hideZeroDay&&"00"!=t.d)?i("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[i("v-uni-view",{staticClass:"u-countdown-time",style:[t.letterStyle]},[t._v(t._s(t.d))])],1):t._e(),t.showDays&&(t.hideZeroDay||!t.hideZeroDay&&"00"!=t.d)?i("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v(t._s("colon"==t.separator?":":"天"))]):t._e(),t.showHours?i("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[i("v-uni-view",{staticClass:"u-countdown-time",style:{fontSize:t.fontSize+"rpx",color:t.color}},[t._v(t._s(t.h))])],1):t._e(),t.showHours?i("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v(t._s("colon"==t.separator?":":"时"))]):t._e(),t.showMinutes?i("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[i("v-uni-view",{staticClass:"u-countdown-time",style:{fontSize:t.fontSize+"rpx",color:t.color}},[t._v(t._s(t.i))])],1):t._e(),t.showMinutes?i("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v(t._s("colon"==t.separator?":":"分"))]):t._e(),t.showSeconds?i("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[i("v-uni-view",{staticClass:"u-countdown-time",style:{fontSize:t.fontSize+"rpx",color:t.color}},[t._v(t._s(t.s))])],1):t._e(),t.showSeconds&&"zh"==t.separator?i("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v("秒")]):t._e()],1)},o=[]},aaea:function(t,e,i){"use strict";i("4160"),i("ac1f"),i("5319"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{isShow:!1,config:{centerSlot:!0,barPlaceholder:!1,backgroundColor:[0,"#ffffff"],slideBackgroundColor:[1,"#ffffff"]},value:1,shop_num:1,vip_type:!1,shop_type:0,jg_ind:"",bgcolor:"",opacity:0,head_ind:0,specClass:"none",specSelected:[],swiperCurrent:0,favorite:!0,shareList:[],imgList:[],headlist:[{name:"商品"},{name:"评价"},{name:"详情"},{name:"推荐"}],pingl:0,tuij:0,detail_shop:0,shop_id:0,shop_det:"",stynumber:[],shop_list:"",member:"",shopsku:"",detail_type:0,sku_ids:"",details:"",shop_id_goods:"",type_shop:0,second:0,cantuan:0,pi_group:"",commentlist:"",autoplay:!1,return_top:!1,videoShow:!1,skuShow:!1,stocks:1}},onPageScroll:function(t){this.$refs.hxnb.pageScroll(t),t.scrollTop>50?this.isShow=!0:this.isShow=!1,t.scrollTop>=this.pingl&&t.scrollTop<=this.detail_shop?this.head_ind=1:t.scrollTop>this.tuij?this.head_ind=3:t.scrollTop>=this.detail_shop&&t.scrollTop<=this.tuij?this.head_ind=2:0==t.scrollTop&&(this.head_ind=0)},computed:{},mounted:function(){var t=this,e=uni.createSelectorQuery();e.select("#evaluate").boundingClientRect((function(e){t.pingl=e.top-100})).exec(),e.select("#tuijina").boundingClientRect((function(e){t.tuij=e.top-100})).exec(),e.select("#detail").boundingClientRect((function(e){t.detail_shop=e.top-100})).exec()},onShow:function(){},onLoad:function(t){this.shop_id=t.shop_id,this.detail_type=t.type,console.log(this.detail_type),t.second&&(this.second=t.second),this.member=uni.getStorageSync("member_info"),console.log(this.member);var e=uni.getStorageSync("viptype");console.log(e),this.vip_type=!!e,this.page_render()},methods:{ZhanTing:function(){1==this.autoplay&&(this.autoplay=!1)},zanting:function(){this.videoShow=!1},valChange:function(t){this.shop_num=t.value},page_render:function(){var t=this;this.$api.get("activity/"+this.shop_id+"&type="+this.detail_type).then((function(e){console.log(e),1==e.status&&(t.shop_det=e.data,t.shoptype_id=e.data.id,console.log(t.shoptype_id),t.shop_id_goods=e.data.goods_id,t.stynumber=[{name:"款号",num:e.data.model_no},{name:"销量",num:e.data.sale},{name:"库存",num:e.data.stock},{name:"成色",num:e.data.texture},{name:"克重",num:e.data.min_g+"-"+e.data.max_g}],t.sku())})),this.$api.post("goods",{is_recommend:1}).then((function(e){1==e.status&&(t.shop_list=e.data.data)})),this.$api.get("commentlist/"+this.shop_id).then((function(e){console.log(e),1==e.status&&(t.commentlist=e.data)})),this.$api.get("group",{id:this.shop_id,member_id:this.member.id||0}).then((function(e){console.log(e),t.pi_group=e.data,console.log(t.pi_group)}))},sku:function(){var t=this;console.log(this.type_shop),this.$api.get("sku",{type:this.type_shop,id:this.shoptype_id}).then((function(e){console.log(e),1==e.status&&(t.shopsku=e.data,t.details=e.data.data)}))},shop_pay:function(){if(this.shop_num>this.stock)this.com.msg("库存不足~");else if(0==this.shop_type){var t={goods_id:this.shop_id_goods,sku_id:this.jg_ind,count:this.shop_num,type:0};if(""==this.jg_ind)return void this.com.msg("请选择规格");this.com.navto("../vip-confirm-order/vip-confirm-order?data="+JSON.stringify(t)),this.toggleSpec()}else{var e={goods_id:this.shop_id,sku_id:this.jg_ind,count:this.shop_num,type:1,activity:this.detail_type,kaituan:this.shop_det.activity_id,cantuan:this.cantuan};if(""==this.jg_ind)return void this.com.msg("请选择规格");this.toggleSpec(),console.log(JSON.stringify(e)),this.com.navto("../vip-confirm-order/vip-confirm-order?data="+JSON.stringify(e))}},go_single:function(t){this.cantuan=t,this.shoptype_id=this.shop_det.id,this.type_shop=1,this.shop_type=1,this.sku()},zhifu:function(t){this.value=1,this.jg_ind=t.id,this.stock=t.stock,this.sticks=t.stock,console.log(this.stock)},goto_cart:function(){this.com.rel("../cart/cart")},goto_page:function(t){this.com.navto(t)},head_nav_cli:function(t){this.head_ind=t;var e=this;0==t?uni.pageScrollTo({scrollTop:160,duration:200}):1==t?uni.pageScrollTo({scrollTop:e.pingl,duration:200}):2==t?uni.pageScrollTo({scrollTop:e.detail_shop,duration:200}):3==t&&(console.log(t),uni.pageScrollTo({scrollTop:e.tuij,duration:200}))},swiperChange:function(t){this.swiperCurrent=t.detail.current},banner_cli:function(t){if(this.shop_det.video)if(0==t)this.videoShow=!0;else{var e=[];this.shop_det.album.forEach((function(t,i){0!=i&&e.push(t.img0)})),uni.previewImage({urls:e,loop:!0})}else{var i=[];this.shop_det.album.forEach((function(t,e){i.push(t.img0)})),uni.previewImage({urls:i,loop:!0})}},payment_yes:function(t){1==this.detail_type&&(0==t&&(this.type_shop=t,this.shop_type=t,this.shoptype_id=this.shop_id_goods,this.sku(),this.skuShow=!0),1==t&&(this.type_shop=t,this.shop_type=t,this.shoptype_id=this.shop_det.id,this.sku(),this.skuShow=!0)),2==this.detail_type&&1==t&&(this.type_shop=t,this.shop_type=t,this.shoptype_id=this.shop_det.id,this.sku(),this.skuShow=!0)},goto_top:function(){uni.navigateBack()},toggleSpec:function(){},selectSpec:function(t,e,i){var n=this,a=this.shopsku.title[t];console.log(a),a.data.forEach((function(t){t.pid===i&&n.$set(t,"selected",!1)})),this.$set(a.data[e],"selected",!0),this.specSelected="",this.shopsku.title.forEach((function(t){t.data.forEach((function(t){if(1==t.selected){n.specSelected+=t.id+",";var e="";n.sku_ids=n.specSelected.substr(0,n.specSelected.length-1),e=n.sku_ids.replace(/\,/g,""),console.log(n.sku_ids),n.shopsku.title.length==e.length&&n.$api.get("sku",{type:n.type_shop,id:n.shoptype_id,sku_ids:n.sku_ids}).then((function(t){console.log(t),1==t.status&&(n.details=t.data.data)}))}}))}))},share:function(){this.$refs.share.toggleMask()},buy:function(){uni.navigateTo({url:"/pages/order/createOrder"})},stopPrevent:function(){},like_collect:function(){this.com.rel("../index/index")}}};e.default=n},b800:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-countdown[data-v-ee56cd42]{display:inline-flex;align-items:center}.u-countdown-item[data-v-ee56cd42]{\ndisplay:flex;flex-direction:row;\nalign-items:center;justify-content:center;padding:%?2?%;border-radius:%?6?%;white-space:nowrap;-webkit-transform:translateZ(0);transform:translateZ(0)}.u-countdown-time[data-v-ee56cd42]{margin:0;padding:0;line-height:1}.u-countdown-colon[data-v-ee56cd42]{\ndisplay:flex;flex-direction:row;\njustify-content:center;padding:0 %?5?%;line-height:1;align-items:center;padding-bottom:%?4?%}.u-countdown-scale[data-v-ee56cd42]{-webkit-transform:scale(.9);transform:scale(.9);-webkit-transform-origin:center center;transform-origin:center center}',""]),t.exports=e},cc95:function(t,e,i){var n=i("025d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("f560b0ae",n,!0,{sourceMap:!1,shadowMode:!1})},d2b8:function(t,e,i){"use strict";i.r(e);var n=i("4b76"),a=i("e09f");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("210b"),i("629a");var s,d=i("f0c5"),r=Object(d["a"])(a["default"],n["b"],n["c"],!1,null,"e5de0070",null,!1,n["a"],s);e["default"]=r.exports},ddbe:function(t,e,i){"use strict";i.r(e);var n=i("a5bf"),a=i("e9ac");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("4434");var s,d=i("f0c5"),r=Object(d["a"])(a["default"],n["b"],n["c"],!1,null,"ee56cd42",null,!1,n["a"],s);e["default"]=r.exports},e09f:function(t,e,i){"use strict";i.r(e);var n=i("aaea"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},e2c3:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-count-down",props:{timestamp:{type:[Number,String],default:0},autoplay:{type:Boolean,default:!0},separator:{type:String,default:"colon"},separatorSize:{type:[Number,String],default:30},separatorColor:{type:String,default:"#303133"},color:{type:String,default:"#303133"},fontSize:{type:[Number,String],default:30},bgColor:{type:String,default:"#fff"},height:{type:[Number,String],default:"auto"},showBorder:{type:Boolean,default:!1},borderColor:{type:String,default:"#303133"},showSeconds:{type:Boolean,default:!0},showMinutes:{type:Boolean,default:!0},showHours:{type:Boolean,default:!0},showDays:{type:Boolean,default:!0},hideZeroDay:{type:Boolean,default:!1}},watch:{timestamp:function(t,e){this.clearTimer(),this.start()}},data:function(){return{d:"00",h:"00",i:"00",s:"00",timer:null,seconds:0}},computed:{itemStyle:function(){var t={};return this.height&&(t.height=this.height+"rpx",t.width=this.height+"rpx"),this.showBorder&&(t.borderStyle="solid",t.borderColor=this.borderColor,t.borderWidth="1px"),this.bgColor&&(t.backgroundColor=this.bgColor),t},letterStyle:function(){var t={};return this.fontSize&&(t.fontSize=this.fontSize+"rpx"),this.color&&(t.color=this.color),t}},mounted:function(){this.autoplay&&this.timestamp&&this.start()},methods:{start:function(){var t=this;this.clearTimer(),this.timestamp<=0||(this.seconds=Number(this.timestamp),this.formatTime(this.seconds),this.timer=setInterval((function(){if(t.seconds--,t.$emit("change",t.seconds),t.seconds<0)return t.end();t.formatTime(t.seconds)}),1e3))},formatTime:function(t){t<=0&&this.end();var e=0,i=0,n=0,a=0;e=Math.floor(t/86400),i=Math.floor(t/3600)-24*e;var o=null;o=this.showDays?i:Math.floor(t/3600),n=Math.floor(t/60)-60*i-24*e*60,a=Math.floor(t)-24*e*60*60-60*i*60-60*n,o=o<10?"0"+o:o,n=n<10?"0"+n:n,a=a<10?"0"+a:a,e=e<10?"0"+e:e,this.d=e,this.h=o,this.i=n,this.s=a},end:function(){this.clearTimer(),this.$emit("end",{})},clearTimer:function(){this.timer&&(clearInterval(this.timer),this.timer=null)}},beforeDestroy:function(){clearInterval(this.timer),this.timer=null}};e.default=n},e9ac:function(t,e,i){"use strict";i.r(e);var n=i("e2c3"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a}}]);