(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-customization~pages-my-evaluate~pages-my-fankui~pages-my-payments~pages-set-shop-add_shop_image"],{1675:function(e,t,i){"use strict";i.r(t);var n=i("71c9"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},1687:function(e,t,i){"use strict";i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var n={uIcon:i("c039").default,uLineProgress:i("5dee").default},r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.disabled?e._e():i("v-uni-view",{staticClass:"u-upload"},[e._l(e.lists,(function(t,n){return e.showUploadList?i("v-uni-view",{key:n,staticClass:"u-list-item u-preview-wrap",style:{width:e.$u.addUnit(e.width),height:e.$u.addUnit(e.height)}},[e.deletable?i("v-uni-view",{staticClass:"u-delete-icon",style:{background:e.delBgColor},on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.deleteItem(n)}}},[i("u-icon",{staticClass:"u-icon",attrs:{name:e.delIcon,size:"20",color:e.delColor}})],1):e._e(),e.showProgress&&t.progress>0&&!t.error?i("u-line-progress",{staticClass:"u-progress",attrs:{"show-percent":!1,height:"16",percent:t.progress}}):e._e(),t.error?i("v-uni-view",{staticClass:"u-error-btn",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.retry(n)}}},[e._v("点击重试")]):e._e(),t.isImage?e._e():i("v-uni-image",{staticClass:"u-preview-image",attrs:{src:t.url||t.path,mode:e.imageMode},on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.doPreviewImage(t.url||t.path,n)}}})],1):e._e()})),e._t("file",null,{file:e.lists}),e.maxCount>e.lists.length?i("v-uni-view",{staticStyle:{display:"inline-block"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectFile.apply(void 0,arguments)}}},[e._t("addBtn"),e.customBtn?e._e():i("v-uni-view",{staticClass:"u-list-item u-add-wrap",style:{width:e.$u.addUnit(e.width),height:e.$u.addUnit(e.height)},attrs:{"hover-class":"u-add-wrap__hover","hover-stay-time":"150"}},[i("u-icon",{staticClass:"u-add-btn",attrs:{name:"plus",size:"40"}}),i("v-uni-view",{staticClass:"u-add-tips"},[e._v(e._s(e.uploadText))])],1)],2):e._e()],2)},a=[]},"2ad3":function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"u-progress",style:{borderRadius:e.round?"100rpx":0,height:e.height+"rpx",backgroundColor:e.inactiveColor}},[i("v-uni-view",{staticClass:"u-active",class:[e.type?"u-type-"+e.type+"-bg":"",e.striped?"u-striped":"",e.striped&&e.stripedActive?"u-striped-active":""],style:[e.progressStyle]},[e.$slots.default||e.$slots.$default?e._t("default"):e.showPercent?[e._v(e._s(e.percent+"%"))]:e._e()],2)],1)},a=[]},"5dee":function(e,t,i){"use strict";i.r(t);var n=i("2ad3"),r=i("1675");for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);i("9458");var s,o=i("f0c5"),l=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"7a31a046",null,!1,n["a"],s);t["default"]=l.exports},"71c9":function(e,t,i){"use strict";i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"u-line-progress",props:{round:{type:Boolean,default:!0},type:{type:String,default:""},activeColor:{type:String,default:"#19be6b"},inactiveColor:{type:String,default:"#ececec"},percent:{type:Number,default:0},showPercent:{type:Boolean,default:!0},height:{type:[Number,String],default:28},striped:{type:Boolean,default:!1},stripedActive:{type:Boolean,default:!1}},data:function(){return{}},computed:{progressStyle:function(){var e={};return e.width=this.percent+"%",this.activeColor&&(e.backgroundColor=this.activeColor),e}},methods:{}};t.default=n},9458:function(e,t,i){"use strict";var n=i("a84a"),r=i.n(n);r.a},9491:function(e,t,i){"use strict";i.r(t);var n=i("1687"),r=i("a2dd");for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);i("9d7b");var s,o=i("f0c5"),l=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"482dddb6",null,!1,n["a"],s);t["default"]=l.exports},"9d7b":function(e,t,i){"use strict";var n=i("e110"),r=i.n(n);r.a},a2dd:function(e,t,i){"use strict";i.r(t);var n=i("aa6c"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},a84a:function(e,t,i){var n=i("dbfa");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("4f06").default;r("2b1bdb4e",n,!0,{sourceMap:!1,shadowMode:!1})},aa6c:function(e,t,i){"use strict";var n=i("4ea4");i("caad"),i("d81d"),i("45fc"),i("a434"),i("a9e3"),i("d3b7"),i("ac1f"),i("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var r=n(i("1da1")),a={name:"u-upload",props:{showUploadList:{type:Boolean,default:!0},action:{type:String,default:""},maxCount:{type:[String,Number],default:52},showProgress:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},imageMode:{type:String,default:"aspectFill"},header:{type:Object,default:function(){return{}}},formData:{type:Object,default:function(){return{}}},name:{type:String,default:"file"},sizeType:{type:Array,default:function(){return["original","compressed"]}},sourceType:{type:Array,default:function(){return["album","camera"]}},previewFullImage:{type:Boolean,default:!0},multiple:{type:Boolean,default:!0},deletable:{type:Boolean,default:!0},maxSize:{type:[String,Number],default:Number.MAX_VALUE},fileList:{type:Array,default:function(){return[]}},uploadText:{type:String,default:"选择图片"},autoUpload:{type:Boolean,default:!0},showTips:{type:Boolean,default:!0},customBtn:{type:Boolean,default:!1},width:{type:[String,Number],default:200},height:{type:[String,Number],default:200},delBgColor:{type:String,default:"#fa3534"},delColor:{type:String,default:"#ffffff"},delIcon:{type:String,default:"close"},toJson:{type:Boolean,default:!0},beforeUpload:{type:Function,default:null},beforeRemove:{type:Function,default:null},limitType:{type:Array,default:function(){return["png","jpg","jpeg","webp","gif","image"]}},index:{type:[Number,String],default:""}},mounted:function(){},data:function(){return{lists:[],isInCount:!0,uploading:!1}},watch:{fileList:{immediate:!0,handler:function(e){var t=this;e.map((function(e){var i=t.lists.some((function(t){return t.url==e.url}));!i&&t.lists.push({url:e.url,error:!1,progress:100})}))}},lists:function(e){this.$emit("on-list-change",e,this.index)}},methods:{clear:function(){this.lists=[]},reUpload:function(){this.uploadFile()},selectFile:function(){var e=this;if(!this.disabled){this.name;var t=this.maxCount,i=this.multiple,n=this.maxSize,r=this.sizeType,a=this.lists,s=(this.camera,this.compressed,this.maxDuration,this.sourceType),o=null,l=t-a.length;o=new Promise((function(e,t){uni.chooseImage({count:i?l>9?9:l:1,sourceType:s,sizeType:r,success:e,fail:t})})),o.then((function(r){var s=e.lists.length;r.tempFiles.map((function(r,s){if(e.checkFileExt(r)&&(i||!(s>=1)))if(r.size>n)e.$emit("on-oversize",r,e.lists,e.index),e.showToast("超出允许的文件大小");else{if(t<=a.length)return e.$emit("on-exceed",r,e.lists,e.index),void e.showToast("超出最大允许的文件个数");a.push({url:r.path,progress:0,error:!1,file:r})}})),e.$emit("on-choose-complete",e.lists,e.index),e.autoUpload&&e.uploadFile(s)})).catch((function(t){e.$emit("on-choose-fail",t)}))}},showToast:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(this.showTips||t)&&uni.showToast({title:e,icon:"none"})},upload:function(){this.uploadFile()},retry:function(e){this.lists[e].progress=0,this.lists[e].error=!1,this.lists[e].response=null,uni.showLoading({title:"重新上传"}),this.uploadFile(e)},uploadFile:function(){var e=arguments,t=this;return(0,r.default)(regeneratorRuntime.mark((function i(){var n,r,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(n=e.length>0&&void 0!==e[0]?e[0]:0,!t.disabled){i.next=3;break}return i.abrupt("return");case 3:if(!t.uploading){i.next=5;break}return i.abrupt("return");case 5:if(!(n>=t.lists.length)){i.next=8;break}return t.$emit("on-uploaded",t.lists,t.index),i.abrupt("return");case 8:if(100!=t.lists[n].progress){i.next=11;break}return 0==t.autoUpload&&t.uploadFile(n+1),i.abrupt("return");case 11:if(!t.beforeUpload||"function"!==typeof t.beforeUpload){i.next=22;break}if(r=t.beforeUpload.bind(t.$u.$parent.call(t))(n,t.lists),!r||"function"!==typeof r.then){i.next=18;break}return i.next=16,r.then((function(e){})).catch((function(e){return t.uploadFile(n+1)}));case 16:i.next=22;break;case 18:if(!1!==r){i.next=22;break}return i.abrupt("return",t.uploadFile(n+1));case 22:if(t.action){i.next=25;break}return t.showToast("请配置上传地址",!0),i.abrupt("return");case 25:t.lists[n].error=!1,t.uploading=!0,a=uni.uploadFile({url:t.action,filePath:t.lists[n].url,name:t.name,formData:t.formData,header:t.header,success:function(e){var i=t.toJson&&t.$u.test.jsonString(e.data)?JSON.parse(e.data):e.data;[200,201,204].includes(e.statusCode)?(t.lists[n].response=i,t.lists[n].progress=100,t.lists[n].error=!1,t.$emit("on-success",i,n,t.lists,t.index)):t.uploadError(n,i)},fail:function(e){t.uploadError(n,e)},complete:function(e){uni.hideLoading(),t.uploading=!1,t.uploadFile(n+1),t.$emit("on-change",e,n,t.lists,t.index)}}),a.onProgressUpdate((function(e){e.progress>0&&(t.lists[n].progress=e.progress,t.$emit("on-progress",e,n,t.lists,t.index))}));case 29:case"end":return i.stop()}}),i)})))()},uploadError:function(e,t){this.lists[e].progress=0,this.lists[e].error=!0,this.lists[e].response=null,this.$emit("on-error",t,e,this.lists,this.index),this.showToast("上传失败，请重试")},deleteItem:function(e){var t=this;uni.showModal({title:"提示",content:"您确定要删除此项吗？",success:function(){var i=(0,r.default)(regeneratorRuntime.mark((function i(n){var r;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!n.confirm){i.next=12;break}if(!t.beforeRemove||"function"!==typeof t.beforeRemove){i.next=11;break}if(r=t.beforeRemove.bind(t.$u.$parent.call(t))(e,t.lists),!r||"function"!==typeof r.then){i.next=8;break}return i.next=6,r.then((function(i){t.handlerDeleteItem(e)})).catch((function(e){t.showToast("已终止移除")}));case 6:i.next=9;break;case 8:!1===r?t.showToast("已终止移除"):t.handlerDeleteItem(e);case 9:i.next=12;break;case 11:t.handlerDeleteItem(e);case 12:case"end":return i.stop()}}),i)})));function n(e){return i.apply(this,arguments)}return n}()})},handlerDeleteItem:function(e){this.lists[e].process<100&&this.lists[e].process>0&&"undefined"!=typeof this.lists[e].uploadTask&&this.lists[e].uploadTask.abort(),this.lists.splice(e,1),this.$forceUpdate(),this.$emit("on-remove",e,this.lists,this.index),this.showToast("移除成功")},remove:function(e){e>=0&&e<this.lists.length&&(this.lists.splice(e,1),this.$emit("on-list-change",this.lists,this.index))},doPreviewImage:function(e,t){var i=this;if(this.previewFullImage){var n=this.lists.map((function(e){return e.url||e.path}));uni.previewImage({urls:n,current:e,success:function(){i.$emit("on-preview",e,i.lists,i.index)},fail:function(){uni.showToast({title:"预览图片失败",icon:"none"})}})}},checkFileExt:function(e){var t=!1,i="",n=/.+\./;return i=e.name.replace(n,"").toLowerCase(),t=this.limitType.some((function(e){return e.toLowerCase()===i})),t||this.showToast("不允许选择".concat(i,"格式的文件")),t}}};t.default=a},c97a:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-upload[data-v-482dddb6]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-list-item[data-v-482dddb6]{width:%?200?%;height:%?200?%;overflow:hidden;margin:%?10?%;background:#f4f5f6;position:relative;border-radius:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.u-preview-wrap[data-v-482dddb6]{border:1px solid #ebecee}.u-add-wrap[data-v-482dddb6]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;color:#606266;font-size:%?26?%}.u-add-tips[data-v-482dddb6]{margin-top:%?20?%;line-height:%?40?%}.u-add-wrap__hover[data-v-482dddb6]{background-color:#ebecee}.u-preview-image[data-v-482dddb6]{display:block;width:100%;height:100%;border-radius:%?10?%}.u-delete-icon[data-v-482dddb6]{position:absolute;top:%?10?%;right:%?10?%;z-index:10;background-color:#fa3534;border-radius:%?100?%;width:%?44?%;height:%?44?%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.u-icon[data-v-482dddb6]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.u-progress[data-v-482dddb6]{position:absolute;bottom:%?10?%;left:%?8?%;right:%?8?%;z-index:9;width:auto}.u-error-btn[data-v-482dddb6]{color:#fff;background-color:#fa3534;font-size:%?20?%;padding:4px 0;text-align:center;position:absolute;bottom:0;left:0;right:0;z-index:9;line-height:1}',""]),e.exports=t},dbfa:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-progress[data-v-7a31a046]{overflow:hidden;height:15px;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;border-radius:%?100?%}.u-active[data-v-7a31a046]{width:0;height:100%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\njustify-items:flex-end;-webkit-justify-content:space-around;justify-content:space-around;font-size:%?20?%;color:#fff;-webkit-transition:all .4s ease;transition:all .4s ease}.u-striped[data-v-7a31a046]{background-image:-webkit-linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:39px 39px}.u-striped-active[data-v-7a31a046]{-webkit-animation:progress-stripes-data-v-7a31a046 2s linear infinite;animation:progress-stripes-data-v-7a31a046 2s linear infinite}@-webkit-keyframes progress-stripes-data-v-7a31a046{0%{background-position:0 0}100%{background-position:39px 0}}@keyframes progress-stripes-data-v-7a31a046{0%{background-position:0 0}100%{background-position:39px 0}}',""]),e.exports=t},e110:function(e,t,i){var n=i("c97a");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("4f06").default;r("48a852ac",n,!0,{sourceMap:!1,shadowMode:!1})}}]);