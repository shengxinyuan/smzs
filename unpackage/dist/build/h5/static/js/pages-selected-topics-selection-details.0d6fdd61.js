(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-selected-topics-selection-details"],{"0242":function(t,n,e){"use strict";e.r(n);var a=e("da73"),i=e("67e9");for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("dd5a");var s,o=e("f0c5"),c=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"58705d34",null,!1,a["a"],s);n["default"]=c.exports},"02a1":function(t,n,e){t.exports=e.p+"static/img/hunjia_02.72df87c4.png"},1777:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{list:[{name:"婚庆三金"},{name:"裸钻专区"},{name:"定制专区"},{name:"宝宝专区"},{name:"宝宝专区"}],current:0,height:"50",activeColor:"#2d407a",bgColor:"#F8F8F8"}},methods:{changeTabs:function(t){this.current=t,this.isShow01=0===t,this.isShow02=1===t,this.isShow03=2===t}}};n.default=a},"31dc":function(t,n,e){var a=e("c849");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("c07dfd68",a,!0,{sourceMap:!1,shadowMode:!1})},"67e9":function(t,n,e){"use strict";e.r(n);var a=e("1777"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},c849:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.head-image[data-v-58705d34]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex}.head-image uni-image[data-v-58705d34]{width:100%}.selection-tabs[data-v-58705d34]{margin-top:%?30?%}',""]),t.exports=n},da73:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var a={uTabs:e("f05f").default,zsShoplistType:e("8699").default},i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"zl-page"},[a("v-uni-view",{staticClass:"head-image"},[a("v-uni-image",{attrs:{src:e("02a1"),mode:"widthFix"}})],1),a("v-uni-view",{staticClass:"selection-tabs"},[a("u-tabs",{attrs:{list:t.list,"is-scroll":!0,current:t.current,height:t.height,"font-size":28,"bar-width":30,"bar-height":4,"active-color":t.activeColor,"bg-color":t.bgColor},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.changeTabs.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticStyle:{padding:"0 3%",position:"relative","padding-top":"80rpx"}},[a("zs-shoplist-type")],1)],1)},r=[]},dd5a:function(t,n,e){"use strict";var a=e("31dc"),i=e.n(a);i.a}}]);