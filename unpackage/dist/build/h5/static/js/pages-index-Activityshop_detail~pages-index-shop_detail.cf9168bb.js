(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-Activityshop_detail~pages-index-shop_detail"],{"0533":function(t,e,n){var i=n("e51b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("28ac1c32",i,!0,{sourceMap:!1,shadowMode:!1})},"055b":function(t,e,n){n("ac1f"),n("1276");var i={errorImg:null,filter:null,highlight:null,onText:null,entities:{quot:'"',apos:"'",semi:";",nbsp:" ",ensp:" ",emsp:" ",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…"},blankChar:a(" , ,\t,\r,\n,\f"),boolAttrs:a("allowfullscreen,autoplay,autostart,controls,ignore,loop,muted"),blockTags:a("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),ignoreTags:a("area,base,canvas,frame,iframe,input,link,map,meta,param,script,source,style,svg,textarea,title,track,wbr"),richOnlyTags:a("a,colgroup,fieldset,legend"),selfClosingTags:a("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),trustTags:a("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),userAgentStyles:{address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}};function a(t){for(var e=Object.create(null),n=t.split(","),i=n.length;i--;)e[n[i]]=!0;return e}t.exports=i},"06c5":function(t,e,n){"use strict";n("a630"),n("fb6a"),n("d3b7"),n("25f0"),n("3ca3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var i=a(n("6b75"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(t){if("string"===typeof t)return(0,i.default)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,i.default)(t,e):void 0}}},"081d":function(t,e,n){var i=n("86b4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("3ebb3554",i,!0,{sourceMap:!1,shadowMode:!1})},"0ca8":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uIcon:n("b4b8").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-numberbox"},[n("v-uni-view",{staticClass:"u-icon-minus",class:{"u-icon-disabled":t.disabled||t.inputVal<=t.min},style:{background:t.bgColor,height:t.inputHeight+"rpx",color:t.color},on:{touchstart:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.btnTouchStart("minus")},touchend:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.clearTimer.apply(void 0,arguments)}}},[n("u-icon",{attrs:{name:"minus",size:t.size}})],1),n("v-uni-input",{staticClass:"u-number-input",class:{"u-input-disabled":t.disabled},style:{color:t.color,fontSize:t.size+"rpx",background:t.bgColor,height:t.inputHeight+"rpx",width:t.inputWidth+"rpx"},attrs:{disabled:t.disabledInput||t.disabled,"cursor-spacing":t.getCursorSpacing,type:"number"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.onBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)}},model:{value:t.inputVal,callback:function(e){t.inputVal=e},expression:"inputVal"}}),n("v-uni-view",{staticClass:"u-icon-plus",class:{"u-icon-disabled":t.disabled||t.inputVal>=t.max},style:{background:t.bgColor,height:t.inputHeight+"rpx",color:t.color},on:{touchstart:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.btnTouchStart("plus")},touchend:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.clearTimer.apply(void 0,arguments)}}},[n("u-icon",{attrs:{name:"plus",size:t.size}})],1)],1)},r=[]},"122d":function(t,e,n){"use strict";var i=n("0533"),a=n.n(i);a.a},1386:function(t,e,n){"use strict";n("c975"),n("a9e3"),n("d3b7"),n("ac1f"),n("25f0"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-number-box",props:{value:{type:Number,default:1},bgColor:{type:String,default:"#F2F3F5"},min:{type:Number,default:0},max:{type:Number,default:99999},step:{type:Number,default:1},disabled:{type:Boolean,default:!1},size:{type:[Number,String],default:26},color:{type:String,default:"#323233"},inputWidth:{type:[Number,String],default:80},inputHeight:{type:[Number,String],default:50},index:{type:[Number,String],default:""},disabledInput:{type:Boolean,default:!1},cursorSpacing:{type:[Number,String],default:100},longPress:{type:Boolean,default:!0},pressTime:{type:[Number,String],default:250},positiveInteger:{type:Boolean,default:!0}},watch:{value:function(t,e){this.changeFromInner||(this.inputVal=t,this.$nextTick((function(){this.changeFromInner=!1})))},inputVal:function(t,e){var n=this;if(""!=t){var i=0,a=this.$u.test.number(t);i=a&&t>=this.min&&t<=this.max?t:e,this.positiveInteger&&(t<0||-1!==String(t).indexOf("."))&&(i=e,this.$nextTick((function(){n.inputVal=e}))),this.handleChange(i,"change")}}},data:function(){return{inputVal:1,timer:null,changeFromInner:!1,innerChangeTimer:null}},created:function(){this.inputVal=Number(this.value)},computed:{getCursorSpacing:function(){return Number(uni.upx2px(this.cursorSpacing))}},methods:{btnTouchStart:function(t){var e=this;this[t](),this.longPress&&(clearInterval(this.timer),this.timer=null,this.timer=setInterval((function(){e[t]()}),this.pressTime))},clearTimer:function(){var t=this;this.$nextTick((function(){clearInterval(t.timer),t.timer=null}))},minus:function(){this.computeVal("minus")},plus:function(){this.computeVal("plus")},calcPlus:function(t,e){var n,i,a;try{i=t.toString().split(".")[1].length}catch(o){i=0}try{a=e.toString().split(".")[1].length}catch(o){a=0}n=Math.pow(10,Math.max(i,a));var r=i>=a?i:a;return((t*n+e*n)/n).toFixed(r)},calcMinus:function(t,e){var n,i,a;try{i=t.toString().split(".")[1].length}catch(o){i=0}try{a=e.toString().split(".")[1].length}catch(o){a=0}n=Math.pow(10,Math.max(i,a));var r=i>=a?i:a;return((t*n-e*n)/n).toFixed(r)},computeVal:function(t){if(uni.hideKeyboard(),!this.disabled){var e=0;"minus"===t?e=this.calcMinus(this.inputVal,this.step):"plus"===t&&(e=this.calcPlus(this.inputVal,this.step)),e<this.min||e>this.max||(this.inputVal=e,this.handleChange(e,t))}},onBlur:function(t){var e=this,n=0,i=t.detail.value;/(^\d+$)/.test(i)&&0!=i[0]||(n=this.min),n=+i,n>this.max?n=this.max:n<this.min&&(n=this.min),this.$nextTick((function(){e.inputVal=n})),this.handleChange(n,"blur")},onFocus:function(){this.$emit("focus")},handleChange:function(t,e){var n=this;this.disabled||(this.innerChangeTimer&&(clearTimeout(this.innerChangeTimer),this.innerChangeTimer=null),this.changeFromInner=!0,this.innerChangeTimer=setTimeout((function(){n.changeFromInner=!1}),150),this.$emit("input",Number(t)),this.$emit(e,{value:Number(t),index:this.index}))}}};e.default=i},"20bd":function(t,e,n){"use strict";n.r(e);var i=n("bf1b"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"2f4a":function(t,e,n){"use strict";n.r(e);var i=n("1386"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"348c":function(t,e,n){"use strict";n.r(e);var i=n("0ca8"),a=n("2f4a");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("5883");var o,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"5634e5e7",null,!1,i["a"],o);e["default"]=c.exports},"3cc5":function(t,e,n){"use strict";n.r(e);var i=n("3d93"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"3d93":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{transform:"translateY(50vh)",timer:0,backgroundColor:"rgba(0,0,0,0)",show:!1,config:{},shareList:[{type:1,icon:"https://zuanshi.semoh.cn/applet_static/index/share_wechat.png",text:"微信好友"},{type:2,icon:"https://zuanshi.semoh.cn/applet_static/index/share_moment.png",text:"朋友圈"}]}},props:{contentHeight:{type:Number,default:0},hasTabbar:{type:Boolean,default:!1}},created:function(){var t=uni.upx2px(this.contentHeight)+"px";this.config={height:t,transform:"translateY(".concat(t,")"),backgroundColor:"rgba(0,0,0,.4)"},this.transform=this.config.transform},methods:{toggleMask:function(){var t=this;if(1!=this.timer){if(this.timer=1,setTimeout((function(){t.timer=0}),500),this.show)return this.transform=this.config.transform,this.backgroundColor="rgba(0,0,0,0)",void setTimeout((function(){t.show=!1,t.hasTabbar&&uni.showTabBar()}),200);this.show=!0,this.hasTabbar?uni.hideTabBar({success:function(){setTimeout((function(){t.backgroundColor=t.config.backgroundColor,t.transform="translateY(0px)"}),10)}}):setTimeout((function(){t.backgroundColor=t.config.backgroundColor,t.transform="translateY(0px)"}),10)}},stopPrevent:function(){},shareToFriend:function(t){this.$emit("shaer_app",t),this.toggleMask()}}};e.default=i},"49cb":function(t,e,n){"use strict";var i=n("081d"),a=n.n(i);a.a},5160:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("v-uni-view",{staticClass:"mask",style:{backgroundColor:t.backgroundColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleMask.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"mask-content",style:[{height:t.config.height,transform:t.transform}],on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[n("v-uni-scroll-view",{staticClass:"view-content",attrs:{"scroll-y":!0}},[n("v-uni-view",{staticClass:"share-header"},[t._v("分享到")]),n("v-uni-view",{staticClass:"share-list"},t._l(t.shareList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"share-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.shareToFriend(e.type)}}},[n("v-uni-image",{attrs:{src:e.icon,mode:""}}),n("v-uni-text",[t._v(t._s(e.text))])],1)})),1)],1),n("v-uni-view",{staticClass:"bottom b-t",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleMask.apply(void 0,arguments)}}},[t._v("取消")])],1)],1):t._e()},r=[]},5783:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cont"},t._l(t.shop_list,(function(e,i){return n("v-uni-view",{key:i,staticClass:"cont_item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.go_shopdetail(e.id)}}},[1==e.is_recommend?n("v-uni-image",{staticClass:"imagea",attrs:{src:"https://zuanshi.semoh.cn/applet_static/zhek.png",mode:"aspectFill"}}):t._e(),n("v-uni-image",{staticClass:"images",attrs:{src:e.image,mode:"aspectFill"}}),n("v-uni-view",{staticClass:"it_tit"},[t._v(t._s(e.title))]),0==t.lv?n("v-uni-view",{staticClass:"it_selt"},[n("v-uni-view",{staticClass:"it_selt_l"},[n("v-uni-text",[t._v("￥"+t._s(e.price))])],1),n("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[n("v-uni-view",{staticClass:"it_selt_l"},[n("v-uni-text",{staticStyle:{color:"#ea5b72"}},[t._v("￥"+t._s(e.price_vip))]),n("v-uni-image",{staticClass:"u-m-l-16",attrs:{src:"https://zuanshi.semoh.cn/applet_static/pifa.png",mode:""}})],1),n("v-uni-view",{staticClass:"it_selt_r"},[t._v("已售"+t._s(e.sale)+"件")])],1)],1):t._e(),0!==t.lv?n("v-uni-view",{staticClass:"it_selt",staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[n("v-uni-view",{staticClass:"it_selt_l"},[n("v-uni-text",{staticStyle:{color:"#ea5b72"}},[t._v("￥"+t._s(e.price_vip))])],1),n("v-uni-view",{staticClass:"it_selt_r"},[t._v("已售"+t._s(e.sale)+"件")])],1):t._e()],1)})),1)},r=[]},5883:function(t,e,n){"use strict";var i=n("cb1c"),a=n.n(i);a.a},"6b75":function(t,e,n){"use strict";function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"6e02":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"@-webkit-keyframes _show-data-v-f207f29a{0%{opacity:0}100%{opacity:1}}@keyframes _show-data-v-f207f29a{0%{opacity:0}100%{opacity:1}}\n\n\n\n",""]),t.exports=e},"75f9":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.nodes.length?t._e():t._t("default"),n("v-uni-view",{style:t.showAm+(t.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{id:"_top"}},[n("div",{attrs:{id:"rtf"+t.uid}})])],2)},r=[]},"86b4":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cont[data-v-0f3ee6d9]{width:100%;display:flex;flex-wrap:wrap}.cont .cont_item[data-v-0f3ee6d9]{width:49%;margin-right:2%;border-radius:%?16?%;background-color:#fff;margin-top:%?10?%;overflow:hidden;position:relative;padding-bottom:%?10?%}.cont .cont_item .imagea[data-v-0f3ee6d9]{width:%?56?%;height:%?70?%;position:absolute;left:%?22?%;top:0;z-index:20}.cont .cont_item .images[data-v-0f3ee6d9]{width:%?350?%;height:%?350?%;background:url(https://zuanshi.semoh.cn/applet_static/loading.gif) no-repeat 50%;background-size:100% 84%}.cont .cont_item .it_tit[data-v-0f3ee6d9]{padding-left:%?10?%;font-size:%?28?%;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:%?56?%}.cont .cont_item .it_price[data-v-0f3ee6d9]{padding-left:%?10?%;font-weight:700;font-size:%?30?%}.cont .cont_item .it_selt[data-v-0f3ee6d9]{padding-left:%?10?%;width:100%;line-height:%?40?%}.cont .cont_item .it_selt .it_selt_l[data-v-0f3ee6d9]{display:flex}.cont .cont_item .it_selt .it_selt_l uni-text[data-v-0f3ee6d9]{font-size:%?30?%}.cont .cont_item .it_selt .it_selt_l uni-image[data-v-0f3ee6d9]{width:%?60?%;height:%?24?%;margin-top:%?10?%}.cont .cont_item .it_selt .it_selt_r[data-v-0f3ee6d9]{width:%?150?%;color:#998;font-size:%?22?%;text-align:right;margin-right:%?20?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cont .cont_item[data-v-0f3ee6d9]:nth-child(2n+2){margin-right:0}',""]),t.exports=e},"9a03":function(t,e,n){"use strict";n.r(e);var i=n("75f9"),a=n("20bd");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("cd5d");var o,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"f207f29a",null,!1,i["a"],o);e["default"]=c.exports},a59a:function(t,e,n){var i=n("6e02");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("0c2afa8a",i,!0,{sourceMap:!1,shadowMode:!1})},aa7a:function(t,e,n){"use strict";n.r(e);var i=n("dcb0"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},ab3f:function(t,e,n){"use strict";n.r(e);var i=n("5160"),a=n("3cc5");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("122d");var o,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"ea92a802",null,!1,i["a"],o);e["default"]=c.exports},b85c:function(t,e,n){"use strict";n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var i=a(n("06c5"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=(0,i.default)(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var a=0,r=function(){};return{s:r,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){c=!0,o=t},f:function(){try{s||null==n["return"]||n["return"]()}finally{if(c)throw o}}}}},bf1b:function(t,e,n){"use strict";var i=n("4ea4");n("99af"),n("caad"),n("c975"),n("acd8"),n("e25e"),n("ac1f"),n("2532"),n("466d"),n("5319"),n("841c"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,r=i(n("b85c")),o=uni.getSystemInfoSync(),s=o.windowWidth,c=(o.platform,n("055b")),l={name:"parser",data:function(){return{uid:this._uid,showAm:"",nodes:[]}},props:{html:String,autopause:{type:Boolean,default:!0},autoscroll:Boolean,autosetTitle:{type:Boolean,default:!0},domain:String,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},created:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,n=this.length;e<n;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var n,i=e.split("://")[0],a=i.length;n=e[a];a++){if("/"==n&&"/"!=e[a-1]&&"/"!=e[a+1])break;i+=Math.random()>.5?n.toUpperCase():n}return i+=e.substr(a),this[t]=i}if(this[t]=e,e.includes("data:image")){var r=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!r)return}}}},mounted:function(){var t=this;this.document=document.getElementById("rtf"+this._uid),a&&(this.search=function(e){return a(t,e)}),this.html&&this.setContent(this.html)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{setContent:function(t,e){var n=this;if(t){var i=document.createElement("div");e?this.rtf?this.rtf.appendChild(i):this.rtf=i:(this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=i),i.innerHTML=this._handleHtml(t,e);for(var a,o=this.rtf.getElementsByTagName("style"),l=0;a=o[l++];)a.innerHTML=a.innerHTML.replace(/body/g,"#rtf"+this._uid),a.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((function(t){for(var e,i=0;e=t[i++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),n._observer.unobserve(e.target))}),{rootMargin:"500px 0px 500px 0px"}));var u=this,d=this.rtf.getElementsByTagName("title");d.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:d[0].innerText});var f=function(t){var e=t.getAttribute("src");n.domain&&e&&("/"==e[0]?"/"==e[1]?t.src=(n.domain.includes("://")?n.domain.split("://")[0]:"")+":"+e:t.src=n.domain+e:e.includes("://")||0==e.indexOf("data:")||(t.src=n.domain+"/"+e))};this.imgList.length=0;for(var h,p=this.rtf.getElementsByTagName("img"),v=0,m=0;h=p[v];v++)parseInt(h.style.width||h.getAttribute("width"))>s&&(h.style.height="auto"),f(h),h.hasAttribute("ignore")||"A"==h.parentElement.nodeName||(h.i=m++,u.imgList.push(h.getAttribute("original-src")||h.src||h.getAttribute("data-src")),h.onclick=function(t){t.stopPropagation();var e=!0;this.ignore=function(){return e=!1},u.$emit("imgtap",this),e&&uni.previewImage({current:this.i,urls:u.imgList})}),h.onerror=function(){c.errorImg&&(u.imgList[this.i]=this.src=c.errorImg),u.$emit("error",{source:"img",target:this})},u.lazyLoad&&this._observer&&h.src&&0!=h.i&&(h.setAttribute("data-src",h.src),h.removeAttribute("src"),this._observer.observe(h));var g,b=this.rtf.getElementsByTagName("a"),y=(0,r.default)(b);try{for(y.s();!(g=y.n()).done;){var _=g.value;_.onclick=function(t){t.stopPropagation();var e=!0,n=this.getAttribute("href");if(u.$emit("linkpress",{href:n,ignore:function(){return e=!1}}),e&&n)if("#"==n[0])u.useAnchor&&u.navigateTo({id:n.substr(1)});else{if(0==n.indexOf("http")||0==n.indexOf("//"))return!0;uni.navigateTo({url:n})}return!1}}}catch(N){y.e(N)}finally{y.f()}var x=this.rtf.getElementsByTagName("video");u.videoContexts=x;for(var w,C=0;w=x[C++];)f(w),w.style.maxWidth="100%",w.onerror=function(){u.$emit("error",{source:"video",target:this})},w.onplay=function(){if(u.autopause)for(var t,e=0;t=u.videoContexts[e++];)t!=this&&t.pause()};var k,T,S=this.rtf.getElementsByTagName("audio"),A=(0,r.default)(S);try{for(A.s();!(k=A.n()).done;){var $=k.value;f($),$.onerror=function(){u.$emit("error",{source:"audio",target:this})}}}catch(N){A.e(N)}finally{A.f()}if(this.autoscroll){var M,I=this.rtf.getElementsByTagName("table"),z=(0,r.default)(I);try{for(z.s();!(M=z.n()).done;){var B=M.value,E=document.createElement("div");E.style.overflow="scroll",B.parentNode.replaceChild(E,B),E.appendChild(B)}}catch(N){z.e(N)}finally{z.f()}}e||this.document.appendChild(this.rtf),this.$nextTick((function(){n.nodes=[1],n.$emit("load")})),setTimeout((function(){return n.showAm=""}),500),clearInterval(this._timer),this._timer=setInterval((function(){n.rect=n.rtf.getBoundingClientRect(),n.rect.height==T&&(n.$emit("ready",n.rect),clearInterval(n._timer)),T=n.rect.height}),350),this.showWithAnimation&&!e&&(this.showAm="animation:_show .5s")}else this.rtf&&!e&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]||this.nodes;var t="";return t=this.rtf.innerText,t},in:function(t){t.page&&t.selector&&t.scrollTop&&(this._in=t)},navigateTo:function(t){var e=this;if(!this.useAnchor)return t.fail&&t.fail("Anchor is disabled");var n=" ",i=uni.createSelectorQuery().in(this._in?this._in.page:this).select((this._in?this._in.selector:"#_top")+(t.id?"".concat(n,"#").concat(t.id,",").concat(this._in?this._in.selector:"#_top").concat(n,".").concat(t.id):"")).boundingClientRect();this._in?i.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect():i.selectViewport().scrollOffset(),i.exec((function(n){if(!n[0])return t.fail&&t.fail("Label not found");var i=n[1].scrollTop+n[0].top-(n[2]?n[2].top:0)+(t.offset||0);e._in?e._in.page[e._in.scrollTop]=i:uni.pageScrollTo({scrollTop:i,duration:300}),t.success&&t.success()}))},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},_handleHtml:function(t,e){if(!e){var n="<style scoped>@keyframes _show{0%{opacity:0}100%{opacity:1}}img{max-width:100%}";for(var i in c.userAgentStyles)n+="".concat(i,"{").concat(c.userAgentStyles[i],"}");for(i in this.tagStyle)n+="".concat(i,"{").concat(this.tagStyle[i],"}");n+="</style>",t=n+t}return t.includes("rpx")&&(t=t.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*s/750+"px"}))),t}}};e.default=l},c2ea:function(t,e,n){"use strict";n.r(e);var i=n("5783"),a=n("aa7a");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("49cb");var o,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"0f3ee6d9",null,!1,i["a"],o);e["default"]=c.exports},cb1c:function(t,e,n){var i=n("d160");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("23f578de",i,!0,{sourceMap:!1,shadowMode:!1})},cd5d:function(t,e,n){"use strict";var i=n("a59a"),a=n.n(i);a.a},d160:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-numberbox[data-v-5634e5e7]{display:inline-flex;align-items:center}.u-number-input[data-v-5634e5e7]{position:relative;text-align:center;padding:0;margin:0 %?6?%;\ndisplay:flex;flex-direction:row;\nalign-items:center;justify-content:center}.u-icon-plus[data-v-5634e5e7],\n.u-icon-minus[data-v-5634e5e7]{width:%?60?%;\ndisplay:flex;flex-direction:row;\njustify-content:center;align-items:center}.u-icon-plus[data-v-5634e5e7]{border-radius:0 %?8?% %?8?% 0}.u-icon-minus[data-v-5634e5e7]{border-radius:%?8?% 0 0 %?8?%}.u-icon-disabled[data-v-5634e5e7]{color:#c8c9cc!important;background:#f7f8fa!important}.u-input-disabled[data-v-5634e5e7]{color:#c8c9cc!important;background-color:#f2f3f5!important}',""]),t.exports=e},dcb0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},props:{shop_list:{},lv:{default:0}},methods:{go_shopdetail:function(t){this.com.navto("../../pages/index/shop_detail?shop_id="+t)}}};e.default=i},e51b:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.mask[data-v-ea92a802]{position:fixed;left:0;top:0;right:0;bottom:0;display:flex;justify-content:center;align-items:flex-end;z-index:998;transition:.3s}.mask .bottom[data-v-ea92a802]{position:absolute;left:0;bottom:0;display:flex;justify-content:center;align-items:center;width:100%;height:%?90?%;background:#fff;z-index:9;font-size:%?30?%\n  /* color: $font-color-dark; */}.mask-content[data-v-ea92a802]{width:100%;height:%?580?%;transition:.3s;background:#fff}.mask-content.has-bottom[data-v-ea92a802]{padding-bottom:%?90?%}.mask-content .view-content[data-v-ea92a802]{height:100%}.share-header[data-v-ea92a802]{height:%?110?%;font-size:%?30?%;\n  /* color: font-color-dark; */display:flex;align-items:center;justify-content:center;padding-top:%?10?%}.share-header[data-v-ea92a802]:before, .share-header[data-v-ea92a802]:after{content:"";width:%?240?%;height:0;\n  /* border-top: 1px solid $border-color-base; */-webkit-transform:scaleY(.5);transform:scaleY(.5);margin-right:%?30?%}.share-header[data-v-ea92a802]:after{margin-left:%?30?%;margin-right:0}.share-list[data-v-ea92a802]{display:flex;flex-wrap:wrap}.share-item[data-v-ea92a802]{min-width:33.33%;display:flex;flex-direction:column;justify-content:center;align-items:center;height:%?180?%}.share-item uni-image[data-v-ea92a802]{width:%?80?%;height:%?80?%;margin-bottom:%?16?%}.share-item uni-text[data-v-ea92a802]{\n  /* font-size: $font-base; */\n  /* color: $font-color-base; */}',""]),t.exports=e}}]);