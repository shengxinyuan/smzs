(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/community/community"],{"04f8":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{headList:[{communityImage:"https://zuanshi.semoh.cn/applet_static/community/head_01.png",title:"营销海报",id:11},{communityImage:"https://zuanshi.semoh.cn/applet_static/community/head_02.png",title:"营销视频",id:12},{communityImage:"https://zuanshi.semoh.cn/applet_static/community/head_03.png",title:"营销文案",id:13},{communityImage:"https://zuanshi.semoh.cn/applet_static/community/head_04.png",title:"早安问候",id:14}],list:[],ind:11,page_show:!1,canvasShow:!1,base:{width:"520rpx",height:"900rpx",views:[{type:"image",src:"",css:{left:"0rpx",top:"0rpx",width:"520rpx",height:"900rpx"}},{type:"image",src:"",css:{left:"200rpx",top:"760rpx",background:"#ffffff",width:"120rpx",height:"120rpx"}}]}}},onShow:function(){this.nav_cli(this.ind)},methods:{saveImage:function(){this.canvasShow=!1,t.saveImageToPhotosAlbum({filePath:this.path,success:function(n){t.showToast({title:"已保存到相册",icon:"success",duration:2e3})}})},canvas_hb:function(t){console.log(t),this.canvasShow=!0,this.base.views[0].src=t.image,this.base.views[1].src=this.code_image},zanting:function(n){var e=t.createInnerAudioContext();e.autoplay=!1,e.src=this.list[n].video,e.onPause((function(){console.log("暂停")})),e.onError((function(t){console.log(t.errMsg),console.log(t.errCode)}))},nav_cli:function(t){var n=this;this.ind=t,this.page_show=!1,this.$api.get("news",{label:t}).then((function(t){console.log(t),1==t.status&&(t.data.news.forEach((function(t){t.vid_show=!0})),n.list=t.data.news,n.code_image=t.data.ewm,n.page_show=!0)}))},play:function(n){var e=t.createInnerAudioContext();e.autoplay=!0,e.src=n.video,e.onPlay((function(){console.log("播放")})),e.onError((function(t){console.log(t.errMsg),console.log(t.errCode)}))},vid_creat:function(n){if(""==n.video){var e=[];e.push(n.image),t.previewImage({urls:e})}else this.list.forEach((function(t,e){t.id!=n.id?t.vid_show=!0:t.vid_show=!1}))}}};n.default=e}).call(this,e("543d")["default"])},3530:function(t,n,e){},4014:function(t,n,e){"use strict";e.r(n);var i=e("04f8"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},"4b14":function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var i={uPopup:function(){return e.e("uview-ui/components/u-popup/u-popup").then(e.bind(null,"a36c"))},zsLimePainter:function(){return Promise.all([e.e("common/vendor"),e.e("components/zs-lime-painter/zs-lime-painter")]).then(e.bind(null,"c09c"))},uEmpty:function(){return e.e("uview-ui/components/u-empty/u-empty").then(e.bind(null,"11c2"))},zsLogin:function(){return e.e("components/zs-login/zs-login").then(e.bind(null,"a841"))}},o=function(){var t=this,n=t.$createElement;t._self._c;t._isMounted||(t.e0=function(n){t.path=n})},a=[]},"7d00":function(t,n,e){},aa83:function(t,n,e){"use strict";var i=e("3530"),o=e.n(i);o.a},c7742:function(t,n,e){"use strict";(function(t){e("b7aa");i(e("66fd"));var n=i(e("e6f3"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},cf43:function(t,n,e){"use strict";var i=e("7d00"),o=e.n(i);o.a},e6f3:function(t,n,e){"use strict";e.r(n);var i=e("4b14"),o=e("4014");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("cf43"),e("aa83");var s,c=e("f0c5"),u=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);n["default"]=u.exports}},[["c7742","common/runtime","common/vendor"]]]);