(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/customization"],{"1faa":function(t,n,e){},"3e6c":function(t,n,e){"use strict";(function(t){e("4963");o(e("66fd"));var n=o(e("8fdc"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},4236:function(t,n,e){"use strict";var o=e("1faa"),s=e.n(o);s.a},"62de":function(t,n,e){"use strict";e.r(n);var o=e("c300"),s=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);n["default"]=s.a},"8fdc":function(t,n,e){"use strict";e.r(n);var o=e("d355"),s=e("62de");for(var i in s)"default"!==i&&function(t){e.d(n,t,(function(){return s[t]}))}(i);e("4236");var a,u=e("f0c5"),c=Object(u["a"])(s["default"],o["b"],o["c"],!1,null,"00da0485",null,!1,o["a"],a);n["default"]=c.exports},c300:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=s(e("a34a"));function s(t){return t&&t.__esModule?t:{default:t}}function i(t,n,e,o,s,i,a){try{var u=t[i](a),c=u.value}catch(r){return void e(r)}u.done?n(c):Promise.resolve(c).then(o,s)}function a(t){return function(){var n=this,e=arguments;return new Promise((function(o,s){var a=t.apply(n,e);function u(t){i(a,o,s,u,c,"next",t)}function c(t){i(a,o,s,u,c,"throw",t)}u(void 0)}))}}var u={data:function(){return{name:"",phone:"",discride:"",action:"https://zuanshi.semoh.cn/api/uploads",lists:[],ship_list:[],token:{token:t.getStorageSync("token")}}},onReady:function(){this.lists=this.$refs.uUpload.lists},methods:{videos:function(){var n=this;t.chooseVideo({maxDuration:60,count:1,sourceType:["camera","album"],success:function(e){if(console.log(e),e.size/1024/1024>10)n.com.msg("上传视频不能大于5MB");else{var o=e.tempFilePath;n.com.msg("正在上传"),t.uploadFile({url:"https://zuanshi.semoh.cn/api/uploadVideo",filePath:o,name:"file",formData:{user:"test"},header:n.token,success:function(e){var o=JSON.parse(e.data);console.log(o),1==o.status&&(t.hideToast(),n.com.msg("上传成功"),n.ship_list.push(o.data),console.log(n.ship_list))}})}}})},del_vid:function(n){console.log(n);var e=this;t.showModal({title:"提示",content:"您确定要删除此项吗？",success:function(){var t=a(o.default.mark((function t(s){return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s.confirm&&(e.ship_list.splice(n,1),console.log(e.ship_list));case 1:case"end":return t.stop()}}),t)})));function s(n){return t.apply(this,arguments)}return s}()})},but_cli:function(){this.lists=this.$refs.uUpload.lists;var n="",e="";this.lists.forEach((function(t){console.log(t),t.response&&(n+=t.response.data+",",e=n.substr(0,n.length-1))}));var o="",s="";this.ship_list.forEach((function(t){o+=t+",",s=o.substr(0,o.length-1),console.log(o)}));var i={name:this.name,mobile:this.phone,contact:this.discride,images:e,videos:s};this.$api.post("customization",i).then((function(n){console.log(n),1==n.status&&t.showModal({title:n.message,content:"请添加客服微信:"+n.data,confirmText:"复制并打开微信",cancelText:"复制并返回",success:function(e){e.confirm?t.setClipboardData({data:n.data,success:function(){plus.runtime.openURL("weixin://")}}):t.setClipboardData({data:n.data,success:function(){t.navigateBack()}})}})}))}}};n.default=u}).call(this,e("543d")["default"])},d355:function(t,n,e){"use strict";e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return o}));var o={uUpload:function(){return Promise.all([e.e("common/vendor"),e.e("uview-ui/components/u-upload/u-upload")]).then(e.bind(null,"01bf"))},uIcon:function(){return e.e("uview-ui/components/u-icon/u-icon").then(e.bind(null,"c93f"))},zsButton:function(){return e.e("components/zs-button/zs-button").then(e.bind(null,"e692"))}},s=function(){var t=this,n=t.$createElement;t._self._c},i=[]}},[["3e6c","common/runtime","common/vendor"]]]);